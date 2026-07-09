/**
 * Diagnosis UI Controller
 * Handles DOM manipulation and user interactions for the diagnosis questionnaire
 * Works with the existing HTML structure (absolute positioned elements)
 */

import {
  calculateDiagnosis,
  validateAllAnswered,
  calculateProgress,
  getAnimationFrames,
} from './diagnosis';

export interface DiagnosisUIConfig {
  totalQuestions: number;
  progressBarSelector: string;
  progressTextSelector: string;
  submitButtonSelector: string;
  questionContainerSelector: string;
  resultContainerSelector: string;
  percentageDisplaySelector: string;
  messageDisplaySelector: string;
  circleAnimationDuration: number;
}

export class DiagnosisUIController {
  private answers: { [key: string]: number | null } = {};
  private config: DiagnosisUIConfig;
  private questionElements: HTMLElement[] = [];
  private initialized: boolean = false;

  constructor(config: DiagnosisUIConfig) {
    this.config = config;
    this.initializeQuestions();
    if (this.questionElements.length > 0) {
      this.attachEventListeners();
      this.initialized = true;
      console.log(`[DiagnosisUI] Initialized with ${this.config.totalQuestions} questions`);
    } else {
      console.warn('[DiagnosisUI] No questions found on page');
    }
  }

  /**
   * Detect and store all question elements dynamically
   */
  private initializeQuestions() {
    // Strategy: Find all divs with data-name="Q" which are the question blocks
    const questionsByDataName = Array.from(document.querySelectorAll('[data-name="Q"]')) as HTMLElement[];
    
    if (questionsByDataName.length > 0) {
      this.questionElements = questionsByDataName;
      console.log(`[DiagnosisUI] Found ${questionsByDataName.length} questions by data-name attribute`);
    } else {
      // Fallback: Find divs that look like question blocks
      // They contain SVG circles and have specific text labels
      const allDivs = Array.from(document.querySelectorAll('div')) as HTMLElement[];
      const questionCandidates: HTMLElement[] = [];
      
      allDivs.forEach((div) => {
        const hasCircles = div.querySelectorAll('svg circle').length >= 5;
        const hasQText = Array.from(div.querySelectorAll('*')).some((el) => {
          const text = el.textContent?.trim();
          return /^Q[0-9]$/.test(text || '');
        });
        
        if (hasCircles && hasQText) {
          questionCandidates.push(div);
        }
      });
      
      // Sort by top position if found via class
      this.questionElements = questionCandidates.sort((a, b) => {
        const getTop = (el: HTMLElement) => {
          const classAttr = el.getAttribute('class') || '';
          const match = classAttr.match(/top-\[(\d+)px\]/);
          return parseInt(match?.[1] || '0', 10);
        };
        return getTop(a) - getTop(b);
      });
      
      if (this.questionElements.length > 0) {
        console.log(`[DiagnosisUI] Found ${this.questionElements.length} questions by content inspection`);
      }
    }

    // Initialize answers
    this.questionElements.forEach((_, index) => {
      this.answers[`q${index}`] = null;
    });

    // Update config with detected total
    this.config.totalQuestions = this.questionElements.length;
  }

  /**
   * Attach event listeners to all answer circles
   */
  private attachEventListeners() {
    this.questionElements.forEach((question, qIndex) => {
      // Find SVG circles in this question
      const svgDivs = question.querySelectorAll('div[class*="absolute"]');
      let circleIndex = 0;

      svgDivs.forEach((svgDiv) => {
        const svg = svgDiv.querySelector('svg');
        if (!svg) return;

        const circle = svg.querySelector('circle');
        if (!circle) return;

        // Make it clickable
        (svgDiv as HTMLElement).style.cursor = 'pointer';
        
        // Store current circle index before closure
        const currentCircleIndex = circleIndex;
        circleIndex++;

        svgDiv.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectAnswer(`q${qIndex}`, currentCircleIndex + 1);
        });
      });
    });

    // Attach submit button listener - find by looking for button with diagnosis text
    const allElements = document.querySelectorAll('*');
    let submitBtn: HTMLElement | null = null;
    
    allElements.forEach((elem) => {
      const text = elem.textContent || '';
      if (text.includes('診断結果を見る') || text.includes('結婚で診断を始める')) {
        const parent = elem.closest('div[class*="rounded"]');
        if (parent) {
          submitBtn = parent as HTMLElement;
        }
      }
    });

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.submitDiagnosis();
      });
    }
  }

  /**
   * Handle answer selection
   */
  private selectAnswer(questionId: string, option: number) {
    // Toggle: if same option selected, deselect; otherwise select
    if (this.answers[questionId] === option) {
      this.answers[questionId] = null;
    } else {
      this.answers[questionId] = option;
    }

    this.updateUI();
  }

  /**
   * Update visual state based on current answers
   */
  private updateUI() {
    // Update progress bar
    this.updateProgressBar();

    // Update circle highlighting
    this.updateCircleHighlighting();
  }

  /**
   * Update progress bar visual and text
   */
  private updateProgressBar() {
    const progress = calculateProgress(this.answers, this.config.totalQuestions);
    
    const progressText = document.querySelector(
      this.config.progressTextSelector
    );
    if (progressText) {
      progressText.textContent = `${progress}%`;
    }

    // Update progress bar fill width (approximate calculation)
    const progressBar = document.querySelector(this.config.progressBarSelector);
    if (progressBar) {
      const fillBar = progressBar.querySelector('[class*="bg-"]');
      if (fillBar) {
        const width = `${progress}%`;
        (fillBar as HTMLElement).style.width = width;
      }
    }
  }

  /**
   * Update circle highlighting based on selected answers
   */
  private updateCircleHighlighting() {
    this.questionElements.forEach((question, qIndex) => {
      const circles = question.querySelectorAll('svg circle[fill*="#"]');
      const selectedOption = this.answers[`q${qIndex}`];

      circles.forEach((circle, optionIndex) => {
        const isSelected = selectedOption === optionIndex + 1;
        
        // Update fill color based on selection
        if (isSelected) {
          circle.setAttribute('fill', 'var(--fill-0, #E8B7C6)'); // Pink highlight
        } else {
          circle.setAttribute('fill', 'var(--fill-0, #D9D9D9)'); // Gray
        }
      });
    });
  }

  /**
   * Validate and submit diagnosis
   */
  private submitDiagnosis() {
    if (!validateAllAnswered(this.answers, this.config.totalQuestions)) {
      const unansweredCount = this.config.totalQuestions - 
        Object.values(this.answers).filter(a => a !== null).length;
      alert(`${unansweredCount}個の質問に答えてください。`);
      return;
    }

    const result = calculateDiagnosis(this.answers, this.config.totalQuestions);
    this.displayResult(result);
  }

  /**
   * Display diagnosis result with animation
   */
  private displayResult(result: { percentage: number; message: string }) {
    const resultContainer = document.querySelector(
      this.config.resultContainerSelector
    );
    if (!resultContainer) return;

    // Animate the percentage
    const percentageDisplay = resultContainer.querySelector(
      this.config.percentageDisplaySelector
    );
    if (percentageDisplay) {
      this.animatePercentage(percentageDisplay as HTMLElement, 0, result.percentage);
    }

    // Set the message
    const messageDisplay = resultContainer.querySelector(
      this.config.messageDisplaySelector
    );
    if (messageDisplay) {
      messageDisplay.textContent = result.message;
    }

    // Show result container and hide questionnaire
    const questionContainer = document.querySelector(
      this.config.questionContainerSelector
    );
    if (questionContainer) {
      (questionContainer as HTMLElement).style.display = 'none';
    }
    (resultContainer as HTMLElement).style.display = 'block';
  }

  /**
   * Animate percentage from 0 to target
   */
  private animatePercentage(
    element: HTMLElement,
    startPercent: number,
    endPercent: number
  ) {
    const frames = getAnimationFrames(
      startPercent,
      endPercent,
      this.config.circleAnimationDuration
    );
    let frameIndex = 0;

    const animateFrame = () => {
      if (frameIndex < frames.length) {
        element.textContent = `${frames[frameIndex]}%`;
        frameIndex++;
        requestAnimationFrame(animateFrame);
      }
    };

    animateFrame();
  }

  /**
   * Reset the questionnaire
   */
  public reset() {
    this.answers = {};
    this.config.totalQuestions === 0 
      ? this.initializeQuestions() 
      : Object.keys(this.answers).forEach(key => {
          this.answers[key] = null;
        });
    this.updateUI();
  }

  /**
   * Get current answers state
   */
  public getAnswers() {
    return { ...this.answers };
  }

  /**
   * Get current progress
   */
  public getProgress() {
    return calculateProgress(this.answers, this.config.totalQuestions);
  }
}
