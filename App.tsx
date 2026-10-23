import React, { Suspense, lazy } from "react";
import { EDUCATION, EXPERIENCE, FEEDBACKS, IDIOMAS, PROJECTS, SKILLS } from "./constants";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Feedbacks from "./components/Feedbacks";
import Education from "./components/Education";
import Footer from "./components/Footer";
const AIAssistant = lazy(() => import("./components/AIAssistant"));
const App: React.FC = () => {
  const resumeFilePath = "/Curriculo-Matheus-Silva.pdf";
  return <div className="portfolio-shell">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header resumeFilePath={resumeFilePath} />
    <main id="conteudo"><Hero resumeFilePath={resumeFilePath} /><About /><Projects projects={PROJECTS} /><Experience experiences={EXPERIENCE} /><Skills skills={SKILLS} idiomas={IDIOMAS} /><Education items={EDUCATION} /><Feedbacks feedbacks={FEEDBACKS} /></main>
    <Footer /><Suspense fallback={null}><AIAssistant /></Suspense>
  </div>;
};
export default App;
