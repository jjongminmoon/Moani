import styled from "@emotion/styled";
import { useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: React.ReactNode;
};

export default function CarouselUI({ children }: Props) {
  const slickRef: any = useRef(null);
  const prev = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <IoIosArrowBack className="arrow-prev" onClick={prev} />
      <Slider {...settings} ref={slickRef}>
        {children}
      </Slider>
      <IoIosArrowForward className="arrow-next" onClick={next} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 900px;
  height: 600px;
  margin-top: 40px;

  .arrow-prev {
    position: absolute;
    top: 48%;
    left: -80px;
    font-size: 40px;
    cursor: pointer;
  }

  .arrow-next {
    position: absolute;
    top: 48%;
    right: -80px;
    font-size: 40px;
    cursor: pointer;
  }
`;
