import React from "react";
import Transition from "../components/Transition";
import TextPressure from "../TextAnimations/TextPressure/TextPressure";

const About = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }}>
      <div style={{
        width: '600px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}>
        <TextPressure
          text="who are us!"
          flex={true}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={false}
          textColor="#000000"
          strokeColor="#000000"
          minFontSize={20}
          fontFamily="Inter"
        />
      </div>
    </div>
  );
};

export default Transition(About);
