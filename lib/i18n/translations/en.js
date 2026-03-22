const en = {
  meta: {
    title: 'Nemanja Nakomčić — Full-Stack Web Developer',
    description:
      'Full-Stack Web Developer specializing in React, Next.js, and scalable web platforms. 5+ years building ERP systems, business applications, and headless CMS architectures.',
    ogTitle: 'Nemanja Nakomčić — Full-Stack Web Developer',
    ogDescription:
      'Full-Stack Developer with 5+ years of experience in React, Next.js, ERP systems, scalable business applications, and headless CMS.',
  },

  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    downloadCV: 'Download CV',
  },

  hero: {
    badge: 'Available for work',
    greeting: "Hi, I'm",
    name: 'Nemanja Nakomčić',
    role: 'Full-Stack Web Developer',
    tagline:
      '5+ years building modern web platforms — from scalable ERP systems and business applications to high-performance frontends and headless CMS architectures.',
    cta: {
      projects: 'View Projects',
      contact: 'Contact Me',
      cv: 'Download CV',
    },
    scrollHint: 'Scroll to explore',
  },

  about: {
    sectionLabel: 'About Me',
    heading: 'Building the web with precision and purpose.',
    bio1: "I'm a Full-Stack Web Developer with 5+ years of experience crafting modern, scalable, and high-performing web solutions. My work spans complex ERP systems and business platforms to frontend-heavy experiences — always with a focus on clean code, accessibility, and measurable outcomes.",
    bio2: "I specialize in React and Next.js ecosystems, scalable business application architecture, and SEO-driven development. I've built everything from complex ERP-like admin platforms and enterprise web systems to lean headless CMS stores and content-rich marketing websites.",
    bio3: 'My approach combines frontend polish with architectural thinking — I build things that work well, look great, and scale without breaking.',
    values: [
      {
        label: 'Frontend Excellence',
        desc: 'Pixel-precise, accessible, performant interfaces.',
      },
      {
        label: 'Scalable Architecture',
        desc: 'Clean, maintainable code that grows with the product.',
      },
      {
        label: 'SEO & Performance Focus',
        desc: 'Every platform I build is optimized to rank and load fast.',
      },
      {
        label: 'Business-Aware Thinking',
        desc: 'Solutions that serve real goals, not just technical specs.',
      },
    ],
  },

  skills: {
    sectionLabel: 'Skills',
    heading: 'Technologies I work with.',
    subheading:
      'A curated stack built through real-world, production-level projects.',
    categories: [
      {
        name: 'Frontend',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Redux Toolkit',
          'HTML5',
          'CSS / SCSS',
          'Tailwind CSS',
        ],
      },
      {
        name: 'Backend',
        skills: [
          'ASP.NET Core',
          'Node.js',
          'PHP',
          'Symfony',
          'GraphQL',
          'REST APIs',
          'WebSockets',
        ],
      },
      {
        name: 'CMS / Platforms',
        skills: [
          'WordPress Headless',
          'Drupal',
          'WooCommerce Headless',
          'Headless CMS Architecture',
        ],
      },
      {
        name: 'Databases / Infra',
        skills: ['PostgreSQL', 'MySQL', 'Redis', 'Algolia'],
      },
      {
        name: 'DevOps / Deployment',
        skills: [
          'Git',
          'GitHub Actions',
          'CI/CD Pipelines',
          'Docker',
          'Kubernetes',
          'AWS',
          'Azure',
          'Vercel',
        ],
      },
      {
        name: 'Quality / Performance',
        skills: [
          'Accessibility (WCAG)',
          'SEO-Oriented Development',
          'Performance Optimization',
          'API Integrations',
          'Stripe',
          'Klarna',
          'Payment Integrations',
        ],
      },
    ],
  },

  experience: {
    sectionLabel: 'Experience',
    heading: "Where I've worked and what I've built.",
    subheading:
      '5+ years at a product-focused agency — working across enterprise, SaaS, fintech, and headless platforms.',
    company: 'Lilly021',
    role: 'Full-Stack Web Developer',
    period: 'Nov 2021 – Present',
    companyDesc:
      'Full-service digital agency delivering web platforms, enterprise applications, and scalable digital products for international clients.',
    projects: [
      {
        name: 'ASIP Prevent',
        type: 'ERP Platform',
        points: [
          'Built user & role management with fine-grained permissions and AI-assisted document generation workflows (Word/PDF) using reusable templates.',
          'Developed an evidence management system integrated with document workflows — enabling automated generation, lifecycle tracking, and structured linking between records, documents, and regulatory processes.',
          'Implemented ticketing, internal task management, and designed scalable system architecture for the ERP platform.',
        ],
        tech: ['React', 'Tailwind CSS', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'Digital Realty',
        type: 'Enterprise Web Platform',
        points: [
          'Integrated Marketo with Next.js for marketing automation and improved data flow between frontend and CMS systems.',
          'Optimized admin workflows for content managers and enhanced platform accessibility to WCAG 2.1 compliance.',
          'Led platform expansion and feature development, maintaining system stability across a high-traffic enterprise web platform.',
        ],
        tech: [
          'Drupal',
          'PHP',
          'Symfony',
          'Next.js',
          'MySQL',
          'Algolia',
          'Marketo',
        ],
      },
      {
        name: 'Managevio',
        type: 'SaaS Frontend',
        points: [
          'Migrated styling from SCSS to Tailwind CSS, improving modularity, scalability, and long-term maintainability.',
          'Replaced MUI library components with custom-built React components, improving UI consistency and flexibility.',
          'Led frontend refactoring and performance optimization, reducing load times and improving overall user experience.',
        ],
        tech: ['React', 'Tailwind CSS', 'JavaScript'],
      },
      {
        name: 'Dealio',
        type: 'Cross-Platform App',
        points: [
          'Built responsive UI with Next.js, improving user experience and cross-device performance.',
          'Set up Detox testing environment for React Native e2e testing and implemented end-to-end test suites ensuring platform reliability.',
          'Improved accessibility through form labeling, focus management, and performance optimization across the codebase.',
        ],
        tech: ['Next.js', 'React Native', 'Detox', 'JavaScript'],
      },
      {
        name: 'BlockControl',
        type: 'Web Application',
        points: [
          'Led development of an E-wallet application — designed full architecture, state management with Redux Toolkit, and real-time transaction updates via WebSockets.',
          'Integrated multiple payment systems: Stripe, Klarna, Direct Bank Transfer, and QR Code payments — covering API integration, webhook handling, and custom checkout flows.',
          'Built a Next.js SSR app with SEO focus, React backoffice admin, and contributed to React Native Expo mobile app; implemented Twilio SMS/notification features.',
          'Extended and maintained Express.js backend APIs; implemented accessible React components meeting WCAG guidelines.',
        ],
        tech: [
          'React',
          'Next.js',
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'Redis',
          'React Native',
          'Redux Toolkit',
          'WebSockets',
          'Stripe',
          'Twilio',
          'Docker',
        ],
      },
      {
        name: 'Digital Realty — Phase I',
        type: 'Enterprise Web Platform',
        points: [
          'Developed and maintained a large-scale Drupal CMS platform for enterprise content management across global data center and colocation services (formerly Interxion).',
          'Integrated Algolia search, built reusable UI components from early project stages, and developed scalable Next.js frontend features with WCAG 2.1 accessibility compliance.',
          'Built an interactive map using Google Maps API to visualize global data center locations and associated services.',
          'Collaborated in an Agile/Scrum environment across sprint planning, reviews, and iterative feature delivery.',
        ],
        tech: [
          'Drupal',
          'PHP',
          'Symfony',
          'Next.js',
          'MySQL',
          'Algolia',
          'Google Maps API',
        ],
      },
      {
        name: 'FakeInterview',
        type: 'Interview Simulation Platform',
        points: [
          'Designed and built the full-stack application from scratch — defined project architecture, data flow, and core business logic with an ASP.NET Core backend.',
          'Developed Next.js frontend with responsive UI and designed PostgreSQL database structure for scalable data management.',
          'Implemented interview simulation features including scenario libraries, question flows, and user interaction logic.',
        ],
        tech: [
          'React',
          'Next.js',
          'ASP.NET Core',
          'PostgreSQL',
          'Redis',
          'Docker',
        ],
      },
      {
        name: 'Managevio — Phase I',
        type: 'SaaS ERP Platform',
        points: [
          'Contributed to a full-featured SaaS ERP system covering Finance, HR, Asset Management, Project Management, Document Management, and CRM within a microservice-oriented architecture.',
          'Worked on frontend (React) and backend (ASP.NET Core) features; built and integrated APIs using GraphQL and gRPC for inter-service communication.',
          'Used Elasticsearch for search and filtering across modules; monitored systems with Kubernetes, Grafana, Loki, and Sentry in a Dockerized environment.',
        ],
        tech: [
          'ASP.NET Core',
          'gRPC',
          'GraphQL',
          'PostgreSQL',
          'Docker',
          'Kubernetes',
          'React',
          'Elasticsearch',
          'Grafana',
        ],
      },
    ],
    notableProjects: 'Notable Projects',
  },

  projects: {
    sectionLabel: 'Projects',
    heading: 'Selected work.',
    subheading:
      'Real production websites built with headless architecture and modern frontend.',
    viewProject: 'View Project',
    items: [
      {
        id: 'digitalrealty',
        name: 'digitalrealty.com',
        type: 'Enterprise Web Platform',
        desc: 'Large-scale enterprise platform for a global data center company. Expanded platform features, implemented Marketo marketing integrations, improved Drupal admin workflows, and raised accessibility standards across multiple areas.',
        url: 'https://www.digitalrealty.com',
        tech: ['Next.js', 'Drupal', 'PHP', 'Symfony', 'MySQL', 'Algolia'],
        angle: 'Enterprise Platform',
      },
      {
        id: 'vasovic',
        name: 'vasovic.com',
        type: 'Headless Content Site',
        desc: 'Content-driven website with a clean, headless WordPress backend and a performant Next.js frontend. Focused on strong presentation, SEO, and editorial flexibility.',
        url: 'https://vasovic.com',
        tech: ['Next.js 16', 'WordPress Headless', 'REST API'],
        angle: 'Content Platform',
      },
      {
        id: 'aviani',
        name: 'aviani.se',
        type: 'Headless E-Commerce',
        desc: 'Full headless e-commerce implementation combining WooCommerce data with a custom Next.js storefront. Built for speed, scalability, and a modern shopping experience.',
        url: 'https://new.aviani.se',
        tech: ['Next.js 16', 'WordPress Headless', 'WooCommerce', 'REST API'],
        angle: 'Headless E-Commerce',
      },
      {
        id: 'genny',
        name: 'genny.rs',
        type: 'Headless Showroom Site',
        desc: 'Showroom website for a ceramics retailer featuring elegant collection displays and a built-in inquiry form. Built on a headless WordPress backend with a Next.js frontend and Tailwind CSS — fast, clean, and easy to manage.',
        url: 'https://genny.rs',
        tech: ['Next.js', 'WordPress Headless', 'Tailwind CSS'],
        angle: 'Headless Showroom',
      },
      {
        id: 'soca',
        name: 'soca.rs',
        type: 'E-Commerce & Service Platform',
        desc: 'Platform for a home appliance shop and service center in Novi Sad. Features product listing and search across a large database, order submission, product inquiries, and fault reporting — all in one place. SEO-optimized and built for performance.',
        url: 'https://soca.rs',
        tech: ['Next.js', 'Express.js'],
        angle: 'E-Commerce Platform',
      },
    ],
  },

  whyme: {
    sectionLabel: 'Why Work With Me',
    heading: 'What you get when we work together.',
    subheading:
      'Not just code — a complete, considered approach to building products that work.',
    items: [
      {
        title: 'Frontend that looks and performs.',
        desc: 'I build interfaces with precision — responsive, accessible, smooth. Every interaction is intentional, every pixel earns its place.',
      },
      {
        title: 'SEO built into the foundation.',
        desc: 'Performance, semantic HTML, structured data, and crawlability are part of every build, not an afterthought.',
      },
      {
        title: 'Architecture that scales.',
        desc: 'Clean component structure, thoughtful data flow, and maintainable patterns — built to grow without crumbling.',
      },
      {
        title: 'Headless CMS expertise.',
        desc: 'Deep experience with WordPress Headless, Drupal, and WooCommerce Headless — decoupled architectures that give editors freedom and developers control.',
      },
      {
        title: 'Full-stack capability.',
        desc: 'From complex admin panels and ERP-like platforms to API integrations and database design — I handle both sides of the stack.',
      },
      {
        title: 'Code quality that lasts.',
        desc: 'Readable, refactorable, and documented. Code you can hand off, scale, or return to six months later without confusion.',
      },
    ],
  },

  contact: {
    sectionLabel: 'Contact',
    heading: "Let's work together.",
    subheading:
      "Open to remote roles, freelance projects, and interesting collaborations. If you're building something serious, I'd like to hear about it.",
    email: 'pakisakac@gmail.com',
    emailLabel: 'Email',
    linkedIn: 'LinkedIn',
    gitHub: 'GitHub',
    upWork: 'Upwork',
    cta: 'Send me a message',
    availability: 'Currently available for new opportunities.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject (optional)',
      subjectPlaceholder: "What's it about?",
      message: 'Message',
      messagePlaceholder: 'Tell me about your project or idea...',
      submit: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successDesc: "Thanks for reaching out — I'll get back to you soon.",
      sendAnother: 'Send another message',
      error: 'Something went wrong. Please try again or email me directly.',
    },
  },

  notFound: {
    code: '404',
    heading: 'Page not found.',
    subheading: "The page you're looking for doesn't exist or has been moved.",
    cta: 'Back to Home',
  },

  error: {
    code: '500',
    heading: 'Something went wrong.',
    subheading: 'An unexpected error occurred on our end. Please try again.',
    retry: 'Try again',
    cta: 'Back to Home',
  },

  footer: {
    copy: 'Built with Next.js. Designed and developed by Nemanja Nakomčić.',
    rights: 'All rights reserved.',
  },
};

export default en;
