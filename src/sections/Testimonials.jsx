import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, Avatar } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconStar } from '@tabler/icons';
import Autoplay from 'embla-carousel-autoplay';

import OnScrollFadeIn from '../components/OnScrollFadeIn';

const FiveStars = () => {
  return (
    <div className="flex items-center">
      {Array.from(Array(5), (_, i) => (
        <IconStar
          key={i}
          className="fill-zinc-700 dark:fill-zinc-200"
          size={15}
        />
      ))}
    </div>
  );
};

const Review = (props) => {
  return (
    <div className="flex flex-col mx-auto items-center max-w-lg text-center text-sm px-7 md:px-0">
      <Avatar src={props.imgSrc} radius="xl" size="md" alt={props.alt} />
      <span className="text-base font-semibold mt-1">{props.name}</span>
      <span className="text-zinc-500 dark:text-zinc-400">
        {props.designation} | {props.company}
      </span>
      <p className="my-2">{props.review}</p>
      <FiveStars />
    </div>
  );
};

function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <OnScrollFadeIn delay={0.2}>
      <Container>
        <div className="flex justify-center mt-10">
          <span className="text-xl font-mono font-semibold text-center">
            Testimonials
          </span>
        </div>
        <Carousel
          maw="100%"
          mx="auto"
          withIndicators
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          height={300}
          slideSize="100%"
          controlSize={40}
          slideGap="md"
          loop
          align="start"
          nextControlIcon={
            <IconChevronRight className="dark:text-white" size={16} />
          }
          previousControlIcon={
            <IconChevronLeft className="dark:text-white" size={16} />
          }
        >
          <Carousel.Slide className="flex justify-center items-center">
            <Review
              imgSrc="testimonials/james-taverner.jpg"
              alt="James Taverner"
              name="James Taverner"
              designation="Co-Founder"
              company="Flow"
              review="I've worked with Rashid on several occasions, he is very skilful and has a great attitude towards resolving issues. Highly recommended."
            />
          </Carousel.Slide>
          <Carousel.Slide className="flex justify-center items-center">
            <Review
              alt="saliouvj"
              name="Saliouvj"
              designation="Owner"
              company="Agence Cauris"
              review="Amazing person, to work with. Understood the project and fixed and delivered of what was requested. Highly recommend."
            />
          </Carousel.Slide>
        </Carousel>
      </Container>
    </OnScrollFadeIn>
  );
}

export default Testimonials;
