import React, { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "MERN Stack Enthusiast",
  "React.js Specialist",
  "Backend Engineer"
];

const TypingEffect = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Typing speed (ms)
  const deletingSpeed = 75; // Deleting speed (ms)
  const delayBeforeDelete = 1000; // Delay before deleting (ms)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentTitle.length) {
        setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }
  }, [displayText, isDeleting]);

  return (
    <h2 className="text-2xl text-gray-600 dark:text-gray-400 transition-all duration-500">
      {displayText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </h2>
  );
};

export default TypingEffect;
