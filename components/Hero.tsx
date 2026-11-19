import React from "react";
interface HeroProps { resumeFilePath: string }
const Hero: React.FC<HeroProps> = ({ resumeFilePath }) => <section className="hero-section" aria-labelledby="hero-title">
  <div className="container hero-content">
    <div className="eyebrow"><span className="status-dot" /> EM TREINAMENTO PARA ESTÁGIO · BRANQS AUTOMAÇÃO</div>
    <h1 id="hero-title">SOFTWARE, CLP<br /><span>&amp; AUTOMAÇÃO</span></h1>
    <p className="hero-lead">Sou <strong>Matheus Silva</strong>, fundador da Talentsy Nexus e estudante de Análise e Desenvolvimento de Sistemas. Atualmente estou em treinamento preparatório para o estágio na <strong>Branqs Automação</strong>, desenvolvendo programas de CLP e soluções que conectam software, IHM e processos industriais.</p>
    <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar projetos <span>↗</span></a><a className="button button-ghost" href={resumeFilePath} download>Baixar currículo <span>↓</span></a><a className="text-link" href="#contato">Vamos conversar <span>→</span></a></div>
    <div className="hero-proof"><span>FOCO ATUAL</span><strong>CLP Branqs · Automação</strong><span>BASE</span><strong>Santos, SP · Brasil</strong></div>
  </div>
</section>;
export default React.memo(Hero);
