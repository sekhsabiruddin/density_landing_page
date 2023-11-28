import React from "react";
import styled from "styled-components";
import Pecentage from "../image/Percentage.png";
import Manager from "../image/Percentage.png";

const SmallAmountOuter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const SmallAmountInner = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SmallAmountLeft = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const SmallAmountLeftHeading = styled.h1`
  font-size: 3rem;
  margin: 0 1rem;
`;

const SmallAmountRight = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`;

const SmallAmountRightBox = styled.div`
  flex: 0 0 48%;
  background: #f1f1f1;
  padding: 2rem 1rem;

  h1 {
    margin-top: 3rem;
  }

  p {
    margin-top: 1rem;
  }

  img {
    width: 40%;
  }
`;

const Smallamount = () => {
  return (
    <SmallAmountOuter>
      <SmallAmountInner>
        <SmallAmountLeft>
          <SmallAmountLeftHeading>Start Small. Earn Big</SmallAmountLeftHeading>
          <p>
            Deposit a minimum of 1000 and get a deposit +
            <br /> dedicated relationship manager
          </p>
        </SmallAmountLeft>
        <SmallAmountRight>
          <SmallAmountRightBox>
            <img src={Pecentage} alt="" />
            <h1>
              Deposit <br />
              Bonus
            </h1>
            <p>
              Our asset liquidity is unmatched in the next market with a <br />
              small bid-ask speed and well-balanced order book
            </p>
          </SmallAmountRightBox>
          <SmallAmountRightBox>
            <img src={Manager} alt="" />
            <h1>
              Dedicate <br />
              Relationship Manager
            </h1>
            <p>
              Our asset liquidity is unmatched in the next market with a <br />
              small bid-ask speed and well-balanced order book
            </p>
          </SmallAmountRightBox>
        </SmallAmountRight>
      </SmallAmountInner>
    </SmallAmountOuter>
  );
};

export default Smallamount;
