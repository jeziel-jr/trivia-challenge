import { useEffect, useState } from "react";
import '../scss/Timer.scss';

export function Timer() {
  const [secondsCounter, setSecondsCounter] = useState(0);
  const [minutesCounter, setMinutesCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => secondsCounter < 60 && setSecondsCounter(secondsCounter + 1), 1000);
  }, [secondsCounter])

  useEffect(() => {
    if (secondsCounter === 60) {
      setSecondsCounter(0);
      setMinutesCounter(minutesCounter + 1);
    }
  }, [secondsCounter, minutesCounter])

  return (
    <>
      <h1 className="timer">{secondsCounter < 10 ? `${minutesCounter}:0${secondsCounter}` : `${minutesCounter}:${secondsCounter}`}</h1>
    </>
  )
}