import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  { id: "12", title: "Semáforo de Passagem de Nível — CLP Branqs", description: "Lógica de automação para detectar a presença de um trem e alternar as lâmpadas A e B de um sinaleiro, com tempo de alternância configurável pela IHM.", tags: ["CLP Branqs", "Automação Industrial", "IHM", "Lógica de controle"], imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800", link: "https://github.com/Matheusssilva333/SemaforoPassagemNivelCLP" },
  { id: "11", title: "Campainha Residencial — CLP Branqs", description: "Primeiro programa desenvolvido durante o treinamento preparatório para a Branqs Automação: acionamento direto de uma campainha a partir de uma entrada digital, com supervisão na IHM.", tags: ["CLP Branqs", "Entradas e saídas", "IHM", "Simulação"], imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800", link: "https://github.com/Matheusssilva333/PrimeiroProgramaCLP" },
  { id: "10", title: "ForjaIA — Engenharia Assistida por IA", description: "Protótipo de análise técnica assistida por IA para vasos de pressão e estruturas soldadas, com diagnóstico, referências normativas e priorização de correções.", tags: ["IA", "Engenharia", "Análise Técnica", "Protótipo"], imageUrl: "https://images.unsplash.com/photo-1565439377681-6f7c6a8e0f4f?auto=format&fit=crop&q=80&w=800", link: "https://vision-refine-workshop.lovable.app" },
  { id: "9", title: "Propósito — Jornada de Alta Performance", description: "Aplicação de desenvolvimento pessoal com objetivos, missões, progresso por XP e um mentor assistido por IA.", tags: ["React", "IA", "Produtividade", "Aplicação web"], imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800", link: "https://purpose-quest-forge.lovable.app" },
  { id: "8", title: "ID Preview — Aplicativo Web", description: "Aplicativo web demonstrativo com foco em experiência de produto digital, interface responsiva e validação rápida de ideias.", tags: ["Web App", "UI/UX", "Protótipo"], imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", link: "https://id-preview--7c734987-573a-4e34-9c60-4c1811f9bc8c.lovable.app/" },
  { id: "5", title: "Simulador 3D de Casa Acessível", description: "Experiência interativa em 3D para explorar ambientes domésticos e recursos de acessibilidade em uma interface educativa.", tags: ["Three.js", "JavaScript", "3D", "Acessibilidade"], imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800", link: "https://agent-6ad0303656439ed4702--website-deploy-4b87b5.netlify.app/" },
  { id: "6", title: "Controle de Permutadores", description: "Dashboard industrial demonstrativo para acompanhamento de equipamentos, indicadores, curva S, filtros, kanban, auditoria e importação de planilhas.", tags: ["React", "TypeScript", "Dashboard", "Indústria"], imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800", link: "https://controle-permutadores.vercel.app/" },
  { id: "7", title: "IA Consultora de Marketing Digital", description: "Aplicação em Java que organiza uma conversa de consultoria e transforma objetivos de marketing em recomendações práticas.", tags: ["Java", "IA", "APIs", "Marketing"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital" },
  { id: "2", title: "Plataforma de Streaming FullStack", description: "Projeto de estudo de uma experiência de streaming construída com JavaScript moderno, com foco em interface e organização de dados.", tags: ["JavaScript", "Full stack", "Streaming", "UX"], imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800", link: "https://github.com/Matheusssilva333/Projeto-de-Streaming" },
  { id: "3", title: "Calculadora de Preços Imobiliários", description: "Sistema de estudo que utiliza regressão linear e machine learning em Python para estimar preços a partir de variáveis de mercado.", tags: ["Python", "Machine Learning", "Data Science"], imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", link: "https://github.com/Matheusssilva333/Calculadora-de-precos-de-imoveis" },
  { id: "4", title: "Análise de Tráfego de Rede", description: "Projeto de estudo com análise de tráfego capturado, identificação de protocolos e investigação de padrões de comunicação.", tags: ["Redes", "Wireshark", "Segurança"], imageUrl: "https://images.unsplash.com/photo-1526374965328-486d8d87f723?auto=format&fit=crop&q=80&w=800", link: "https://github.com/Matheusssilva333/Analise-de-trafego-de-rede-Wireshark" },
];

export const SKILLS: Skill[] = [
  { name: "Desenvolvimento e IA", category: "Conhecimentos", details: ["Node.js", "Engenharia de prompt", "Python", "Java", "Antigravity"] },
  { name: "Segurança e diagnóstico", category: "Conhecimentos", details: ["Shodan", "Wireshark", "Kali Linux", "Postman"] },
  { name: "Organização e produtividade", category: "Conhecimentos", details: ["Obsidian", "Notion", "Excel intermediário"] },
  { name: "Gestão e negócios", category: "Conhecimentos", details: ["Marketing digital", "Gestão de projetos", "Planejamento", "Gestão de documentos"] },
  { name: "Projeto técnico e automação", category: "Conhecimentos", details: ["Fusion 360", "AutoCAD", "SketchUp", "Programação CLP"] },
  { name: "Plataformas e automação", category: "Conhecimentos", details: ["Supabase", "n8n"] },
];

export const EDUCATION: Education[] = [
  { id: "1", institution: "Unisanta", degree: "Análise e Desenvolvimento de Sistemas", period: "2025 — 2026 · em andamento", description: "Estudos em lógica de programação, bancos de dados, engenharia de software, estruturas de dados e desenvolvimento web." },
  { id: "2", institution: "SENAI Cubatão", degree: "Aplicações com IA Generativa", period: "2026", description: "Formação prática com aplicações de IA generativa, criação de soluções digitais e exploração do Google Antigravity." },
  { id: "3", institution: "SENAI Cubatão", degree: "Programação Oracle Java Foundations", period: "2025", description: "Fundamentos de lógica, programação orientada a objetos e desenvolvimento em Java." },
  { id: "4", institution: "SENAI Cubatão", degree: "Técnico em Manutenção Industrial", period: "2023 — 2024", description: "Base técnica para compreender processos, manutenção e operações industriais." },
];

export const IDIOMAS: Idioma[] = [
  { name: "Português", category: "Nativo", proficiency: 100 },
  { name: "Espanhol", category: "Básico", proficiency: 30 },
  { name: "Inglês", category: "Básico", proficiency: 25 },
];

export const EXPERIENCE: Experience[] = [
  { id: "5", company: "Branqs Automação", position: "Treinamento preparatório para estágio", period: "11/2026 — atual", description: "Formação prática em programação de CLPs Branqs, lógica de controle e integração entre entradas, saídas e IHM, como preparação para o estágio em automação industrial.", achievements: ["Desenvolvimento do programa de Campainha Residencial em CLP", "Desenvolvimento da lógica de Semáforo de Passagem de Nível", "Prática de simulação, validação e documentação de programas CLP"] },
  { id: "1", company: "C3 Engenharia", position: "Caldeireiro · UGAV e UT2", period: "06/2026 — 08/2026", description: "Atuação na UGAV e UT2 em atividades de caldeiraria, manutenção industrial, planejamento e SMS, seguindo procedimentos de segurança em ambiente de alta responsabilidade.", achievements: ["Traçagem de raquetes e componentes de caldeiraria conforme desenho/projeto", "Organização de estojos e conjuntos de fixação para manutenção", "Apoio com planilhas Excel, Permissões de Trabalho e controle documental", "Atuação em trabalho em altura conforme procedimentos de segurança"] },
  { id: "3", company: "Projetos independentes em tecnologia", position: "Desenvolvedor em formação", period: "2024 — atual", description: "Desenvolvimento de aplicações, dashboards e experimentos com Python, Java, JavaScript, IA generativa, APIs, bancos de dados e ferramentas no-code/low-code.", achievements: ["Criação de aplicações web e dashboards para problemas práticos", "Experimentação com IA generativa e integração de APIs", "Construção de projetos para consolidar conhecimentos de desenvolvimento"] },
  { id: "4", company: "Franciscon Infraestrutura", position: "Jovem Aprendiz Técnico", period: "2023 — 2024", description: "Início da trajetória profissional com foco em suporte operacional, organização e contato com rotinas de infraestrutura industrial.", achievements: ["Desenvolvimento de responsabilidade e organização profissional"] },
];

export const FEEDBACKS: Feedback[] = [
  { id: "1", description: "Profissional atencioso e dedicado.", imageUrls: ["/social-proof/willian.png"] },
  { id: "2", description: "Matheus é um programador e resolvedor de problemas nato. Em constante aprendizado, busca aprender e aplicar seus conhecimentos em produtos reais.", imageUrls: ["/social-proof/arthur.png"] },
  { id: "3", description: "Manteve a comunicação durante o projeto e entregou conforme solicitado.", imageUrls: ["/social-proof/icaro.png"] },
];
