import { useState, useRef, useEffect } from "react";
import "./CountDownCss.css";

export default function CountDown() {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    
    const countdownDate = new Date("may 30, 2025 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div>
      <div id="countdown_container">
        <div>
          <p className="p_container">
            <span className="days">{timerDays}</span>
            <span className="seconds">Days</span>
          </p>
        </div>
        <div>
          <p className="p_container">
            <span className="days">{timerHours}</span>
            <span className="seconds">Hours</span>{" "}
          </p>
        </div>
        <div>
          <p className="p_container">
            <span className="days">{timerMinutes}</span>
            <span className="seconds">Minutes</span>{" "}
          </p>
        </div>
        <div>
          <p className="p_container">
            <span className="days">{timerSeconds}</span>
            <span className="seconds">Seconds</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
