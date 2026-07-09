/**
 * Diagnosis Logic Module
 * Handles questionnaire state management, validation, calculation, and results
 */

export interface QuestionState {
  [questionId: string]: number | null;
}

export interface DiagnosisResult {
  percentage: number;
  message: string;
  level: 'high' | 'medium' | 'low';
}

// Score mapping for each answer (1-5 scale where 1 = "very much applies", 5 = "not at all applies")
// Higher score = higher risk
const SCORE_MAP = {
  1: 5, // とても当てはまる = 5 points
  2: 4, // やや当てはまる = 4 points
  3: 3, // どちらともいえない = 3 points
  4: 2, // あまり当てはまらない = 2 points
  5: 1, // まったく当てはまらない = 1 point
};

/**
 * Calculate the diagnosis percentage based on answers
 * @param answers Object mapping question IDs to selected option (1-5)
 * @param totalQuestions Total number of questions (for dynamic calculation)
 * @returns DiagnosisResult with percentage and interpretation
 */
export function calculateDiagnosis(
  answers: QuestionState,
  totalQuestions: number
): DiagnosisResult {
  // Calculate total score
  let totalScore = 0;
  for (const key in answers) {
    if (answers[key] !== null && answers[key] !== undefined) {
      totalScore += SCORE_MAP[answers[key] as keyof typeof SCORE_MAP];
    }
  }

  // Maximum possible score
  const maxScore = totalQuestions * 5;

  // Calculate percentage
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Determine diagnosis level and message
  let level: 'high' | 'medium' | 'low';
  let message: string;

  if (percentage >= 65) {
    level = 'high';
    message = '既婚者の可能性が高い可能性があります。';
  } else if (percentage >= 40) {
    level = 'medium';
    message = '既婚者の可能性が疑われます。';
  } else {
    level = 'low';
    message = '既婚者の可能性は低いと考えられます。';
  }

  return { percentage, message, level };
}

/**
 * Validate that all questions have been answered
 * @param answers Object mapping question IDs to selected option
 * @param totalQuestions Total number of questions
 * @returns true if all questions answered, false otherwise
 */
export function validateAllAnswered(
  answers: QuestionState,
  totalQuestions: number
): boolean {
  let answeredCount = 0;
  for (const key in answers) {
    if (answers[key] !== null && answers[key] !== undefined) {
      answeredCount++;
    }
  }
  return answeredCount === totalQuestions;
}

/**
 * Calculate progress percentage
 * @param answers Object mapping question IDs to selected option
 * @param totalQuestions Total number of questions
 * @returns Progress percentage (0-100)
 */
export function calculateProgress(
  answers: QuestionState,
  totalQuestions: number
): number {
  let answeredCount = 0;
  for (const key in answers) {
    if (answers[key] !== null && answers[key] !== undefined) {
      answeredCount++;
    }
  }
  return Math.round((answeredCount / totalQuestions) * 100);
}

/**
 * Get animation frames for circular progress animation
 * @param startPercent Starting percentage
 * @param endPercent Ending percentage
 * @param duration Duration in milliseconds
 * @param fps Frames per second
 * @returns Array of percentages for animation frames
 */
export function getAnimationFrames(
  startPercent: number,
  endPercent: number,
  duration: number = 1000,
  fps: number = 60
): number[] {
  const frames: number[] = [];
  const totalFrames = Math.round((duration / 1000) * fps);
  const increment = (endPercent - startPercent) / totalFrames;

  for (let i = 0; i <= totalFrames; i++) {
    frames.push(Math.round(startPercent + increment * i));
  }

  return frames;
}

/**
 * Format diagnosis result for display
 * @param result DiagnosisResult object
 * @returns Formatted string for display
 */
export function formatDiagnosisResult(result: DiagnosisResult): string {
  return `${result.percentage}% - ${result.message}`;
}
