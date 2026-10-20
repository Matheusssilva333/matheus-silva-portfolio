import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "5",
    title: "Simulador 3D de Casa Acessível",
    description: "Experiência interativa em 3D para explorar ambientes domésticos, recursos de acessibilidade e controles de navegação em uma interface educativa.",
    tags: ["Three.js", "JavaScript", "3D", "Acessibilidade"],
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
    link: "https://agent-6ad0303656439ed4702--website-deploy-4b87b5.netlify.app/",
  },
  {
    id: "6",
    title: "Controle de Permutadores",
    description: "Dashboard industrial demonstrativo para acompanhamento de equipamentos, indicadores de avanço, curva S, filtros, kanban, auditoria e importação de planilhas.",
    tags: ["React", "TypeScript", "Recharts", "Dashboard"],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    link: "https://controle-permutadores.vercel.app/",
  },
  {
    id: "7",
    title: "IA Consultora de Marketing Digital",
    description: "Aplicação em Java que organiza uma conversa de consultoria e transforma objetivos de marketing em recomendações práticas para presença e crescimento digital.",
    tags: ["Java", "IA", "APIs", "Marketing"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital.git",
  },
  {
    id: "2",
    title: "Plataforma de Streaming FullStack",
    description: "Ecossistema completo de vídeo construído com JavaScript moderno, com foco em performance e experiência do usuário.",
    tags: ["JavaScript", "FullStack", "Streaming", "UX"],
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Projeto-de-Streaming",
  },
  {
    id: "3",
    title: "Calculadora de Preços Imobiliários",
    description: "Sistema de predição de preços que utiliza regressão linear e machine learning em Python para entregar estimativas a partir de variáveis de mercado.",
    tags: ["Python", "Machine Learning", "Data Science"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Calculadora-de-precos-de-imoveis",
  },
  {
    id: "4",
    title: "Análise de tráfego de rede",
    description: "Análise de tráfego capturado, identificando padrões de comunicação, protocolos utilizados e potenciais vulnerabilidades.",
    tags: ["Redes", "Protocolos", "Segurança"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-486d8d87f723?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Analise-de-trafego-de-rede-Wireshark.git",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Automação com IA",
    category: "Core Stack",
    proficiency: 95,
    details: ["n8n", "Make (Integromat)", "LangChain", "Agentes Autônomos"],
  },
  {
    name: "Cibersegurança & Ethical Hacking",
    category: "Security",
    proficiency: 70,
    details: ["Wireshark", "Nmap", "Burp Suite", "Postman", "Metasploit"],
  },
  {
    name: "Desenvolvimento Python",
    category: "Backend",
    proficiency: 90,
    details: ["FastAPI", "Pandas", "Automação de Scripts", "Bots"],
  },
  {
    name: "Desenvolvimento Java",
    category: "Backend",
    proficiency: 80,
    details: ["Oracle Java Foundations", "Spring Boot", "POO", "Estrutura de Dados"],
  },
  {
    name: "Engenharia de Dados",
    category: "Database",
    proficiency: 85,
    details: ["PostgreSQL", "Supabase", "SQL Avançado", "Excel Pro"],
  },
  {
    name: "Precisão Industrial",
    category: "Soft Skills",
    proficiency: 100,
    details: ["Resiliência", "Foco em Detalhes", "Metodologia SENAI"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Unisanta",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2025 - 2026",
    description: "Foco em engenharia de software moderna, arquitetura distribuída e desenvolvimento ágil.",
  },
  {
    id: "2",
    institution: "SENAI Cubatão",
    degree: "Aplicações com IA Generativa (Google Antigravity)",
    period: "2026",
    description: "Especialização técnica em orquestração de LLMs e fluxos complexos de agentes inteligentes.",
  },
  {
    id: "3",
    institution: "SENAI Cubatão",
    degree: "Programação Oracle Java Foundations",
    period: "2025",
    description: "Certificação focada em lógica de programação complexa e fundamentos robustos de POO.",
  },
  {
    id: "5",
    institution: "Programa Autonomia e Renda Petrobras",
    degree: "Especialização em Caldeiraria",
    period: "2025",
    description: "Desenvolvimento de raciocínio lógico espacial e precisão técnica em conformação de metais.",
  },
  {
    id: "4",
    institution: "SENAI Cubatão",
    degree: "Técnico em Manutenção Industrial",
    period: "2023 - 2024",
    description: "Base da minha disciplina técnica e entendimento de processos operacionais complexos.",
  },
];

export const IDIOMAS: Idioma[] = [
  {
    name: "Português",
    category: "Nativo",
    proficiency: 100,
  },
  {
    name: "Espanhol",
    category: "Intermediário",
    proficiency: 65,
  },
  {
    name: "Inglês",
    category: "Técnico",
    proficiency: 55,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "C3 Engenharia (Petrobras - RPBC)",
    position: "Caldeireiro - Setor UGAV",
    period: "2026 - Presente",
    description: "Atuação em parada de manutenção na Refinaria Presidente Bernardes (Cubatão). Execução de manutenção corretiva e preventiva em unidades de geração de ar e vapor (UGAV), aplicando precisão técnica em conformação de metais e montagem industrial sob rigorosos protocolos de segurança.",
    achievements: ["Zero falhas em testes de integridade em ambiente crítico", "Aplicação de metodologias ágeis na organização de fluxos de manutenção"],
  },
  {
    id: "2",
    company: "Freelance Tech",
    position: "FullStack Developer & Ethical Hacker",
    period: "2024 - Presente",
    description: "2 anos de experiência entregando soluções robustas de automação e segurança ofensiva/defensiva.",
    achievements: [
      "Desenvolvimento de bots de atendimento e fluxos de automação com Python e Java",
      "Pentesting e análise de vulnerabilidades em aplicações web utilizando Burp Suite e Nmap",
      "Monitoramento e análise de tráfego de rede com Wireshark para identificação de intrusões",
      "Implementação de APIs seguras e integração de sistemas legados",
      "Consultoria técnica para otimização de segurança digital em pequenas empresas"
    ],
  },
  {
    id: "3",
    company: "Franciscon Infraestrutura",
    position: "Jovem Aprendiz Técnico",
    period: "2023 - 2024",
    description: "Início da trajetória profissional com foco em suporte operacional e logística industrial.",
    achievements: ["Otimização da organização de ativos industriais"],
  }
];

export const FEEDBACKS: Feedback[] = [
  {
    id: "1",
    description: "Profissional atencioso e dedicado.",
    imageUrls: ["/social-proof/willian.png"],
  },
  {
    id: "2",
    description: "Matheus é um programador e resolvedor de problemas nato. Em constante aprendizado, busca aprender e aplicar seus conhecimentos em produtos reais.",
    imageUrls: ["/social-proof/arthur.png"],
  },
  {
    id: "3",
    description: "Manteve a comunicação durante o projeto e entregou conforme solicitado.",
    imageUrls: ["/social-proof/icaro.png"],
  },
];