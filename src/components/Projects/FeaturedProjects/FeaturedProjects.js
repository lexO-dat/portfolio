import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { HorizontalScrollCarousel } from "./HorizontalCarrusel";

const FeaturedProjects = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

export default FeaturedProjects;