import { useState, useEffect } from 'react';
import './CookingSteps.css';

interface Props {
  recipe: any;
  onBack: () => void;
}

export default function CookingSteps({ recipe, onBack }: Props) {
  // parse instructions if it comes as a string
  const steps = typeof recipe?.instructions === 'string'
    ? JSON.parse(recipe.instructions)
    : recipe?.instructions ?? [];

  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0]?.timerSeconds ?? 0);
  const [running, setRunning] = useState(false);

  const step = steps[currentStep];
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  useEffect(() => {
    setTimeLeft(step?.timerSeconds ?? 0);
    setRunning(false);
  }, [currentStep]);

  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      setRunning(false);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((t: number) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running, timeLeft]);

  function goNext() {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  }

  function goPrev() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="cooking-screen">

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
        <div className="cooking-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="cooking-instruction-card">
        <h2 className="cooking-step-title">{step?.title}</h2>
        <p className="cooking-step-text">{step?.instruction}</p>
      </div>

      {step?.timerSeconds > 0 && (
        <div className="cooking-timer-card">
          <span className="material-symbols-outlined cooking-timer-icon">timer</span>
          <p className="cooking-timer-label">STEP TIMER</p>
          <p className="cooking-timer-display">{mins}:{secs}</p>
          <button className="cooking-timer-btn" onClick={() => setRunning(!running)}>
            {running ? 'Pause' : 'Start Timer'}
          </button>
        </div>
      )}

      <div className="cooking-equipment">
        <p className="cooking-equipment-title">Equipment Needed</p>
        <div className="cooking-equipment-list">
          {step?.equipment?.map((item: string) => (
            <span key={item} className="cooking-equipment-tag">{item}</span>
          ))}
        </div>
      </div>

      <div className="cooking-nav">
        <button className="cooking-nav-btn" onClick={goPrev} disabled={currentStep === 0}>
          <span className="material-symbols-outlined">arrow_back</span>
          Previous
        </button>
        <button className="cooking-nav-btn" onClick={goNext} disabled={currentStep === steps.length - 1}>
          Next
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

    </div>
  );
}