import React from "react";
const About: React.FC = () => <section id="sobre" className="section section-alt" aria-labelledby="about-title"><div className="container two-col">
  <div className="code-card"><div className="window-bar"><i /><i /><i /></div><pre><code><span className="pink">class</span> <span className="yellow">Developer</span>:
  name = <span className="green">"Matheus Silva"</span>
  role = <span className="green">"Tecnologia · Gestão · Automação"</span>
  context = <span className="green">"tecnologia + indústria"</span>
  mindset = <span className="green">"aprender · construir · evoluir"</span></code></pre></div>
  <div><p className="section-kicker">// 01. PERFIL</p><h2 id="about-title">Tecnologia com contexto humano.</h2><p className="body-large">Minha trajetória combina empreendedorismo, experiência prática na indústria e formação em tecnologia. Na Talentsy Nexus, desenvolvo projetos de sites, chatbots, automações e presença digital. Também estudo Análise e Desenvolvimento de Sistemas e mantenho projetos com Python, Java, APIs e IA.</p><div className="stat-grid"><div><strong>02+</strong><span>anos construindo<br />soluções digitais</span></div><div><strong>ADS</strong><span>estudante de Análise<br />e Desenvolvimento</span></div></div></div>
</div></section>;
export default React.memo(About);
