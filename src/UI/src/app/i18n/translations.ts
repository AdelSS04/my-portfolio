export type Lang = 'en' | 'fr';
export type TranslationDict = Record<string, any>;

export const translations: Record<Lang, TranslationDict> = {
  en: {
    nav: {
      skip: 'Skip to content',
      primaryAria: 'Primary navigation',
      more: 'More',
      talk: "Let's talk",
      toggleAria: 'Toggle navigation',
      items: [
        { id: 'intro', label: 'Intro' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Capability' },
        { id: 'work', label: 'Work' },
        { id: 'stack', label: 'Stack' },
        { id: 'experience', label: 'Experience' },
        { id: 'writing', label: 'Writing' },
        { id: 'contact', label: 'Contact' }
      ],
      moreItems: [
        { id: 'credentials', label: 'Credentials' },
        { id: 'process', label: 'How I work' },
        { id: 'open-source', label: 'Open source' },
        { id: 'testimonials', label: 'Recommendations' },
        { id: 'faq', label: 'FAQ' },
        { id: 'freelance', label: 'Freelance' }
      ]
    },
    hero: {
      status: 'Available for senior engineering roles',
      role: 'Senior Software Engineer',
      intro: 'I build reliable SaaS platforms and cloud services that connect industrial devices to the products people use every day.',
      ctaProjects: 'View projects',
      ctaContact: 'Start a conversation',
      proof: [
        { v: '100+', l: 'organizations served' },
        { v: '5,000+', l: 'devices provisioned' },
        { v: '30%+', l: 'Azure cost reduction' },
        { v: 'FR · EN · AR', l: 'working languages' }
      ],
      scrollLabel: 'Scroll',
      scrollAria: 'Scroll to introduction'
    },
    intro: {
      kicker: 'Quick introduction',
      headingA: 'The engineer',
      headingB: 'behind the systems.',
      copy: 'A short view of what I care about, what I build, and how I contribute when the software reaches production.',
      location: 'Québec, Canada · Eastern Time',
      tagline: 'Senior engineer for products where cloud software meets real operations.',
      bringKicker: 'What I bring',
      bringCopy: 'I turn complicated operational problems into software that teams can understand, operate, and confidently extend.',
      meet: 'Meet Adel',
      focus: [
        { label: 'Focus', value: 'SaaS & industrial IoT' },
        { label: 'Core', value: '.NET, Angular & Azure' },
        { label: 'Approach', value: 'Own problems end to end' }
      ]
    },
    about: {
      kicker: 'About',
      headingA: 'Senior engineer who stays',
      headingB: 'with the problem.',
      lead: "I'm a backend-first full-stack engineer with 6+ years of experience building SaaS products, public-sector applications, and device-cloud systems.",
      p2: 'My day-to-day work spans .NET services, Angular interfaces, Azure infrastructure, and production support. At Evident Industrial, I work across three AKS microservices and maintain provisioning paths used by more than 5,000 connected devices.',
      p3: 'I like owning the full path: understand the workflow, write the ADR, build the change, review it with the team, and stay close when it reaches production.',
      readExp: 'Read my experience',
      stats: [
        { v: '6+', l: 'years building software' },
        { v: '5,000+', l: 'devices provisioned' },
        { v: '7', l: 'developers led' },
        { v: '30%+', l: 'Azure cost reduction' }
      ],
      scopeLabel: 'What I do',
      scope: [
        'Design multi-tenant .NET services and Angular applications',
        'Build REST, gRPC, messaging, and background-job workflows',
        'Provision industrial devices with IoT Hub, DPS, and X.509',
        'Define Azure infrastructure with Terraform, Helm, and Kubernetes',
        'Write ADRs, review code, debug production, and mentor developers'
      ],
      availability: 'Based in Québec · Working in English and French'
    },
    work: {
      kicker: 'Selected work',
      headingA: 'Products built for',
      headingB: 'real use.',
      copy: 'Independent SaaS, platform engineering, enterprise delivery, and open-source tools. These are real products, not placeholder case studies.',
      featured: 'Featured',
      prevAria: 'Previous project',
      nextAria: 'Next project',
      goTo: 'Go to ',
      liveLabel: 'Live project',
      sourceLabel: 'Source'
    },
    services: {
      kicker: 'Capability',
      headingA: 'What I can build',
      headingB: 'with your team.',
      copy: 'Choose an area to see the kind of problems I can take from technical direction through production support.',
      tabsAria: 'Capabilities',
      talkWork: 'Talk about this work',
      proofLabel: 'PROOF FROM MY WORK'
    },
    stack: {
      kicker: 'Tech stack',
      headingA: 'The tools I',
      headingB: 'ship with.',
      copy: 'Depth across application architecture, modern frontend systems, data, cloud delivery, and connected devices.',
      certKicker: 'Microsoft certified',
      certTitle: 'Azure Developer Associate',
      certSub: 'AZ-204 · Earned 2023'
    },
    experience: {
      kicker: 'Experience',
      headingA: 'Years inside',
      headingB: 'complex systems.',
      copy: 'From marketplace backends to public-sector applications and industrial IoT platforms.',
      headPresent: 'HEAD · Present',
      headActive: 'Active career branch',
      labKicker: 'Outside client work',
      labTitle: 'Homelab as a platform practice.',
      labCopy: 'I run a two-node Proxmox environment to keep learning where production work gets real: provisioning, deployments, monitoring, logs, access, and recovery.',
      labSteps: [
        { b: 'Provision', s: 'Pulumi + Ansible' },
        { b: 'Deploy', s: 'Docker Compose + Komodo' },
        { b: 'Observe', s: 'Grafana + Loki' }
      ],
      labLink: 'See the homelab'
    },
    credentials: {
      kicker: 'Credentials',
      headingA: 'Built on a',
      headingB: 'systems mindset.',
      copy: 'Formal engineering training, strengthened by cloud certification and years of production delivery.',
      eduKicker: 'Education',
      eduTitle: 'National Engineering Degree',
      eduField: 'Industrial Systems and Logistics Engineering',
      eduSub: 'ENICarthage · Graduated 2020',
      eduLink: 'View education ↗',
      certKicker: 'Certification',
      certTitle: 'Azure Developer Associate',
      certField: 'Microsoft AZ-204',
      certSub: 'Earned 2023',
      certLink: 'View credential ↗'
    },
    process: {
      kicker: 'How I work',
      headingA: 'Clarity from first',
      headingB: 'question to production.',
      copy: "Good delivery is a loop, not a hand-off. I stay close to the problem, the code, and what happens after release.",
      steps: [
        { tag: 'Discover', title: 'Understand the real workflow.', copy: 'Map the people, systems, constraints, and evidence that define success.' },
        { tag: 'Decide', title: 'Make tradeoffs visible.', copy: 'Document architecture decisions and shape the smallest coherent release.' },
        { tag: 'Deliver', title: 'Build in reviewable slices.', copy: 'Pair implementation with tests, observability, and clear technical communication.' },
        { tag: 'Operate', title: 'Learn from production.', copy: 'Support the release, diagnose failures, and feed the learning back into the system.' }
      ]
    },
    opensource: {
      kicker: 'Open source',
      headingA: 'Public work,',
      headingB: 'real activity.',
      copy: 'I publish small .NET libraries when a repeated engineering problem deserves a reusable answer. Most product work stays private, but the public side is active and maintained.',
      viewProfile: 'View GitHub profile',
      snapshot: 'Cached public snapshot',
      live: 'Live public profile',
      contribAriaSuffix: ' GitHub contributions in the last year',
      less: 'Less',
      more: 'More',
      loading: 'Loading contribution activity…',
      unavailable: 'GitHub activity is unavailable right now.',
      openProfile: 'Open the profile ↗',
      reposLabel: 'public repositories',
      followersLabel: 'followers',
      stackLabel: 'primary stack',
      repos: [
        { name: 'Spur', desc: 'Explicit Result<T> flows for .NET', url: 'https://github.com/AdelSS04/Spur' },
        { name: 'Cosmigrator', desc: 'Versioned Cosmos DB migrations', url: 'https://github.com/AdelSS04/Cosmigrator' }
      ]
    },
    writing: {
      kicker: 'Writing',
      headingA: 'Notes from',
      headingB: 'real software.',
      allLink: 'All writing',
      featuredTag: 'Featured · Cloud / DevOps',
      featuredTitle: 'Why I Started Treating My Homelab Like a Small Platform',
      featuredDesc: 'What changed when I stopped treating home infrastructure as a set of containers and started giving each part a clear job.',
      articles: [
        { tag: 'Cloud / DevOps', title: 'A Privacy-Safe Tour of My Two-Node Homelab', read: '10 min read', url: 'https://blog.adellajil.com/blog/privacy-safe-two-node-homelab-tour/' },
        { tag: 'Observability', title: 'Exposing and Securing Loki Log Ingestion', read: '18 min read', url: 'https://blog.adellajil.com/blog/exposing-securing-loki-log-ingestion/' },
        { tag: 'Cloud', title: 'From Cache Miss to Cache Hit with Azure Front Door', read: '13 min read', url: 'https://blog.adellajil.com/blog/azure-frontdoor-cache-warmup/' }
      ],
      featuredRead: '9 min read'
    },
    testimonials: {
      kicker: 'Recommendations',
      headingA: 'What colleagues',
      headingB: 'say about the work.',
      copy: 'Direct feedback from people who have worked with me on software teams.',
      countLabel: 'Professional recommendations',
      items: [
        { name: 'Mariem Gharsallah', role: 'Technology Consultant · Accenture', quote: 'Not only is he always willing to learn a new skill but also dedicated to mastering it. He is also very helpful and always gives of his time whenever in need.' },
        { name: 'Arsslen Idadi', role: 'Senior .NET Developer · Software Architect', quote: 'A hard worker, passionate and determined software engineer. I recommend him for any software engineering related work.' }
      ]
    },
    freelance: {
      kicker: 'Freelance',
      headingA: 'A website, a tool,',
      headingB: 'a problem solved.',
      copy: 'I build custom websites and tools for small Québec businesses. In French or English, no jargon, one single point of contact.',
      cards: [
        { title: 'Professional websites', copy: 'Creation or redesign of your showcase site: fast, modern and search-friendly, designed to turn visitors into clients.', tags: ['Mobile design', 'SEO', 'Contact forms'] },
        { title: 'Custom internal tools', copy: 'Dashboards, automations and management: tools designed for your team that save time every day.', tags: ['Dashboards', 'Automation', 'Role-based access'] },
        { title: 'Web applications', copy: 'Robust applications in .NET and Angular: client portals, online booking, ordering or inventory management.', tags: ['API', 'Client portals', 'Stripe payments'] },
        { title: 'Cloud & infrastructure', copy: 'Hosting, security and backups on Azure: reliable infrastructure that runs without you having to worry about it.', tags: ['Hosting', 'Backups', 'Security'] }
      ],
      steps: [
        { tag: 'Discovery call', title: 'We discuss your needs.', copy: 'No commitment: we identify the problem and what a good outcome would change for you.' },
        { tag: 'Clear proposal', title: 'You know what you pay for.', copy: 'Scope, timeline and price set in writing before we start. No surprises.' },
        { tag: 'Delivery', title: 'We build in visible steps.', copy: 'You follow progress continuously and we adjust together as needed.' },
        { tag: 'Follow-up', title: 'I stay available afterwards.', copy: 'Go-live, quick training and support for the first months.' }
      ],
      cta: 'Discuss my project',
      note: "Every project is different — let's talk, no commitment."
    },
    faq: {
      kicker: 'FAQ',
      headingA: 'A few useful',
      headingB: 'answers.',
      items: [
        { q: 'What kind of work do you take on?', a: 'Senior software engineering roles and product work involving .NET, Angular, Azure, SaaS systems, or connected devices.' },
        { q: 'Do you work in English or French?', a: 'Both. I work professionally in French and English; Arabic is my native language.' },
        { q: 'Are you open to conversations about a project?', a: 'Yes. Share your current system, the technical constraints, and the outcome you need.' }
      ]
    },
    footer: {
      brandCopy: 'Senior software engineer working across .NET, Angular, Azure, and connected-device systems.',
      navTitle: 'Navigate',
      nav: [
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Capability' },
        { id: 'work', label: 'Selected work' },
        { id: 'experience', label: 'Experience' },
        { id: 'writing', label: 'Writing' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' }
      ],
      selTitle: 'Selected',
      selLinks: [
        { href: '#stack', label: 'Tech stack' },
        { href: '#credentials', label: 'Credentials' },
        { href: '#process', label: 'How I work' },
        { href: '#open-source', label: 'Open source' },
        { href: '#testimonials', label: 'Recommendations' }
      ],
      touchTitle: 'Get in touch',
      location: 'Québec, Canada · Eastern Time',
      cta: 'Start a conversation',
      rightsSuffix: 'Designed and built with Angular.',
      backTop: 'Back to top ↑'
    },
    contact: {
      title: 'Let’s Talk',
      subtitle: 'Have a project or an engineering role in mind? Tell me about the team, the problem, and where you need help.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      nameError: 'Enter your name using at least 2 characters.',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      emailError: 'Enter a valid email address.',
      subjectLabel: 'Subject (optional)',
      subjectPlaceholder: 'For example: .NET role, SaaS project, or Azure integration',
      msgLabel: 'Message',
      msgHint: '(Include the context, timeline, and technical constraints.)',
      msgPlaceholder: 'Describe what you are building or the role you are hiring for. Include your current stack and where you need support.',
      msgError: 'Enter a message using at least 10 characters.',
      send: 'Send message',
      sending: 'Sending...',
      ok: 'Thanks. Your message has been sent.',
      fail: 'Your message could not be sent. Please email contact@adellajil.com.',
      emailTitle: 'Email',
      locationTitle: 'Location',
      tzTitle: 'Time zone',
      locationValue: 'Québec, Canada',
      tzValue: 'Eastern Time'
    },
    education: {
      nav: {
        items: [
          { label: 'Home', href: '#home' },
          { label: 'Work', href: '#work' },
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' }
        ],
        blog: 'Blog',
        contactLabel: 'Contact'
      },
      footer: {
        rights: 'All rights reserved.',
        links: ['Home', 'Services', 'Work', 'About', 'Education', 'Contact']
      },
      page: {
        kicker: 'Education',
        title: 'Education & Certification',
        subtitle: 'My engineering education and Microsoft Azure qualification.',
        studiesLabel: 'Studies',
        moreAreas: 'more areas of study',
        achievementsLabel: 'Achievements',
        keyAchievementsLabel: 'Key Achievements',
        certSectionTitle: 'Microsoft Certification',
        certSectionSub: 'Azure Developer Associate, earned in 2023.',
        items: [
          {
            school: 'National Engineering School of Carthage (ENICarthage)',
            degree: 'National Engineering Degree',
            field: 'Industrial Systems and Logistics Engineering',
            period: 'Graduated 2020',
            location: 'Carthage, Tunisia',
            description: ['Engineering studies in industrial systems and logistics.']
          }
        ],
        certs: [
          { title: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft', date: 'Earned 2023', skills: ['Azure', 'Application Development'] }
        ]
      }
    }
  },
  fr: {
    nav: {
      skip: 'Aller au contenu',
      primaryAria: 'Navigation principale',
      more: 'Plus',
      talk: 'Discutons',
      toggleAria: 'Basculer la navigation',
      items: [
        { id: 'intro', label: 'Intro' },
        { id: 'about', label: 'À propos' },
        { id: 'services', label: 'Expertise' },
        { id: 'work', label: 'Réalisations' },
        { id: 'stack', label: 'Stack' },
        { id: 'experience', label: 'Expérience' },
        { id: 'writing', label: 'Blog' },
        { id: 'contact', label: 'Contact' }
      ],
      moreItems: [
        { id: 'credentials', label: 'Diplômes' },
        { id: 'process', label: 'Méthode de travail' },
        { id: 'open-source', label: 'Open source' },
        { id: 'testimonials', label: 'Recommandations' },
        { id: 'faq', label: 'FAQ' },
        { id: 'freelance', label: 'Freelance' }
      ]
    },
    hero: {
      status: "Disponible pour des rôles d'ingénierie senior",
      role: 'Ingénieur logiciel senior',
      intro: 'Je conçois des plateformes SaaS fiables et des services cloud qui relient les appareils industriels aux produits que les gens utilisent chaque jour.',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Démarrer une conversation',
      proof: [
        { v: '100+', l: 'organisations desservies' },
        { v: '5 000+', l: 'appareils provisionnés' },
        { v: '30%+', l: 'réduction des coûts Azure' },
        { v: 'FR · EN · AR', l: 'langues de travail' }
      ],
      scrollLabel: 'Défiler',
      scrollAria: "Défiler jusqu'à la présentation"
    },
    intro: {
      kicker: 'Présentation rapide',
      headingA: "L'ingénieur",
      headingB: 'derrière les systèmes.',
      copy: "Un aperçu de ce qui me tient à cœur, de ce que je construis et de ma contribution quand le logiciel arrive en production.",
      location: 'Québec, Canada · Heure de l’Est',
      tagline: 'Ingénieur senior pour des produits où le logiciel cloud rencontre les opérations réelles.',
      bringKicker: "Ce que j'apporte",
      bringCopy: 'Je transforme des problèmes opérationnels complexes en logiciels que les équipes peuvent comprendre, exploiter et faire évoluer en confiance.',
      meet: 'Rencontrer Adel',
      focus: [
        { label: 'Domaine', value: 'SaaS et IoT industriel' },
        { label: 'Technologies', value: '.NET, Angular et Azure' },
        { label: 'Approche', value: 'Prise en charge de bout en bout' }
      ]
    },
    about: {
      kicker: 'À propos',
      headingA: 'Un ingénieur senior qui reste',
      headingB: 'avec le problème.',
      lead: "Je suis un ingénieur full-stack à dominante backend avec plus de 6 ans d'expérience dans la création de produits SaaS, d'applications du secteur public et de systèmes appareil-cloud.",
      p2: "Mon quotidien couvre les services .NET, les interfaces Angular, l'infrastructure Azure et le support de production. Chez Evident Industrial, je travaille sur trois microservices AKS et je maintiens les chemins de provisionnement utilisés par plus de 5 000 appareils connectés.",
      p3: "J'aime prendre en charge tout le parcours : comprendre le flux de travail, rédiger l'ADR, construire le changement, le revoir avec l'équipe et rester proche quand il arrive en production.",
      readExp: 'Voir mon expérience',
      stats: [
        { v: '6+', l: 'années de développement logiciel' },
        { v: '5 000+', l: 'appareils provisionnés' },
        { v: '7', l: 'développeurs encadrés' },
        { v: '30%+', l: 'réduction des coûts Azure' }
      ],
      scopeLabel: 'Ce que je fais',
      scope: [
        'Conception de services .NET multi-tenant et d’applications Angular',
        'Création de workflows REST, gRPC, messagerie et tâches de fond',
        'Provisionnement d’appareils industriels avec IoT Hub, DPS et X.509',
        'Définition de l’infrastructure Azure avec Terraform, Helm et Kubernetes',
        'Rédaction d’ADR, revue de code, débogage de production et mentorat'
      ],
      availability: 'Basé à Québec · Travaille en anglais et en français'
    },
    work: {
      kicker: 'Réalisations',
      headingA: 'Des produits conçus',
      headingB: 'pour un usage réel.',
      copy: 'SaaS indépendant, ingénierie de plateforme, livraison d’entreprise et outils open source. Ce sont de vrais produits, pas des études de cas factices.',
      featured: 'En vedette',
      prevAria: 'Projet précédent',
      nextAria: 'Projet suivant',
      goTo: 'Aller à ',
      liveLabel: 'Projet en ligne',
      sourceLabel: 'Code source'
    },
    services: {
      kicker: 'Expertise',
      headingA: 'Ce que je peux bâtir',
      headingB: 'avec votre équipe.',
      copy: 'Choisissez un domaine pour voir le type de problèmes que je peux mener de la direction technique jusqu’au support de production.',
      tabsAria: 'Expertises',
      talkWork: 'Parler de ce travail',
      proofLabel: 'PREUVE DE MON TRAVAIL'
    },
    stack: {
      kicker: 'Pile technologique',
      headingA: 'Les outils avec',
      headingB: 'lesquels je livre.',
      copy: 'Une expertise approfondie en architecture applicative, systèmes frontaux modernes, données, livraison cloud et appareils connectés.',
      certKicker: 'Certifié Microsoft',
      certTitle: 'Azure Developer Associate',
      certSub: 'AZ-204 · Obtenue en 2023'
    },
    experience: {
      kicker: 'Expérience',
      headingA: 'Des années au cœur',
      headingB: 'de systèmes complexes.',
      copy: 'Des backends de places de marché aux applications du secteur public et aux plateformes IoT industrielles.',
      headPresent: 'HEAD · Aujourd’hui',
      headActive: 'Branche de carrière active',
      labKicker: 'En dehors du travail client',
      labTitle: 'Le homelab comme pratique de plateforme.',
      labCopy: 'J’exploite un environnement Proxmox à deux nœuds pour continuer d’apprendre là où le travail de production devient réel : provisionnement, déploiements, supervision, journaux, accès et reprise.',
      labSteps: [
        { b: 'Provisionner', s: 'Pulumi + Ansible' },
        { b: 'Déployer', s: 'Docker Compose + Komodo' },
        { b: 'Superviser', s: 'Grafana + Loki' }
      ],
      labLink: 'Voir le homelab'
    },
    credentials: {
      kicker: 'Diplômes',
      headingA: 'Bâti sur un esprit',
      headingB: 'de systèmes.',
      copy: 'Une formation d’ingénieur formelle, renforcée par la certification cloud et des années de livraison en production.',
      eduKicker: 'Formation',
      eduTitle: 'Diplôme national d’ingénieur',
      eduField: 'Génie des systèmes industriels et de la logistique',
      eduSub: 'ENICarthage · Diplômé en 2020',
      eduLink: 'Voir la formation ↗',
      certKicker: 'Certification',
      certTitle: 'Azure Developer Associate',
      certField: 'Microsoft AZ-204',
      certSub: 'Obtenue en 2023',
      certLink: 'Voir la certification ↗'
    },
    process: {
      kicker: 'Méthode de travail',
      headingA: 'De la clarté, de la première',
      headingB: 'question à la production.',
      copy: 'Une bonne livraison est une boucle, pas un transfert. Je reste proche du problème, du code et de ce qui se passe après la mise en production.',
      steps: [
        { tag: 'Découverte', title: 'Comprendre le vrai flux de travail.', copy: 'Cartographier les personnes, les systèmes, les contraintes et les preuves qui définissent le succès.' },
        { tag: 'Décision', title: 'Rendre les compromis visibles.', copy: 'Documenter les décisions d’architecture et façonner la plus petite version cohérente.' },
        { tag: 'Réalisation', title: 'Construire par tranches révisables.', copy: 'Associer l’implémentation à des tests, de l’observabilité et une communication technique claire.' },
        { tag: 'Exploitation', title: 'Apprendre de la production.', copy: 'Soutenir la version, diagnostiquer les pannes et réinjecter les apprentissages dans le système.' }
      ]
    },
    opensource: {
      kicker: 'Open source',
      headingA: 'Travail public,',
      headingB: 'activité réelle.',
      copy: 'Je publie de petites bibliothèques .NET quand un problème d’ingénierie récurrent mérite une réponse réutilisable. La plupart du travail produit reste privé, mais le côté public est actif et maintenu.',
      viewProfile: 'Voir le profil GitHub',
      snapshot: 'Aperçu public en cache',
      live: 'Profil public en direct',
      contribAriaSuffix: ' contributions GitHub sur la dernière année',
      less: 'Moins',
      more: 'Plus',
      loading: 'Chargement de l’activité de contributions…',
      unavailable: 'L’activité GitHub est indisponible pour le moment.',
      openProfile: 'Ouvrir le profil ↗',
      reposLabel: 'dépôts publics',
      followersLabel: 'abonnés',
      stackLabel: 'pile principale',
      repos: [
        { name: 'Spur', desc: 'Flux Result<T> explicites pour .NET', url: 'https://github.com/AdelSS04/Spur' },
        { name: 'Cosmigrator', desc: 'Migrations Cosmos DB versionnées', url: 'https://github.com/AdelSS04/Cosmigrator' }
      ]
    },
    writing: {
      kicker: 'Blog',
      headingA: 'Des notes tirées',
      headingB: 'de vrais logiciels.',
      allLink: 'Tous les articles',
      featuredTag: 'En vedette · Cloud / DevOps',
      featuredTitle: 'Why I Started Treating My Homelab Like a Small Platform',
      featuredDesc: 'Ce qui a changé quand j’ai cessé de traiter mon infrastructure domestique comme un ensemble de conteneurs pour donner à chaque partie un rôle clair.',
      articles: [
        { tag: 'Cloud / DevOps', title: 'A Privacy-Safe Tour of My Two-Node Homelab', read: '10 min de lecture', url: 'https://blog.adellajil.com/blog/privacy-safe-two-node-homelab-tour/' },
        { tag: 'Observabilité', title: 'Exposing and Securing Loki Log Ingestion', read: '18 min de lecture', url: 'https://blog.adellajil.com/blog/exposing-securing-loki-log-ingestion/' },
        { tag: 'Cloud', title: 'From Cache Miss to Cache Hit with Azure Front Door', read: '13 min de lecture', url: 'https://blog.adellajil.com/blog/azure-frontdoor-cache-warmup/' }
      ],
      featuredRead: '9 min de lecture'
    },
    testimonials: {
      kicker: 'Recommandations',
      headingA: 'Ce que mes collègues',
      headingB: 'disent du travail.',
      copy: 'Des retours directs de personnes qui ont travaillé avec moi sur des équipes logicielles.',
      countLabel: 'Recommandations professionnelles',
      items: [
        { name: 'Mariem Gharsallah', role: 'Consultante en technologie · Accenture', quote: 'Non seulement il est toujours prêt à apprendre une nouvelle compétence, mais il s’investit aussi pour la maîtriser. Il est également très serviable et donne toujours de son temps quand on en a besoin.' },
        { name: 'Arsslen Idadi', role: 'Développeur .NET senior · Architecte logiciel', quote: 'Un ingénieur logiciel travailleur, passionné et déterminé. Je le recommande pour tout travail lié au génie logiciel.' }
      ]
    },
    freelance: {
      kicker: 'Freelance',
      headingA: 'Un site web, un outil,',
      headingB: 'un problème réglé.',
      copy: 'Je crée des sites web et des outils sur mesure pour les petites entreprises du Québec. En français, sans jargon, avec un seul interlocuteur.',
      cards: [
        { title: 'Sites web professionnels', copy: 'Création ou refonte de votre site vitrine : rapide, moderne et bien référencé, pensé pour transformer les visiteurs en clients.', tags: ['Design mobile', 'SEO', 'Formulaires de contact'] },
        { title: 'Outils internes sur mesure', copy: 'Tableaux de bord, automatisations et gestion : des outils pensés pour votre équipe, qui font gagner du temps chaque jour.', tags: ['Tableaux de bord', 'Automatisation', 'Accès par rôle'] },
        { title: 'Applications web', copy: 'Applications robustes en .NET et Angular : espaces clients, réservation en ligne, commandes ou gestion d’inventaire.', tags: ['API', 'Espaces clients', 'Paiements Stripe'] },
        { title: 'Cloud & infrastructure', copy: 'Hébergement, sécurité et sauvegardes sur Azure : une infrastructure fiable qui tourne sans que vous ayez à vous en occuper.', tags: ['Hébergement', 'Sauvegardes', 'Sécurité'] }
      ],
      steps: [
        { tag: 'Appel découverte', title: 'On discute de votre besoin.', copy: 'Sans engagement : on cerne le problème et ce qu’un bon résultat changerait pour vous.' },
        { tag: 'Proposition claire', title: 'Vous savez ce que vous payez.', copy: 'Périmètre, délais et prix fixés par écrit avant de commencer. Pas de surprise.' },
        { tag: 'Réalisation', title: 'On construit par étapes visibles.', copy: 'Vous voyez l’avancement en continu et on ajuste ensemble au besoin.' },
        { tag: 'Suivi', title: 'Je reste disponible après.', copy: 'Mise en ligne, formation rapide et support pour les premiers mois.' }
      ],
      cta: 'Discuter de mon projet',
      note: 'Chaque projet est différent — parlons-en, sans engagement.'
    },
    faq: {
      kicker: 'FAQ',
      headingA: 'Quelques réponses',
      headingB: 'utiles.',
      items: [
        { q: 'Quel type de travail acceptez-vous ?', a: 'Des rôles d’ingénierie logicielle senior et des projets produits impliquant .NET, Angular, Azure, des systèmes SaaS ou des appareils connectés.' },
        { q: 'Travaillez-vous en anglais ou en français ?', a: 'Les deux. Je travaille professionnellement en français et en anglais ; l’arabe est ma langue maternelle.' },
        { q: 'Êtes-vous ouvert à discuter d’un projet ?', a: 'Oui. Partagez votre système actuel, les contraintes techniques et le résultat attendu.' }
      ]
    },
    footer: {
      brandCopy: 'Ingénieur logiciel senior travaillant avec .NET, Angular, Azure et des systèmes d’appareils connectés.',
      navTitle: 'Navigation',
      nav: [
        { id: 'about', label: 'À propos' },
        { id: 'services', label: 'Expertise' },
        { id: 'work', label: 'Réalisations' },
        { id: 'experience', label: 'Expérience' },
        { id: 'writing', label: 'Blog' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' }
      ],
      selTitle: 'Sélection',
      selLinks: [
        { href: '#stack', label: 'Pile technologique' },
        { href: '#credentials', label: 'Diplômes' },
        { href: '#process', label: 'Méthode de travail' },
        { href: '#open-source', label: 'Open source' },
        { href: '#testimonials', label: 'Recommandations' }
      ],
      touchTitle: 'Contactez-moi',
      location: 'Québec, Canada · Heure de l’Est',
      cta: 'Démarrer une conversation',
      rightsSuffix: 'Conçu et construit avec Angular.',
      backTop: 'Haut de page ↑'
    },
    contact: {
      title: 'Discutons',
      subtitle: 'Un projet ou un rôle d’ingénierie en tête ? Parlez-moi de l’équipe, du problème et du besoin.',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      nameError: 'Entrez votre nom (au moins 2 caractères).',
      emailLabel: 'Courriel',
      emailPlaceholder: 'votre@courriel.com',
      emailError: 'Entrez une adresse courriel valide.',
      subjectLabel: 'Objet (optionnel)',
      subjectPlaceholder: 'Par exemple : rôle .NET, projet SaaS ou intégration Azure',
      msgLabel: 'Message',
      msgHint: '(Incluez le contexte, l’échéancier et les contraintes techniques.)',
      msgPlaceholder: 'Décrivez ce que vous construisez ou le rôle à pourvoir. Incluez votre pile technologique actuelle et le soutien recherché.',
      msgError: 'Entrez un message d’au moins 10 caractères.',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      ok: 'Merci. Votre message a été envoyé.',
      fail: 'Votre message n’a pas pu être envoyé. Écrivez à contact@adellajil.com.',
      emailTitle: 'Courriel',
      locationTitle: 'Emplacement',
      tzTitle: 'Fuseau horaire',
      locationValue: 'Québec, Canada',
      tzValue: 'Heure de l’Est'
    },
    education: {
      nav: {
        items: [
          { label: 'Accueil', href: '#home' },
          { label: 'Réalisations', href: '#work' },
          { label: 'Services', href: '#services' },
          { label: 'À propos', href: '#about' },
          { label: 'Contact', href: '#contact' }
        ],
        blog: 'Blog',
        contactLabel: 'Contact'
      },
      footer: {
        rights: 'Tous droits réservés.',
        links: ['Accueil', 'Services', 'Réalisations', 'À propos', 'Formation', 'Contact']
      },
      page: {
        kicker: 'Formation',
        title: 'Formation et certification',
        subtitle: 'Ma formation d’ingénieur et ma qualification Microsoft Azure.',
        studiesLabel: 'Études',
        moreAreas: 'autres domaines d’études',
        achievementsLabel: 'Réalisations',
        keyAchievementsLabel: 'Réalisations clés',
        certSectionTitle: 'Certification Microsoft',
        certSectionSub: 'Azure Developer Associate, obtenue en 2023.',
        items: [
          {
            school: 'National Engineering School of Carthage (ENICarthage)',
            degree: 'Diplôme national d’ingénieur',
            field: 'Génie des systèmes industriels et de la logistique',
            period: 'Diplômé en 2020',
            location: 'Carthage, Tunisie',
            description: ['Études d’ingénierie en systèmes industriels et logistique.']
          }
        ],
        certs: [
          { title: 'Azure Developer Associate (AZ-204)', issuer: 'Microsoft', date: 'Obtenue en 2023', skills: ['Azure', 'Développement d’applications'] }
        ]
      }
    }
  }
};
