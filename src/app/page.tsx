"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbaar from "./Navbaar";
import Slideone from "./components/slideone";
import Slidetwo from "./components/Slidetwo";
import Slidethree from "./components/Slidethree";
import Slidefour from "./components/Slidefour";
import { useEffect, useRef } from "react";
import Slidefive from "./components/Slidefive";
import Footer from "./Footer";
// import Zoom from 'react-reveal/Zoom';
import { motion, useInView, useAnimation } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Subslidetwo from "./components/Subslidetwo";

export default function Home() {
  const slideone = useRef<HTMLDivElement | null>(null);
  const slideotwo = useRef<HTMLDivElement | null>(null);
  const slidefive = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Box position="sticky" top={"0px"} left="0" width="100%" zIndex="1000">
        <Navbaar
          slideone={slideone}
          slideotwo={slideotwo}
          slidefive={slidefive}
        />
      </Box>

      <Slideone slideone={slideone} slidefive={slidefive} />
      <Slidetwo />
      <Subslidetwo />
      <Slidethree />
      <Slidefour slidetwo={slideotwo} />

      <Slidefive slidefive={slidefive} />

      <Footer slideotwo={slideotwo} />
    </>
  );
}
