import React from "react";
interface HeroProps { resumeFilePath: string }
const Hero: React.FC<HeroProps> = ({ resumeFilePath }) => <section className="hero-section" aria-labelledby="hero-title">
  <div className="hero-orbit" aria-hidden="true" />
  <div className="container hero-content">
    <div className="eyebrow"><span className="status-dot" /> DISPONÍVEL PARA TECNOLOGIA, IA E AUTOMAÇÃO</div>
    <h1 id="hero-title">PYTHON, IA<br /><span>&amp; AUTOMAÇÃO</span></h1>
    <p className="hero-lead">Sou <strong>Matheus Silva</strong>, fundador da Talentsy Nexus e estudante de Análise e Desenvolvimento de Sistemas. Desenvolvo sites, chatbots e automações, conectando tecnologia, gestão e experiência prática em processos industriais.</p>
    <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar projetos <span>↗</span></a><a className="button button-ghost" href={resumeFilePath} download>Baixar currículo <span>↓</span></a><a className="text-link" href="#contato">Vamos conversar <span>→</span></a></div>
    <div className="hero-proof"><span>FOCO ATUAL</span><strong>Python · IA · Automação</strong><span>BASE</span><strong>Santos, SP · Brasil</strong></div>
  </div>
</section>;
export default React.memo(Hero);
