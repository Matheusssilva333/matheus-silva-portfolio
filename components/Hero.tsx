import React from "react";
interface HeroProps { resumeFilePath: string }
const Hero: React.FC<HeroProps> = ({ resumeFilePath }) => <section className="hero-section" aria-labelledby="hero-title">
  <div className="hero-orbit" aria-hidden="true" />
  <div className="container hero-content">
    <div className="eyebrow"><span className="status-dot" /> DISPONÍVEL PARA PROJETOS E ESTÁGIO EM IA</div>
    <h1 id="hero-title">PYTHON &amp;<br /><span>AI SYSTEMS</span></h1>
    <p className="hero-lead">Sou <strong>Matheus Silva</strong>, desenvolvedor Python freelancer e estudante de ADS. Construo automações inteligentes, agentes de IA e integrações que transformam problemas operacionais em sistemas claros e escaláveis.</p>
    <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar projetos <span>↗</span></a><a className="button button-ghost" href={resumeFilePath} download>Baixar currículo <span>↓</span></a><a className="text-link" href="#contato">Vamos conversar <span>→</span></a></div>
    <div className="hero-proof"><span>FOCO ATUAL</span><strong>Python · IA · Automação</strong><span>BASE</span><strong>Santos, SP · Brasil</strong></div>
  </div>
</section>;
export default React.memo(Hero);
