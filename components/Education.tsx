import React from "react";
import { Education as EducationType } from "../types";

const Education: React.FC<{ items: EducationType[] }> = ({ items }) => (
  <section id="formacao" className="section" aria-labelledby="education-title">
    <div className="container">
      <div className="section-heading">
        <div><p className="section-kicker">// 05. FORMAÇÃO</p><h2 id="education-title">Aprendizado contínuo.</h2></div>
        <p>Uma base técnica construída entre tecnologia, indústria e projetos aplicados.</p>
      </div>
      <div className="education-grid">
        {items.map(item => <article className="education-card" key={item.id}><span>{item.period}</span><h3>{item.degree}</h3><strong>{item.institution}</strong><p>{item.description}</p></article>)}
      </div>
    </div>
  </section>
);
export default React.memo(Education);
