/**
 * Diagnosis System Initialization
 * Sets up the diagnosis questionnaire controller on page load
 */

import { DiagnosisUIController, DiagnosisUIConfig } from './diagnosisUI';

let diagnosisController: DiagnosisUIController | null = null;

/**
 * Initialize the diagnosis system
 * Should be called after DOM is fully loaded
 */
export function initializeDiagnosis(config?: Partial<DiagnosisUIConfig>) {
  // Default configuration
  const defaultConfig: DiagnosisUIConfig = {
    totalQuestions: 5, // Will be auto-detected if not specified
    progressBarSelector: '[data-name="進捗バー"]',
    progressTextSelector: '[data-name="進捗バー"] p',
    submitButtonSelector: '[data-name="CTAボタン"]',
    questionContainerSelector: '[data-name="診断セクション"]',
    resultContainerSelector: '[data-name="結果セクション"]',
    percentageDisplaySelector: '[class*="text-[#dc546b]"]',
    messageDisplaySelector: '[data-name="結果メッセージ"]',
    circleAnimationDuration: 1000, // 1 second animation
    ...config,
  };

  // Create and store the controller
  diagnosisController = new DiagnosisUIController(defaultConfig);

  console.log('[Diagnosis] System initialized');
}

/**
 * Get the current diagnosis controller instance
 */
export function getDiagnosisController(): DiagnosisUIController | null {
  return diagnosisController;
}

/**
 * Reset the diagnosis questionnaire
 */
export function resetDiagnosis() {
  if (diagnosisController) {
    diagnosisController.reset();
  }
}

/**
 * Auto-initialize on page load if running in browser
 */
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeDiagnosis();
    });
  } else {
    // DOM is already loaded
    initializeDiagnosis();
  }
}
