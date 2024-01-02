import React, { useState, useEffect, useRef } from "react";

export const Countdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Feb 2, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const totalSeconds = (countdownDate - now) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds % 60);

      if (totalSeconds < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="countdown-container ">
      <div className="flex col-span-4 gap-10 max-xs:gap-5">
        <div className="countdown-value grid gap-2 max-xs:gap-0">
          <span className="font-manrope flex justify-center max-xs:text-[12px]">
            Days
          </span>
          <p className="font-roxboroughmd text-5xl grid justify-center max-xs:text-[30px]">
            {days}
          </p>
        </div>
        <div className="countdown-value grid gap-2 max-xs:gap-0">
          <span className="font-manrope flex justify-center max-xs:text-[12px]">
            Hours
          </span>
          <p className="font-roxboroughmd text-5xl grid justify-center max-xs:text-[30px]">
            {hours}
          </p>
        </div>
        <div className="countdown-value grid gap-2 max-xs:gap-0">
          <span className="font-manrope flex justify-center max-xs:text-[12px]">
            Minutes
          </span>
          <p className="font-roxboroughmd text-5xl grid justify-center max-xs:text-[30px]">
            {minutes}
          </p>
        </div>
        <div className="countdown-value grid gap-2 max-xs:gap-0">
          <span className="font-manrope flex justify-center max-xs:text-[12px]">
            Seconds
          </span>
          <p className="font-roxboroughmd text-5xl grid justify-center max-xs:text-[30px]">
            {seconds}
          </p>
        </div>
      </div>
    </div>
  );
};
