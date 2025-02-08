import { useState, useEffect } from "react";

const Timer=() =>{
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(10);
  };

  return (
    <div className="main">
      <h2 className="heading">Timer: 0: {time}</h2>
      <div className="buttons" >

        <button className="btn1" onClick={startTimer} disabled={isRunning}>Start</button>
        <button className="btn2" onClick={stopTimer} disabled={!isRunning}> Stop</button>
        <button className="btn3" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
export default Timer
