import { useState, useEffect } from 'react';
import './cookingSteps.css';
import API_URL from '../config';

interface Props {
  recipe: any;
  token: string;
  onBack: () => void;
  onDone: () => void;
}

export default function CookingSteps({ recipe, token, onBack, onDone }: Props) {
  const steps = typeof recipe?.instructions === 'string'
    ? JSON.parse(recipe.instructions)
    : recipe?.instructions ?? [];

  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0]?.timerSeconds ?? 0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);

  const step = steps[currentStep];
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  const totalSeconds = steps.reduce((sum: number, s: any) => sum + (s.timerSeconds ?? 0), 0);
  const totalMins = Math.ceil(totalSeconds / 60);

  // UPDATED: Logic to handle dynamic back navigation
  const handleBack = () => {
    localStorage.removeItem('cooking_origin'); // Clean up directly
    onBack(); 
  };

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

  async function toggleSave() {
    const method = saved ? 'DELETE' : 'POST';
    await fetch(`${API_URL}/api/saved/${recipe.id}`, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    });
    setSaved(!saved);
  }

  function goNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setDone(true);
    }
  }

  function goPrev() {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  if (done) {
    return (
      <div className="cooking-screen">
        <div className="congrats-container">
          <div className="congrats-top">
            <p className="congrats-emoji">🎉</p>
            <h1 className="congrats-title">Luto na!</h1>
            <p className="congrats-subtitle">
              You just cooked <span className="congrats-highlight">{recipe.name}</span>.
              <br />
              Eatwell, Lab!
            </p>
          </div>
          <div className="congrats-card">
            <img src={`/${recipe.image}`} alt={recipe.name} className="congrats-img" />
            <div className="congrats-card-bottom">
              <div className="congrats-card-info">
                <p className="congrats-card-name">{recipe.name}</p>
                <p className="congrats-card-time">
                  <span className="material-symbols-outlined">schedule</span>
                  {totalMins} minutes
                </p>
              </div>
              <button className={`congrats-like ${saved ? 'liked' : ''}`} onClick={toggleSave}>
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
          </div>
          <button className="congrats-btn" onClick={onDone}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cooking-screen">
      <div className="cooking-progress-row">
        {/* Updated to use handleBack instead of onBack directly */}
        <button className="cooking-back" onClick={handleBack}>
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
          <p className="cooking-timer-label">
            STEP TIMER <span className="cooking-timer-optional">(Optional)</span>
          </p>
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
        <button className="cooking-nav-btn" onClick={goNext}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}