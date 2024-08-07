import { opacityConfig } from "@/utils/animationConfig";
import { transition } from "@/utils/config";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div).attrs({
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      delay: 1.2,
    },
  },
})`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const InnerWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  position: relative;
`;

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

export const BoxContainer = styled(motion.div)``;

export const CollectionNameContainer = styled(motion.div).attrs({
  ...opacityConfig,
  transition: { delay: 1, duration: 0.5 },
})`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CollectionName = styled(motion.h1).attrs({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
})`
  font-weight: 900;
  color: #bac4b8;
  font-size: 5rem;
  text-align: center;
  line-height: 100rem;
  user-select: none;
`;

export const ProjectInfoContainer = styled(motion.div).attrs({
  ...opacityConfig,
  transition: { duration: 0.2 },
})`
  position: absolute;
  left: 0;
  bottom: 1%;
  color: white;
  padding: 2vw;
  z-index: 2;
  user-select: none;
  pointer-events: none;
`;

export const Name = styled.h1`
  font-weight: 400;
  margin-bottom: 1vh;
  display: inline-block;
  pointer-events: none;
  user-select: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1vh;
`;

export const Title = styled.h1`
  color: #0d0e53a2;
  display: inline-block;
  font-weight: 400;
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;
export const ShortDescription = styled.h3`
  font-weight: 300;
  font-size: 1rem;
`;
