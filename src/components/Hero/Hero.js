// src/components/Hero.js
import React from "react";
import Group from "../image/Group.png";
import styled from "styled-components";

// Define the styled components
const OuterHero = styled.div`
  height: 100vh;
  display: flex;
  background-color: #000000;
  justify-content: center;
`;

const HeroSection = styled.div`
  height: 100vh;
  width: 80%;
  margin-bottom: 10px;
`;

const TextBox = styled.div`
  text-align: center;
  color: #fff;

  h2 {
    font-size: 3rem;
  }
  span {
    background: linear-gradient(to right, #d4f938, #32d875);
    -webkit-background-clip: text;
    color: transparent;
  }
  p {
    margin: 2rem 0;
  }
`;

const ImgBox = styled.div`
  max-height: 60vh;
  text-align: center;
`;

const StyledImage = styled.img`
  max-width: 45%;
  height: auto;
`;

const Hero = () => {
  return (
    <OuterHero>
      <HeroSection>
        <TextBox>
          <h2>It's Time to Trade to,</h2>
          <h2>
            the <span>Future</span>,
          </h2>
          <p>Trade BTC, ETH Futures with 125x leverage and earn rewards</p>
        </TextBox>
        <ImgBox>
          <StyledImage src={Group} alt="Group" />
        </ImgBox>
      </HeroSection>
    </OuterHero>
  );
};

export default Hero;
