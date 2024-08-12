import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function CodingWords({ text }) {
  // Split the text into an array of lines
  const lines = text.split("\n");

  // State to manage the current line index
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timeoutId = setTimeout(() => {
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
      }, 1000); // 1-second delay between each line animation

      return () => clearTimeout(timeoutId);
    }
  }, [currentLineIndex, lines.length]);

  return (
    <div className="w-[50%] h-fit flex">
      <div className="w-[2vw] h-full flex flex-col items-center justify-between">
        {lines.map((_, index) => (
          <p key={index}>{index + 1}</p>
        ))}
      </div>
      <div className=" text-[15px] flex flex-col ml-5 leading-7">
        {lines.slice(0, currentLineIndex + 1).map((line, index) => (
          <TypeAnimation
            key={index}
            sequence={[
              line,
              1000, // Adjust this delay if needed
            ]}
            speed={75} // Adjust typing speed here
            repeat={Infinity} // Do not repeat the sequence
            // cursor={true} // Show the cursor
            omitDeletionAnimation={true}
          />
        ))}
      </div>
    </div>
  );
}

export default CodingWords;
