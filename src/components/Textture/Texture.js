// Import necessary libraries
import React from "react";
import styled from "styled-components";

// Define the styled components
const OuterBoxTextture = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
`;

const InnerBoxTextture = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;
`;

const TexttureLeftBox = styled.div`
  text-align: center;
  h2 {
    font-size: 3rem;
    color: #fff;
  }
  p {
    margin-top: 10px;
    color: #fff;
  }
`;

const TexttureRightBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  flex: 0 0 30%;
  text-align: center;
  height: 300px;
  background: #19191d;
  div {
    margin: 2.5rem 0rem;
    color: white;
  }
  div h3 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

// Define the gradient background for the middle box
const MiddleBox = styled(Box)`
  background: linear-gradient(to top, #32d875, #d4f938);
`;

const Textture = () => {
  return (
    <OuterBoxTextture>
      <InnerBoxTextture>
        <TexttureLeftBox>
          <h2>
            Trade More . <span>Pay Less</span>
          </h2>
          <p>Our low Fees Supercharge Your Profits</p>
        </TexttureLeftBox>
        <TexttureRightBox>
          <Box>
            <div>
              <h2>CoinDCX</h2>
            </div>
            <div>
              <h3>0.0025</h3>
              <p>Maker Fees</p>
            </div>
            <div>
              <h3>0.07</h3>
              <p>Taker Fees</p>
            </div>
          </Box>
          <MiddleBox>
            {/* content for the middle box with gradient background */}
            <div>
              <h2>density</h2>
            </div>
            <div>
              <h3>0.0025</h3>
              <p>Maker Fees</p>
            </div>
            <div>
              <h3>0.07</h3>
              <p>Taker Fees</p>
            </div>
          </MiddleBox>
          <Box>
            {/* content for the third box */}
            <div>
              <h2>Delta</h2>
            </div>
            <div>
              <h3>0.0025</h3>
              <p>Maker Fees</p>
            </div>
            <div>
              <h3>0.07</h3>
              <p>Taker Fees</p>
            </div>
          </Box>
        </TexttureRightBox>
      </InnerBoxTextture>
    </OuterBoxTextture>
  );
};

export default Textture;
