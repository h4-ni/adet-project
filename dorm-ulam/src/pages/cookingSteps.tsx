import { useState, useEffect } from 'react';
import './CookingSteps.css';

const steps = [
  {
    id: 1,
    title: 'Step 1: The Prep',
    instruction: 'Slice the hotdogs diagonally. Chop the onions finely. Set aside.',
    timerSeconds: 60,
    equipment: ['Knife', 'Chopping Board'],
  },
  {
    id: 2,
    title: 'Step 2: The Sizzle',
    instruction: 'Add the sliced hotdogs to the pan. Saute until they are slightly browned and the edges start to curl. Pour in the sauce mixture and stir well to coat every piece.',
    timerSeconds: 120,
    equipment: ['Frying Pan', 'Spatula'],
  },
  {
    id: 3,
    title: 'Step 3: The Sauce',
    instruction: 'Mix in the onions and palm oil. Stir fry for 2 minutes until fragrant.',
    timerSeconds: 120,
    equipment: ['Frying Pan', 'Spatula'],
  },
  {
    id: 4,
    title: 'Step 4: Serve',
    instruction: 'Plate the sizzling hotdog and serve hot with rice. Enjoy!',
    timerSeconds: 0,
    equipment: ['Plate'],
  },
];

interface Props {
  onBack: () => void;
}

export default function CookingSteps({ onBack }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0].timerSeconds);
  const [running, setRunning] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  // reset timer when step changes
  useEffect(() => {
    setTimeLeft(step.timerSeconds);
    setRunning(false);
  }, [currentStep]);

  // countdown logic
  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      setRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running, timeLeft]);

  function goNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function goPrev() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="cooking-screen">

      {/* SECTION 1: Progress bar */}
      <div className="cooking-progress-row">
        <button className="cooking-back" onClick={onBack}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="cooking-progress-info">
          <p className="cooking-step-count">
            Step {currentStep + 1} of {steps.length}
          </p>
          <p className="cooking-percent">{Math.round(progress)}% Complete</p>
        </div>
      </div>

      <div className="cooking-progress-bar">
        <div
          className="cooking-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* SECTION 2: Step instruction */}
      <div className="cooking-instruction-card">
        <h2 className="cooking-step-title">{step.title}</h2>
        <p className="cooking-step-text">{step.instruction}</p>
      </div>

      {/* SECTION 3: Timer */}
      {step.timerSeconds > 0 && (
        <div className="cooking-timer-card">
          <span className="material-symbols-outlined cooking-timer-icon">timer</span>
          <p className="cooking-timer-label">STEP TIMER</p>
          <p className="cooking-timer-display">{mins}:{secs}</p>
          <button
            className="cooking-timer-btn"
            onClick={() => setRunning(!running)}
          >
            {running ? 'Pause' : 'Start Timer'}
          </button>
        </div>
      )}

      {/* SECTION 4: Equipment */}
      <div className="cooking-equipment">
        <p className="cooking-equipment-title">Equipment Needed</p>
        <div className="cooking-equipment-list">
          {step.equipment.map(item => (
            <span key={item} className="cooking-equipment-tag">{item}</span>
          ))}
        </div>
      </div>

      {/* SECTION 5: Navigation buttons */}
      <div className="cooking-nav">
        <button
          className="cooking-nav-btn"
          onClick={goPrev}
          disabled={currentStep === 0}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Previous
        </button>
        <button
          className="cooking-nav-btn"
          onClick={goNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

    </div>
  );
}