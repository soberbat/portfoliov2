"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, AnimationDefinition } from "framer-motion";

import styled from "styled-components";
import useMousePosition from "@/utils/hooks/useMousePosition";
import ProjectRect from "./components/ProjectRect/ProjectRect";
import { Container } from "./styled";
import Gallery from "./components/Gallery/Gallery";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import PageTransition from "./components/PageTransition/PageTransition";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import projectData from "@/utils/projectData";
import useStore from "./store/useStore";
import { useRouter } from "next/router";
import usePreloder from "@/utils/hooks/usePreloader";
import LoadingPage from "./components/LoadingPage/LoadingPage";

export default function Home() {
  const { isPreloaded, progress } = usePreloder();
  const [isProjectDetailVisible, setIsProjectDetailVisible] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [project, setProject] = useState<(typeof projectData)[number]>(
    projectData[0]
  );

  const { setLink } = useStore();

  const onProjectClick = useCallback((i: number) => {
    const project = projectData[i];
    const { liveLink, repoLink, mediaPath } = project;

    setIsProjectDetailVisible(true);
    setLink(liveLink, repoLink);
    setisAnimating(true);
    setProject(project);
  }, []);

  const onProjectClose = useCallback(() => {
    setisAnimating(true);
    setIsProjectDetailVisible(false);
  }, []);

  const onAboutMeClick = useCallback(() => {
    setIsAboutMeVisible((prev) => !prev);
  }, []);

  const onAnimationComplete = useCallback((e: AnimationDefinition) => {
    setisAnimating(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isPreloaded && <LoadingPage progress={progress} />}
      </AnimatePresence>

      {isPreloaded && (
        <Container>
          <MouseFollower />
          <Gallery onProjectClick={onProjectClick} />

          <AnimatePresence>
            {isProjectDetailVisible && (
              <ProjectDetail project={project} onClose={onProjectClose} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isAboutMeVisible && <AboutMe onAboutMeClick={onAboutMeClick} />}
          </AnimatePresence>

          <Navigation
            hasNavigated={isAboutMeVisible || isProjectDetailVisible}
            onAboutMeClick={onAboutMeClick}
            shouldShowLinks={isProjectDetailVisible}
          />

          <PageTransition
            isAnimating={isAnimating}
            onAnimationComplete={onAnimationComplete}
          />
        </Container>
      )}
    </>
  );
}
