import React, { useState, useEffect, useMemo } from "react";

const TextChange = () => {
  const texts = useMemo(
    () => ["FullStack Developer", "Backend Developer", "Java Developer"],
    []
  );
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (endValue === 0) {
        setCurrentText("");
      } else {
        setCurrentText(texts[index].substring(0, endValue));
      }
      if (isForward) {
        setEndValue((prev) => prev + 0.5);
      } else {
        setEndValue((prev) => prev - 0.5);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 1 && !isForward) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setEndValue(0);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease duration-100">{currentText + "|"}</div>
  );
};

export default TextChange;
