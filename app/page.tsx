


import HeaderPage from "@/components/header";
import "./globals.css"
import MainPage from "@/components/main";
import SkillsPage from "@/components/skills";
import AboutPage from "@/components/about";
import ProjectPage from "@/components/project";
import ContactPage from "@/components/contact";
import FooterPage from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <HeaderPage />
      <MainPage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
      <FooterPage />
    </>
  );
}
