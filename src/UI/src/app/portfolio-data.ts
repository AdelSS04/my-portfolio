export interface PortfolioProject {
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

const projectsEn: PortfolioProject[] = [
  { title: 'CleanTrack', category: 'B2B SaaS', year: '2026', description: 'Separate portals for cleaning managers, workers, and clients, with scheduling, mobile checklists, proof-of-work photos, and service approvals.', impact: 'Independent product · Three role-based portals', technologies: ['.NET 10', 'Angular 19', 'PostgreSQL', 'SignalR', 'Docker'], image: 'assets/images/cleantrack.webp', liveUrl: 'https://cleantrack.adellajil.com' },
  { title: 'Slotafy', category: 'SaaS Platform', year: '2026', description: 'A restaurant SaaS with QR ordering, kitchen displays, live order updates, Stripe billing, and GitOps deployments.', impact: 'Independent product · Live restaurant platform', technologies: ['.NET 10', 'Angular 21', 'PostgreSQL', 'Stripe', 'Kubernetes'], image: 'assets/images/slotafy.webp', liveUrl: 'https://slotafy.com/' },
  { title: 'Homelab Infrastructure', category: 'Platform Engineering', year: '2026', description: 'Proxmox infrastructure managed with Pulumi and Ansible, with application and monitoring stacks deployed through Komodo.', impact: 'Personal infrastructure · Two Proxmox hosts', technologies: ['Proxmox', 'Pulumi', 'Ansible', 'Docker Compose', 'Grafana'], image: 'assets/images/homelab.webp', featured: true },
  { title: 'SnB: Sell & Buy', category: 'Marketplace API', year: '2021', description: 'A location-based marketplace backend with Google Maps integration, push notifications, Redis caching, and container deployment.', impact: 'Freelance backend work · 100K+ downloads and 50K+ monthly transactions', technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API', 'Redis'], image: 'assets/images/snb.webp', liveUrl: 'https://www.snbapp.com' },
  { title: 'Spur', category: 'Open Source', year: '2026', description: 'A .NET Result<T> library for explicit error handling, fluent pipelines, and ASP.NET Core integration.', impact: 'Open source · Explicit error handling for .NET', technologies: ['.NET', 'C#', 'NuGet'], image: 'assets/images/spur.webp', githubUrl: 'https://github.com/AdelSS04/Spur', liveUrl: 'https://spur.adellajil.com/' },
  { title: 'Podium360', category: 'Enterprise', year: '2020', description: 'Sustainable-finance product development, reporting, document workflows, portfolio optimization, and Azure cost reduction.', impact: 'Team lead at Podyam · Reduced Azure costs by 30%+', technologies: ['.NET 5', 'Angular', 'Cosmos DB', 'RabbitMQ'], image: 'assets/images/podium.webp', liveUrl: 'https://www.podyam.com' },
  { title: 'Cosmigrator', category: 'Open Source', year: '2026', description: 'A framework for versioned Cosmos DB migrations, with bulk operations, retries, and a CLI for deployment pipelines.', impact: 'Open source · Repeatable Cosmos DB schema and data changes', technologies: ['.NET', 'Cosmos DB', 'C#', 'CLI'], image: 'assets/images/cosmigrator.webp', githubUrl: 'https://github.com/AdelSS04/Cosmigrator', liveUrl: 'https://blog.adellajil.com/blog/cosmigrator-cosmos-db-migrations' },
  { title: 'Clean DDD Architecture', category: 'Open Source', year: '2021', description: 'A .NET reference project demonstrating Domain-Driven Design, repositories, and separation between application logic and infrastructure.', impact: 'Reference architecture · Practical DDD boundaries', technologies: ['.NET Core', 'EF Core', 'DDD', 'CQRS'], image: 'assets/images/clean-ddd.svg', githubUrl: 'https://github.com/AdelSS04/CleanDDDArchitecture' },
  { title: 'Terraform Azure Fullstack Starter', category: 'Cloud & DevOps', year: '2025', description: 'A Terraform starter for Azure applications with separate environments, Auth0 authentication, and GitLab CI/CD configuration.', impact: 'Open source · Repeatable Azure application foundation', technologies: ['Terraform', 'Azure', 'Auth0', 'GitLab CI/CD'], image: 'assets/images/terraform-azure-starter.webp', githubUrl: 'https://github.com/AdelSS04/terraform-azure-fullstack-starter', liveUrl: 'https://blog.adellajil.com/blog/azure-terraform-infrastructure-guide' },
  { title: 'My Portfolio', category: 'Open Source', year: '2025', description: 'An Angular server-rendered portfolio with reusable components, an accessible interaction system, and deployment configuration.', impact: 'Personal platform · Designed, built, and maintained', technologies: ['Angular 20', 'Angular SSR', 'TypeScript', 'Cloudflare', 'GitHub Actions'], image: 'assets/images/my-portfolio.webp', githubUrl: 'https://github.com/AdelSS04/my-portfolio', liveUrl: 'https://portfolio.adellajil.com' },
  { title: 'Angular Reactive Forms Showcase', category: 'Open Source', year: '2025', description: 'An Angular reference project covering typed form groups, custom validators, and reusable reactive-form patterns.', impact: 'Reference project · Typed and reusable form patterns', technologies: ['Angular 18', 'TypeScript', 'Reactive Forms'], image: 'assets/images/angular-form.webp', githubUrl: 'https://github.com/AdelSS04/angular-reactive-forms-showcase', liveUrl: 'https://demo-reactive.vercel.app/' }
];

const servicesEn = [
  { title: 'SaaS products', eyebrow: 'From workflow to production', copy: 'I design tenant-aware .NET services and Angular interfaces for scheduling, ordering, billing, reporting, and day-to-day operations.', benefits: ['Define the product and service boundaries', 'Build role-based web experiences', 'Ship real-time workflows with SignalR'], tools: '.NET · Angular · PostgreSQL · Redis', proof: 'Built and operate two independent multi-tenant SaaS products.' },
  { title: 'APIs & integration', eyebrow: 'Clear boundaries between systems', copy: 'I build REST and gRPC services, background jobs, event-driven workflows, and integrations that are easy to trace when something fails.', benefits: ['Design REST and gRPC contracts', 'Connect queues, events, and external systems', 'Add logs, metrics, retries, and failure handling'], tools: 'ASP.NET Core · gRPC · RabbitMQ · Dapper', proof: 'Hands-on across distributed services, public-sector systems, and marketplace backends.' },
  { title: 'Azure delivery', eyebrow: 'Cloud systems the team can run', copy: 'I work from Terraform and Helm through deployment, diagnostics, and production support. The goal is a system the team understands after release.', benefits: ['Define Azure resources as code', 'Build repeatable deployment paths', 'Diagnose live traffic and infrastructure issues'], tools: 'Azure · AKS · Terraform · Helm · Argo CD', proof: 'Reduced Azure costs by more than 30% at Podyam.' },
  { title: 'Connected devices', eyebrow: 'Secure device-to-cloud flows', copy: 'I build onboarding and provisioning paths for industrial devices using IoT Hub, DPS, X.509 certificates, and event-driven Azure services.', benefits: ['Provision new device types', 'Manage certificate-based onboarding', 'Connect device events to cloud workflows'], tools: 'IoT Hub · DPS · X.509 · Azure Functions', proof: 'Maintain provisioning paths used by more than 5,000 devices.' }
];

const experienceEn = [
  { period: 'Jul 2024 – Present', company: 'Evident Industrial', role: 'Senior Cloud Full-Stack Developer', location: 'Québec, Canada · Hybrid', summary: 'I build and support cloud software that connects industrial devices to EvidentConnect, a multi-tenant SaaS platform.', achievements: ['Work across three AKS microservices and own several device services, Azure Functions, and operational workflows.', 'Maintain provisioning for 5,000+ devices through IoT Hub, DPS, X.509 certificates, and custom allocation policies.', 'Write ADRs, review pull requests, present technical options, debug production issues, and mentor an intern.'], technologies: ['.NET 8–10', 'Angular 18–21', 'AKS', 'Azure IoT', 'gRPC', 'Terraform'] },
  { period: 'Nov 2022 – Jun 2024', company: 'Cofomo · Revenu Québec', role: 'Full-Stack .NET Developer / Analyst Programmer', location: 'Québec, Canada', summary: 'I delivered application and infrastructure changes for large public-sector systems.', achievements: ['Built features with ASP.NET Core, Angular, Dapper, and Azure DevOps.', 'Reviewed changes, joined story analysis and estimation, and supported system, integration, and user-acceptance testing.', 'Reduced code complexity and improved accessibility, documentation, and release support.'], technologies: ['ASP.NET Core', 'Angular', 'Dapper', 'Azure DevOps'] },
  { period: 'Dec 2020 – Aug 2022', company: 'Podyam', role: 'R&D Development Team Lead', location: 'Tunisia', summary: 'I led a seven-developer team working on Podium360, a multi-tenant sustainable-finance platform.', achievements: ['Built reporting, scheduled jobs, document workflows, and a Python portfolio-optimization API.', 'Worked across .NET, Angular, Cosmos DB, Redis, RabbitMQ, Docker, and Azure services.', 'Cut Azure infrastructure costs by more than 30% through right-sizing and Cosmos DB changes.'], technologies: ['.NET', 'Angular', 'Azure', 'Cosmos DB', 'RabbitMQ', 'Python'] },
  { period: 'Earlier', company: 'SnB', role: 'Freelance Backend Developer', location: 'Remote', summary: 'I built backend services for a geo-proximity marketplace with 100K+ downloads and 50K+ monthly transactions.', achievements: ['Added location-based search, push notifications, Google Maps integration, Redis caching, and container deployment.'], technologies: ['.NET', 'MySQL', 'Redis', 'Docker', 'Firebase'] }
];

const stackEn = [
  ['Backend & architecture', '.NET 8–10', 'C#', 'ASP.NET Core', 'REST', 'gRPC', 'EF Core', 'Dapper', 'DDD', 'CQRS'],
  ['Frontend', 'Angular 18–21', 'TypeScript', 'RxJS', 'Signals', 'Tailwind CSS', 'Accessibility'],
  ['Cloud & connected systems', 'Azure', 'AKS', 'IoT Hub', 'DPS', 'Azure Functions', 'Cosmos DB', 'Application Insights'],
  ['Delivery & operations', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitLab CI/CD', 'Argo CD', 'GitHub Actions']
] as const;

export interface Capability {
  title: string;
  eyebrow: string;
  copy: string;
  benefits: string[];
  tools: string;
  proof: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface PortfolioContent {
  projects: PortfolioProject[];
  services: Capability[];
  experience: ExperienceItem[];
  stack: readonly (readonly string[])[];
}

const projectsFr: PortfolioProject[] = [
  { title: 'CleanTrack', category: 'SaaS B2B', year: '2026', description: 'Des portails distincts pour les gestionnaires de ménage, les employés et les clients, avec planification, listes de contrôle mobiles, photos de preuve de travail et approbations de services.', impact: 'Produit indépendant · Trois portails basés sur les rôles', technologies: ['.NET 10', 'Angular 19', 'PostgreSQL', 'SignalR', 'Docker'], image: 'assets/images/cleantrack.webp', liveUrl: 'https://cleantrack.adellajil.com' },
  { title: 'Slotafy', category: 'Plateforme SaaS', year: '2026', description: 'Un SaaS de restauration avec commande par QR, écrans de cuisine, mises à jour de commandes en direct, facturation Stripe et déploiements GitOps.', impact: 'Produit indépendant · Plateforme de restauration en ligne', technologies: ['.NET 10', 'Angular 21', 'PostgreSQL', 'Stripe', 'Kubernetes'], image: 'assets/images/slotafy.webp', liveUrl: 'https://slotafy.com/' },
  { title: 'Homelab Infrastructure', category: 'Ingénierie de plateforme', year: '2026', description: 'Infrastructure Proxmox gérée avec Pulumi et Ansible, avec piles applicatives et de supervision déployées via Komodo.', impact: 'Infrastructure personnelle · Deux hôtes Proxmox', technologies: ['Proxmox', 'Pulumi', 'Ansible', 'Docker Compose', 'Grafana'], image: 'assets/images/homelab.webp', featured: true },
  { title: 'SnB: Sell & Buy', category: 'API de place de marché', year: '2021', description: 'Un backend de place de marché géolocalisée avec intégration Google Maps, notifications push, cache Redis et déploiement par conteneurs.', impact: 'Travail backend freelance · Plus de 100 000 téléchargements et 50 000 transactions mensuelles', technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API', 'Redis'], image: 'assets/images/snb.webp', liveUrl: 'https://www.snbapp.com' },
  { title: 'Spur', category: 'Open Source', year: '2026', description: 'Une bibliothèque .NET Result<T> pour la gestion explicite des erreurs, les pipelines fluides et l’intégration ASP.NET Core.', impact: 'Open source · Gestion explicite des erreurs pour .NET', technologies: ['.NET', 'C#', 'NuGet'], image: 'assets/images/spur.webp', githubUrl: 'https://github.com/AdelSS04/Spur', liveUrl: 'https://spur.adellajil.com/' },
  { title: 'Podium360', category: 'Entreprise', year: '2020', description: 'Développement de produit de finance durable, rapports, workflows documentaires, optimisation de portefeuille et réduction des coûts Azure.', impact: 'Chef d’équipe chez Podyam · Réduction des coûts Azure de plus de 30 %', technologies: ['.NET 5', 'Angular', 'Cosmos DB', 'RabbitMQ'], image: 'assets/images/podium.webp', liveUrl: 'https://www.podyam.com' },
  { title: 'Cosmigrator', category: 'Open Source', year: '2026', description: 'Un framework de migrations Cosmos DB versionnées, avec opérations en masse, reprises et CLI pour les pipelines de déploiement.', impact: 'Open source · Changements de schéma et de données Cosmos DB reproductibles', technologies: ['.NET', 'Cosmos DB', 'C#', 'CLI'], image: 'assets/images/cosmigrator.webp', githubUrl: 'https://github.com/AdelSS04/Cosmigrator', liveUrl: 'https://blog.adellajil.com/blog/cosmigrator-cosmos-db-migrations' },
  { title: 'Clean DDD Architecture', category: 'Open Source', year: '2021', description: 'Un projet de référence .NET démontrant le Domain-Driven Design, les dépôts et la séparation entre la logique applicative et l’infrastructure.', impact: 'Architecture de référence · Frontières DDD pratiques', technologies: ['.NET Core', 'EF Core', 'DDD', 'CQRS'], image: 'assets/images/clean-ddd.svg', githubUrl: 'https://github.com/AdelSS04/CleanDDDArchitecture' },
  { title: 'Terraform Azure Fullstack Starter', category: 'Cloud & DevOps', year: '2025', description: 'Un starter Terraform pour applications Azure avec environnements séparés, authentification Auth0 et configuration CI/CD GitLab.', impact: 'Open source · Fondation d’application Azure reproductible', technologies: ['Terraform', 'Azure', 'Auth0', 'GitLab CI/CD'], image: 'assets/images/terraform-azure-starter.webp', githubUrl: 'https://github.com/AdelSS04/terraform-azure-fullstack-starter', liveUrl: 'https://blog.adellajil.com/blog/azure-terraform-infrastructure-guide' },
  { title: 'My Portfolio', category: 'Open Source', year: '2025', description: 'Un portfolio Angular avec rendu serveur, composants réutilisables, système d’interactions accessibles et configuration de déploiement.', impact: 'Plateforme personnelle · Conçu, construit et maintenu', technologies: ['Angular 20', 'Angular SSR', 'TypeScript', 'Cloudflare', 'GitHub Actions'], image: 'assets/images/my-portfolio.webp', githubUrl: 'https://github.com/AdelSS04/my-portfolio', liveUrl: 'https://portfolio.adellajil.com' },
  { title: 'Angular Reactive Forms Showcase', category: 'Open Source', year: '2025', description: 'Un projet de référence Angular couvrant les groupes de formulaires typés, les validateurs personnalisés et les motifs de formulaires réactifs réutilisables.', impact: 'Projet de référence · Motifs de formulaires typés et réutilisables', technologies: ['Angular 18', 'TypeScript', 'Reactive Forms'], image: 'assets/images/angular-form.webp', githubUrl: 'https://github.com/AdelSS04/angular-reactive-forms-showcase', liveUrl: 'https://demo-reactive.vercel.app/' }
];

const servicesFr: Capability[] = [
  { title: 'Produits SaaS', eyebrow: 'Du flux de travail à la production', copy: 'Je conçois des services .NET multi-tenant et des interfaces Angular pour la planification, les commandes, la facturation, les rapports et les opérations quotidiennes.', benefits: ['Définir les frontières du produit et des services', 'Créer des expériences web basées sur les rôles', 'Livrer des workflows temps réel avec SignalR'], tools: '.NET · Angular · PostgreSQL · Redis', proof: 'Conçu et j’exploite deux produits SaaS multi-tenant indépendants.' },
  { title: 'API et intégration', eyebrow: 'Des frontières claires entre les systèmes', copy: 'Je construis des services REST et gRPC, des tâches de fond, des workflows pilotés par événements et des intégrations faciles à tracer en cas de panne.', benefits: ['Concevoir des contrats REST et gRPC', 'Connecter files d’attente, événements et systèmes externes', 'Ajouter journaux, métriques, reprises et gestion des pannes'], tools: 'ASP.NET Core · gRPC · RabbitMQ · Dapper', proof: 'Expérience pratique des services distribués, des systèmes du secteur public et des backends de places de marché.' },
  { title: 'Livraison Azure', eyebrow: 'Des systèmes cloud que l’équipe peut exploiter', copy: 'Je travaille de Terraform et Helm jusqu’au déploiement, au diagnostic et au support de production. L’objectif : un système que l’équipe comprend après la mise en production.', benefits: ['Définir les ressources Azure en code', 'Construire des chemins de déploiement reproductibles', 'Diagnostiquer le trafic réel et les problèmes d’infrastructure'], tools: 'Azure · AKS · Terraform · Helm · Argo CD', proof: 'Réduction de plus de 30 % des coûts Azure chez Podyam.' },
  { title: 'Appareils connectés', eyebrow: 'Des flux appareil-cloud sécurisés', copy: 'Je construis les chemins d’embarquement et de provisionnement d’appareils industriels avec IoT Hub, DPS, certificats X.509 et services Azure pilotés par événements.', benefits: ['Provisionner de nouveaux types d’appareils', 'Gérer l’embarquement basé sur certificats', 'Connecter les événements d’appareils aux workflows cloud'], tools: 'IoT Hub · DPS · X.509 · Azure Functions', proof: 'Je maintiens les chemins de provisionnement utilisés par plus de 5 000 appareils.' }
];

const experienceFr: ExperienceItem[] = [
  { period: 'Juil. 2024 – Aujourd’hui', company: 'Evident Industrial', role: 'Développeur cloud full-stack senior', location: 'Québec, Canada · Hybride', summary: 'Je construis et soutiens des logiciels cloud qui relient les appareils industriels à EvidentConnect, une plateforme SaaS multi-tenant.', achievements: ['Je travaille sur trois microservices AKS et je prends en charge plusieurs services d’appareils, fonctions Azure et flux opérationnels.', 'Je maintiens le provisionnement de plus de 5 000 appareils via IoT Hub, DPS, certificats X.509 et politiques d’allocation personnalisées.', 'Je rédige des ADR, révise les pull requests, présente les options techniques, débogue les problèmes de production et j’encadre un stagiaire.'], technologies: ['.NET 8–10', 'Angular 18–21', 'AKS', 'Azure IoT', 'gRPC', 'Terraform'] },
  { period: 'Nov. 2022 – Juin 2024', company: 'Cofomo · Revenu Québec', role: 'Développeur .NET full-stack / Analyste-programmeur', location: 'Québec, Canada', summary: 'J’ai livré des changements applicatifs et d’infrastructure pour de grands systèmes du secteur public.', achievements: ['J’ai développé des fonctionnalités avec ASP.NET Core, Angular, Dapper et Azure DevOps.', 'J’ai révisé les changements, participé à l’analyse et à l’estimation des stories, et soutenu les tests système, d’intégration et d’acceptation utilisateur.', 'J’ai réduit la complexité du code et amélioré l’accessibilité, la documentation et le support des versions.'], technologies: ['ASP.NET Core', 'Angular', 'Dapper', 'Azure DevOps'] },
  { period: 'Déc. 2020 – Août 2022', company: 'Podyam', role: 'Chef d’équipe R&D', location: 'Tunisie', summary: 'J’ai dirigé une équipe de sept développeurs travaillant sur Podium360, une plateforme multi-tenant de finance durable.', achievements: ['J’ai construit des rapports, des tâches planifiées, des workflows documentaires et une API Python d’optimisation de portefeuille.', 'J’ai travaillé avec .NET, Angular, Cosmos DB, Redis, RabbitMQ, Docker et les services Azure.', 'J’ai réduit les coûts d’infrastructure Azure de plus de 30 % grâce au redimensionnement et aux changements Cosmos DB.'], technologies: ['.NET', 'Angular', 'Azure', 'Cosmos DB', 'RabbitMQ', 'Python'] },
  { period: 'Avant', company: 'SnB', role: 'Développeur backend freelance', location: 'À distance', summary: 'J’ai construit des services backend pour une place de marché de géoproximité avec plus de 100 000 téléchargements et 50 000 transactions mensuelles.', achievements: ['J’ai ajouté la recherche géolocalisée, les notifications push, l’intégration Google Maps, le cache Redis et le déploiement par conteneurs.'], technologies: ['.NET', 'MySQL', 'Redis', 'Docker', 'Firebase'] }
];

const stackFr: string[][] = [
  ['Backend et architecture', '.NET 8–10', 'C#', 'ASP.NET Core', 'REST', 'gRPC', 'EF Core', 'Dapper', 'DDD', 'CQRS'],
  ['Frontend', 'Angular 18–21', 'TypeScript', 'RxJS', 'Signals', 'Tailwind CSS', 'Accessibilité'],
  ['Cloud et systèmes connectés', 'Azure', 'AKS', 'IoT Hub', 'DPS', 'Azure Functions', 'Cosmos DB', 'Application Insights'],
  ['Livraison et opérations', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitLab CI/CD', 'Argo CD', 'GitHub Actions']
];

export const portfolioContent: Record<'en' | 'fr', PortfolioContent> = {
  en: { projects: projectsEn, services: servicesEn, experience: experienceEn, stack: stackEn },
  fr: { projects: projectsFr, services: servicesFr, experience: experienceFr, stack: stackFr }
};
