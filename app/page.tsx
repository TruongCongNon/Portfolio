


import HeaderPage from "@/components/header";
import "./globals.css"
import MainPage from "@/components/main";
import SkillsPage from "@/components/skills";
import AboutPage from "@/components/about";
import ProjectPage from "@/components/project";

export default function Home() {
  return (
    <>
      <HeaderPage />
      <MainPage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
    </>
  );
}
