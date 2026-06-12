// components/StepTimer.tsx
import { useState, useEffect } from 'react';

interface Props {
  seconds: number; // e.g. 120 for 2:00
}

export default function StepTimer({ seconds }: Props) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(interval); return 0; }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup!
  }, [running]);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="timer-box">
      <p>STEP TIMER</p>
      <p className="timer-display">{mins}:{secs}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start Timer'}
      </button>
    </div>
  );
}