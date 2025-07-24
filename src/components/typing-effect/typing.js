import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./typing.css";
import { TOP_SECTION } from "../../Module/General";

export default function MytypedComponent() {
  // Fallback if Typed_effect is missing or not an array
  const strings = Array.isArray(TOP_SECTION?.Typed_effect)
    ? TOP_SECTION.Typed_effect
    : ["Welcome to HackmaFest!"];

  const sequence = [];
  const typeSpeed = 80;
  const backSpeed = 50;
  const pause = 1200;

  strings.forEach((str, idx) => {
    sequence.push(str);
    sequence.push(pause);
    if (idx !== strings.length - 1) {
      sequence.push(""); 
      sequence.push(500);
    }
  });
  sequence.push(strings[0]);
  sequence.push(pause);
  sequence.push("");
  sequence.push(500);

  return (
    <div className="typing-div">
      <h1>
        <TypeAnimation
          sequence={sequence}
          speed={typeSpeed}
          deletionSpeed={backSpeed}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
}
