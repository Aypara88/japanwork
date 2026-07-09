import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  calculateDiagnosis,
  validateAllAnswered,
  calculateProgress,
  type QuestionState,
  type DiagnosisResult,
} from '@/lib/diagnosis';

interface DiagnosisContextType {
  answers: QuestionState;
  progress: number;
  result: DiagnosisResult | null;
  showResult: boolean;
  validationError: string | null;
  selectAnswer: (questionId: string, option: number) => void;
  getSelectedAnswer: (questionId: string) => number | null;
  submitDiagnosis: (totalQuestions: number) => void;
  reset: () => void;
  setTotalQuestions: (total: number) => void;
}

const DiagnosisContext = createContext<DiagnosisContextType | undefined>(undefined);

export function DiagnosisProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<QuestionState>({});
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [totalQuestions, setTotalQuestionsState] = useState(0);

  // Update progress whenever answers change
  useEffect(() => {
    if (totalQuestions > 0) {
      const newProgress = calculateProgress(answers, totalQuestions);
      setProgress(newProgress);
    }
  }, [answers, totalQuestions]);

  const selectAnswer = useCallback((questionId: string, option: number) => {
    setAnswers((prev) => {
      // Toggle: if same option selected, deselect; otherwise select
      const newAnswers = { ...prev };
      newAnswers[questionId] = prev[questionId] === option ? null : option;
      return newAnswers;
    });
    setValidationError(null); // Clear any previous validation error
  }, []);

  const getSelectedAnswer = useCallback((questionId: string): number | null => {
    return answers[questionId] || null;
  }, [answers]);

  const submitDiagnosis = useCallback((questionsTotal: number) => {
    if (!validateAllAnswered(answers, questionsTotal)) {
      const answeredCount = Object.values(answers).filter((a) => a !== null).length;
      const unansweredCount = questionsTotal - answeredCount;
      setValidationError(`${unansweredCount}個の質問に答えてください。`);
      return;
    }

    setValidationError(null);
    const diagnosisResult = calculateDiagnosis(answers, questionsTotal);
    setResult(diagnosisResult);
    setShowResult(true);
  }, [answers]);

  const reset = useCallback(() => {
    setAnswers({});
    setProgress(0);
    setResult(null);
    setShowResult(false);
    setValidationError(null);
  }, []);

  const setTotalQuestions = useCallback((total: number) => {
    setTotalQuestionsState(total);
  }, []);

  return (
    <DiagnosisContext.Provider
      value={{
        answers,
        progress,
        result,
        showResult,
        validationError,
        selectAnswer,
        getSelectedAnswer,
        submitDiagnosis,
        reset,
        setTotalQuestions,
      }}
    >
      {children}
    </DiagnosisContext.Provider>
  );
}

export function useDiagnosisContext() {
  const context = useContext(DiagnosisContext);
  if (!context) {
    throw new Error('useDiagnosisContext must be used within DiagnosisProvider');
  }
  return context;
}
