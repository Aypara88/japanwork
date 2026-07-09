import { useState, useEffect } from 'react';
import {
  QuestionState,
  DiagnosisResult,
  calculateDiagnosis,
  validateAllAnswered,
  calculateProgress,
} from '@/lib/diagnosis';

/**
 * Custom hook for managing diagnosis questionnaire state
 * Provides answer management, validation, progress tracking, and result calculation
 */
export function useDiagnosis(totalQuestions: number) {
  const [answers, setAnswers] = useState<QuestionState>({});
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Update progress whenever answers change
  useEffect(() => {
    const newProgress = calculateProgress(answers, totalQuestions);
    setProgress(newProgress);
  }, [answers, totalQuestions]);

  /**
   * Handle answer selection
   * Only allows one answer per question
   */
  const selectAnswer = (questionId: string, option: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === option ? null : option, // Toggle: deselect if same option, select otherwise
    }));
    setValidationError(null); // Clear any previous validation error
  };

  /**
   * Get selected answer for a question (for highlighting)
   */
  const getSelectedAnswer = (questionId: string): number | null => {
    return answers[questionId] || null;
  };

  /**
   * Validate and calculate diagnosis
   */
  const submitDiagnosis = () => {
    if (!validateAllAnswered(answers, totalQuestions)) {
      const unansweredCount = totalQuestions - Object.keys(answers).length;
      setValidationError(
        `${unansweredCount}個の質問に答えてください。`
      );
      return;
    }

    setValidationError(null);
    const diagnosisResult = calculateDiagnosis(answers, totalQuestions);
    setResult(diagnosisResult);
    setShowResult(true);
  };

  /**
   * Reset the questionnaire
   */
  const reset = () => {
    setAnswers({});
    setProgress(0);
    setResult(null);
    setShowResult(false);
    setValidationError(null);
  };

  return {
    answers,
    progress,
    result,
    showResult,
    validationError,
    selectAnswer,
    getSelectedAnswer,
    submitDiagnosis,
    reset,
  };
}
