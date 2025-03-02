import React from "react";
import Transition from "../components/Transition";
import BlurText from "../TextAnimations/BlurText/BlurText";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Home = () => {
  return (
    <div className="container">
      <BlurText
      text="home page"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="blurtext"
    />
    </div>
  );
};

export default Transition(Home);
