import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  width: 100%;
  background-color: #000000;
  margin: 0;
  padding: 0;
`;

const HeaderContainer = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7rem;
  background-color: #000000;
`;

const Logo = styled.div`
  color: #e2ff6f;
  font-size: 1.3rem;
`;

const LeftNav = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: #fcfcfc;
`;

const TradeButton = styled.button`
  padding: 0.6rem 2.3rem;
  background: linear-gradient(to right, #d4f938, #32d875);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>density</Logo>
      <LeftNav>
        <NavLink href="#">Career</NavLink>
        <NavLink href="#">Blog</NavLink>
        <NavLink href="#">Leaderboard</NavLink>
        <NavLink href="#">Fees</NavLink>
      </LeftNav>
      <TradeButton>TRADE NOW</TradeButton>
    </HeaderContainer>
  );
};

export default Header;
