import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const OuterFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #229851;
  color: #fff;
`;

const InnerFooter = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 25px;
  padding: 4rem 0;
`;

const Logo = styled.div`
  text-align: center;
`;

const NavBar = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
`;

const FooterText = styled.div`
  text-align: center;
  color: #fff;
`;

const FooterIcon = styled.div`
  display: flex;
  gap: 10px;

  span {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <OuterFooter>
      <InnerFooter>
        <Logo>
          <h1>Density</h1>
        </Logo>
        <NavBar>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Fees</NavLink>
          <NavLink href="#">Leaderboard</NavLink>
          <NavLink href="#">Career</NavLink>
          <NavLink href="#">Contact us</NavLink>
        </NavBar>
        <FooterText>
          <span>
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde
          </span>
        </FooterText>
        <FooterIcon>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </FooterIcon>
      </InnerFooter>
    </OuterFooter>
  );
};

export default Footer;
