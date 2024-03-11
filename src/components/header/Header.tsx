import styled from "@emotion/styled";
import logo from "../../assets/main/jejumoanistay.png";
import { Link } from "react-scroll";
import { navListLeft, navListRight } from "../../data/navList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const params = useLocation().pathname;
  const [scrollPostion, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Section backgroundColor={scrollPostion > 0 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.2)"}>
      <Wrapper>
        {params == "/" ? (
          <Link className="move-preview" to="move-preview" spy={true} smooth={true} offset={-170}>
            PREVIEW
          </Link>
        ) : (
          <a href="/">PREVIEW</a>
        )}
        {navListLeft.map(({ name, pathname }, index) => (
          <a href={pathname} key={index}>
            {name}
          </a>
        ))}

        <a href="/">
          <Logo src={logo} alt="모아니스테이 로고" />
        </a>

        {navListRight.map(({ name, pathname }, index) => (
          <a href={pathname} key={index}>
            {name}
          </a>
        ))}
      </Wrapper>
    </Section>
  );
}

const Section = styled.header<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.backgroundColor};
  z-index: 99;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  color: white;
  font-size: 17px;
  font-weight: bold;

  .move-preview {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 60px;
  border-radius: 100%;
  object-fit: cover;
`;
