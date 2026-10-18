import React from "react";
const About: React.FC = () => <section id="sobre" className="section section-alt" aria-labelledby="about-title"><div className="container two-col">
  <div className="code-card"><div className="window-bar"><i /><i /><i /></div><pre><code><span className="pink">class</span> <span className="yellow">Developer</span>:
  name = <span className="green">"Matheus Silva"</span>
  role = <span className="green">"Python Freelancer"</span>
  focus = [<span className="green">"AI"</span>, <span className="green">"Automation"</span>]
  mindset = <span className="green">"learn · build · iterate"</span></code></pre></div>
  <div><p className="section-kicker">// 01. PERFIL</p><h2 id="about-title">Tecnologia com contexto humano.</h2><p className="body-large">Minha trajetória combina disciplina técnica, aprendizado contínuo e desenvolvimento de software. Como freelancer, crio soluções sob medida em Python, automação e IA para reduzir trabalho repetitivo e gerar decisões melhores.</p><div className="stat-grid"><div><strong>02+</strong><span>anos construindo<br />soluções digitais</span></div><div><strong>ADS</strong><span>estudante de Análise<br />e Desenvolvimento</span></div></div></div>
</div></section>;
export default React.memo(About);
