// src/components/Timer.js
import React from "react";
import styled from "styled-components";

// Define the styled components
const OuterTimer = styled.div`
  background-color: #000000;

  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerTimer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  border: 0.5px solid #ccc;
`;

const TimerBox = styled.div`
  text-align: center;
  h2 {
    color: #ebff25; /* Corrected the color value */
    margin-bottom: 10px;
    font-size: 2rem;
  }
  p {
    color: #6a6a6a;
  }
`;

const Timer = () => {
  return (
    <OuterTimer>
      <InnerTimer>
        <TimerBox>
          <h2>00%</h2>
          <p>Conversion Fee</p>
        </TimerBox>
        <TimerBox>
          <h2>500 Mn+</h2>
          <p>Lifetime Volume Trade</p>
        </TimerBox>
        <TimerBox>
          <h2>250+</h2>
          <p>Total Tradable Pairs</p>
        </TimerBox>
        <TimerBox>
          <h2>15,000+</h2>
          <p>Traders</p>
        </TimerBox>
      </InnerTimer>
    </OuterTimer>
  );
};

export default Timer;
