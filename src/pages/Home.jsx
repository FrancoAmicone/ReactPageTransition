import React from "react";
import Transition from "../components/Transition";
import TextPressure from "../TextAnimations/TextPressure/TextPressure";

const Home = () => {
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
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '200px',
        pointerEvents: 'none'
      }}>
        <TextPressure
          text="welcome"
          flex={true}
          alpha={false}
          stroke={true}
          width={true}
          weight={true}
          italic={false}
          textColor="#000000"
          strokeColor="#000000"
          minFontSize={40}
          fontFamily="Inter"
        />
      </div>
    </div>
  );
};

export default Transition(Home);
