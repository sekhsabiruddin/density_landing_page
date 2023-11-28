import React from "react";
import styled from "styled-components";
import Getstartimg from "../image/Getstarted.png";
import Mobbile from "../image/Mobbile.png";
import Starttrading from "../image/Starttrading.png";

const OuterGetStart = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding: 0 3rem;
`;

const InnerGetStart = styled.div`
  width: 80%;
  text-align: center;
  position: relative;
  margin-top: 4rem;
`;

const ImgBox1 = styled.div`
  position: absolute;
  z-index: 1;
  top: -9%;
`;

const ImgBox2 = styled.div`
  max-width: 100%;

  height: 800px;
  z-index: 1000;
  top: 10%;
  position: relative;
`;

const ImgBox3 = styled.div`
  position: absolute;
  top: 60%;
  z-index: 10000;
`;

const Img = styled.img`
  max-width: 40%;
`;

const Getstart = () => {
  return (
    <OuterGetStart>
      <InnerGetStart>
        <ImgBox1>
          <img src={Getstartimg} alt="" />
        </ImgBox1>
        <ImgBox2>
          <Img src={Mobbile} alt="" />
        </ImgBox2>
        <ImgBox3>
          <img src={Starttrading} alt="" />
        </ImgBox3>
      </InnerGetStart>
    </OuterGetStart>
  );
};

export default Getstart;
