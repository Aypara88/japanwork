/**
 * Diagnosis Handler - Vanilla JS approach
 * Works with DOM elements to manage diagnosis questionnaire state
 */

interface DiagnosisState {
  answers: { [qIndex: number]: number | null };
  totalQuestions: number;
}

export class DiagnosisHandler {
  private state: DiagnosisState = {
    answers: {},
    totalQuestions: 0,
  };
  private circleElements: SVGCircleElement[] = [];
  private questionContainers: HTMLElement[] = [];

  /**
   * Initialize the diagnosis handler
   * Should be called after DOM is loaded
   */
  public async init() {
    // Give the page time to fully render
    await this.wait(500);

    this.detectQuestionElements();
    this.attachCircleListeners();
    this.attachSubmitListener();
    this.logInitialization();
  }

  /**
   * Detect all question containers and circles
   */
  private detectQuestionElements() {
    // Find all SVG circles in the document
    const allCircles = Array.from(document.querySelectorAll('svg circle')) as SVGCircleElement[];

    // Group circles by their parent question block
    const circlesByQuestion = new Map<HTMLElement, SVGCircleElement[]>();

    allCircles.forEach((circle) => {
      // Find the question container (parent div with absolute positioning)
      const questionContainer = this.findQuestionContainer(circle);
      if (questionContainer) {
        if (!circlesByQuestion.has(questionContainer)) {
          circlesByQuestion.set(questionContainer, []);
        }
        circlesByQuestion.get(questionContainer)!.push(circle);
      }
    });

    // Sort by document order and store
    this.questionContainers = Array.from(circlesByQuestion.keys()).sort((a, b) => {
      return (
        (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
      );
    });

    // Initialize state
    this.state.totalQuestions = this.questionContainers.length;
    this.questionContainers.forEach((_, index) => {
      this.state.answers[index] = null;
    });

    // Collect all circles in order
    this.questionContainers.forEach((container) => {
      const circles = circlesByQuestion.get(container) || [];
      // Sort circles left to right based on their parent div position
      circles.sort((a, b) => {
        const aParent = a.closest('div')?.getBoundingClientRect().left || 0;
        const bParent = b.closest('div')?.getBoundingClientRect().left || 0;
        return aParent - bParent;
      });
      this.circleElements.push(...circles);
    });
  }

  /**
   * Find the question container for a circle
   */
  private findQuestionContainer(element: Element): HTMLElement | null {
    let current: Element | null = element;
    while (current) {
      const classStr = current.getAttribute('class') || '';
      if (classStr.includes('h-[153px]') || (current as HTMLElement).getAttribute('data-name') === 'Q') {
        return current as HTMLElement;
      }
      current = current.parentElement;
    }
    return null;
  }

  /**
   * Attach click listeners to circles
   */
  private attachCircleListeners() {
    let circleIndex = 0;

    this.questionContainers.forEach((questionContainer, qIndex) => {
      const circles = questionContainer.querySelectorAll('svg circle') as NodeListOf<SVGCircleElement>;

      circles.forEach((circle, optionIndex) => {
        const svgElement = circle.closest('svg');
        if (!svgElement) return;

        const parent = svgElement.parentElement;
        if (parent) {
          parent.style.cursor = 'pointer';
          parent.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectAnswer(qIndex, optionIndex + 1);
          });
        }

        circleIndex++;
      });
    });
  }

  /**
   * Handle answer selection
   */
  private selectAnswer(qIndex: number, option: number) {
    const currentAnswer = this.state.answers[qIndex];

    // Toggle: if same option selected, deselect; otherwise select
    this.state.answers[qIndex] = currentAnswer === option ? null : option;

    this.updateUIState();
  }

  /**
   * Update progress bar and circle highlighting
   */
  private updateUIState() {
    this.updateProgressBar();
    this.updateCircleHighlighting();
  }

  /**
   * Update progress bar display
   */
  private updateProgressBar() {
    const answeredCount = Object.values(this.state.answers).filter((a) => a !== null).length;
    const progress = Math.round((answeredCount / this.state.totalQuestions) * 100);

    // Find and update progress text
    const progressTexts = Array.from(document.querySelectorAll('p')).filter((p) => {
      const text = p.textContent?.trim();
      return text === '10%' || /^\d+%$/.test(text || '');
    });

    progressTexts.forEach((p) => {
      if (p.textContent?.includes('%')) {
        p.textContent = `${progress}%`;
      }
    });

    console.log(`[Diagnosis] Progress: ${progress}% (${answeredCount}/${this.state.totalQuestions} answered)`);
  }

  /**
   * Update circle highlighting based on selected answers
   */
  private updateCircleHighlighting() {
    let circleIndex = 0;

    this.questionContainers.forEach((container, qIndex) => {
      const circles = container.querySelectorAll('svg circle') as NodeListOf<SVGCircleElement>;
      const selectedOption = this.state.answers[qIndex];

      circles.forEach((circle, optionIndex) => {
        const isSelected = selectedOption === optionIndex + 1;

        if (isSelected) {
          circle.setAttribute('fill', '#E8B7C6'); // Pink highlight
          circle.style.fill = '#E8B7C6';
        } else {
          circle.setAttribute('fill', '#D9D9D9'); // Gray
          circle.style.fill = '#D9D9D9';
        }

        circleIndex++;
      });
    });
  }

  /**
   * Attach submit button listener
   */
  private attachSubmitListener() {
    // Find the diagnosis result button
    const allElements = Array.from(document.querySelectorAll('*'));
    let submitBtn: HTMLElement | null = null;

    allElements.forEach((elem) => {
      const text = elem.textContent || '';
      if (text.includes('診断結果を見る')) {
        const btn = elem.closest('div[class*="rounded"]');
        if (btn) {
          submitBtn = btn as HTMLElement;
        }
      }
    });

    if (submitBtn) {
      submitBtn.style.cursor = 'pointer';
      submitBtn.addEventListener('click', () => {
        this.submitDiagnosis();
      });
      console.log('[Diagnosis] Submit button attached');
    }
  }

  /**
   * Validate and submit diagnosis
   */
  private submitDiagnosis() {
    const answeredCount = Object.values(this.state.answers).filter((a) => a !== null).length;

    if (answeredCount < this.state.totalQuestions) {
      const unansweredCount = this.state.totalQuestions - answeredCount;
      alert(`${unansweredCount}個の質問に答えてください。`);
      return;
    }

    // Calculate diagnosis
    const totalScore = Object.values(this.state.answers).reduce((sum, answer) => {
      if (answer === null) return sum;
      // Score mapping: 1=5pts, 2=4pts, 3=3pts, 4=2pts, 5=1pt
      const scoreMap = [5, 4, 3, 2, 1];
      return sum + scoreMap[answer - 1];
    }, 0);

    const maxScore = this.state.totalQuestions * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let message = '';
    if (percentage >= 65) {
      message = '既婚者の可能性が高い可能性があります。';
    } else if (percentage >= 40) {
      message = '既婚者の可能性が疑われます。';
    } else {
      message = '既婚者の可能性は低いと考えられます。';
    }

    console.log(`[Diagnosis] Result: ${percentage}% - ${message}`);
    this.displayResult(percentage, message);
  }

  /**
   * Display diagnosis result
   */
  private displayResult(percentage: number, message: string) {
    // Find result percentage display
    const allElements = Array.from(document.querySelectorAll('*'));
    let resultPercentElement: HTMLElement | null = null;

    allElements.forEach((elem) => {
      const text = elem.textContent?.trim();
      if (text === '68%' || (text && /^\d+%$/.test(text))) {
        resultPercentElement = elem as HTMLElement;
      }
    });

    if (resultPercentElement) {
      this.animatePercentage(resultPercentElement, percentage);
    }

    // Animate the circular progress
    this.animateCircularProgress(percentage);
  }

  /**
   * Animate percentage display
   */
  private animatePercentage(element: HTMLElement, targetPercent: number) {
    const startPercent = 0;
    const duration = 1000; // 1 second
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const increment = (targetPercent - startPercent) / totalFrames;

    let currentFrame = 0;

    const animate = () => {
      if (currentFrame <= totalFrames) {
        const currentPercent = Math.round(startPercent + increment * currentFrame);
        element.textContent = `${currentPercent}%`;
        currentFrame++;
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  /**
   * Animate circular progress chart
   */
  private animateCircularProgress(targetPercent: number) {
    // Find SVG circle elements that are part of the result display
    const allCircles = Array.from(document.querySelectorAll('svg circle')) as SVGCircleElement[];
    const resultCircles = allCircles.filter((circle) => {
      const parent = circle.closest('svg');
      if (!parent) return false;
      // Check if this circle is in the results section (look for large radius circles)
      const radius = parseFloat(circle.getAttribute('r') || '0');
      return radius > 30; // Results circles are usually large
    });

    if (resultCircles.length > 0) {
      const circle = resultCircles[0];
      const circumference = 2 * Math.PI * (parseFloat(circle.getAttribute('r') || '0'));
      const offset = circumference * (1 - targetPercent / 100);

      circle.style.strokeDasharray = circumference.toString();
      circle.style.strokeDashoffset = circumference.toString();
      circle.style.transition = 'stroke-dashoffset 1s ease-in-out';

      // Trigger animation
      setTimeout(() => {
        circle.style.strokeDashoffset = offset.toString();
      }, 10);
    }
  }

  /**
   * Utility: wait function
   */
  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Log initialization status
   */
  private logInitialization() {
    console.log(`[Diagnosis] Initialized with ${this.state.totalQuestions} questions`);
    console.log(`[Diagnosis] Found ${this.circleElements.length} answer circles`);
  }
}

// Initialize on page load
if (typeof window !== 'undefined') {
  const handler = new DiagnosisHandler();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      handler.init().catch((err) => console.error('[Diagnosis] Init error:', err));
    });
  } else {
    handler.init().catch((err) => console.error('[Diagnosis] Init error:', err));
  }
}
