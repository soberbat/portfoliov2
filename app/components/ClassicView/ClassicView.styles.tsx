import styled, { keyframes } from "styled-components";
import { Overlay } from "../Gallery/Gallery.styles";
import { motion } from "framer-motion";
import { opacityConfig } from "@/utils/animationConfig";

export const Container = styled(motion.div).attrs({
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "backInOut", delay: 0 },
  },
  initial: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
})`
  width: 100vw;
  height: 100vh;
  overflow: scroll;

  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1%;
  scroll-snap-type: y mandatory;
`;

export const ProjectPreviewContainer = styled.div`
  margin-bottom: 10%;
  border-radius: 4px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  flex-direction: column;
  color: #04080f;
  position: relative;
  flex: none;
`;

export const TextContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export const ProjectTitleContainer = styled.div`
  margin-top: 3%;
  margin-bottom: 1%;
`;
export const ProjectTitle = styled.h1`
  font-weight: 400;
`;

export const ProjectImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px #04080f20;
  border: 2px solid #04080f20;
`;

export const ProjectDesc = styled.p`
  margin-bottom: 0.7%;
  font-size: 0.8rem;
  text-align: left;
`;

export const IconsContainer = styled.div`
  margin-top: 2%;
  display: flex;
  gap: 2vw;
  border-radius: 4px;
  align-items: center;
  padding: 1%;
`;

export const TechStackContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0%;
  height: 250px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1%;
`;

export const TechStackTitle = styled.h3`
  font-weight: 400;
  margin-bottom: 5%;
`;

export const StackItem = styled.span`
  display: block;
  font-weight: 300;
`;

export const PlusIconContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 2%;
  left: 2%;
`;

export const PlusIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #000;
    border-radius: 2px;
  }

  &:before {
    width: 90%;
    height: 5%;
    top: 50%;
    left: 20%;
    transform: translateY(-50%);
  }

  &:after {
    width: 90%;
    height: 5%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
`;