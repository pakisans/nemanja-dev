const sr = {
  meta: {
    title: 'Nemanja Nakomčić — Full-Stack Web Developer',
    description:
      'Full-Stack Web Developer specijalizovan za React, Next.js i skalabilne web platforme. 6+ godina iskustva u izgradnji ERP sistema, poslovnih aplikacija i headless CMS arhitektura.',
    ogTitle: 'Nemanja Nakomčić — Full-Stack Web Developer',
    ogDescription:
      'Full-Stack Developer sa 6+ godina iskustva u React-u, Next.js-u, ERP sistemima, skalabilnim poslovnim aplikacijama i headless CMS-u.',
  },

  nav: {
    about: 'O meni',
    skills: 'Veštine',
    experience: 'Iskustvo',
    projects: 'Projekti',
    contact: 'Kontakt',
    downloadCV: 'Preuzmi CV',
  },

  hero: {
    badge: 'Dostupan za rad',
    greeting: 'Zdravo, ja sam',
    name: 'Nemanja Nakomčić',
    role: 'Full-Stack Web Developer',
    tagline:
      'Više od 5 godina izgradnje modernih web platformi — od skalabilnih ERP sistema i poslovnih aplikacija do visoko-performansnih frontenda i headless CMS arhitektura.',
    cta: {
      projects: 'Pogledaj projekte',
      contact: 'Kontaktiraj me',
      cv: 'Preuzmi CV',
    },
    scrollHint: 'Skroluj za više',
  },

  about: {
    sectionLabel: 'O meni',
    heading: 'Gradim web sa preciznošću i svrhom.',
    bio1: 'Full-Stack Web Developer sa više od 5 godina iskustva u kreiranju modernih, skalabilnih i visoko-performansnih web rešenja. Moj rad obuhvata frontend-orijentisane platforme i solidne backend integracije — uvek sa fokusom na čist kod, pristupačnost i merljive rezultate.',
    bio2: 'Specijalizujem se za React i Next.js ekosistem, arhitekturu skalabilnih poslovnih aplikacija i SEO-orijentisani razvoj. Gradio sam sve — od složenih ERP-nalik admin platformi i enterprise web sistema do headless CMS prodavnica i content-bogatih marketing vebsajtova.',
    bio3: 'Moj pristup kombinuje frontend preciznost sa arhitektonskim razmišljanjem — gradim stvari koje dobro funkcionišu, lepo izgledaju i skaliraju bez pada.',
    values: [
      {
        label: 'Frontend izvrsnost',
        desc: 'Precizni, pristupačni i performansni interfejsi.',
      },
      {
        label: 'Skalabilna arhitektura',
        desc: 'Čist, održiv kod koji raste zajedno s projektom.',
      },
      {
        label: 'SEO i performanse',
        desc: 'Svaka platforma je optimizovana za rangiranje i brzo učitavanje.',
      },
      {
        label: 'Poslovno razmišljanje',
        desc: 'Rešenja koja služe stvarnim ciljevima, ne samo tehničkim specifikacijama.',
      },
    ],
  },

  skills: {
    sectionLabel: 'Veštine',
    heading: 'Tehnologije s kojima radim.',
    subheading: 'Stack izgrađen kroz realne, produkcione projekte.',
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
          'REST API',
          'WebSockets',
        ],
      },
      {
        name: 'CMS / Platforme',
        skills: [
          'WordPress Headless',
          'Drupal',
          'WooCommerce Headless',
          'Headless CMS Arhitektura',
        ],
      },
      {
        name: 'Baze / Infrastruktura',
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
        name: 'Kvalitet / Performanse',
        skills: [
          'Pristupačnost (WCAG)',
          'SEO-orijentisani razvoj',
          'Optimizacija performansi',
          'API Integracije',
          'Stripe',
          'Klarna',
          'Payment Integracije',
        ],
      },
    ],
  },

  experience: {
    sectionLabel: 'Iskustvo',
    heading: 'Gde sam radio i šta sam izgradio.',
    subheading:
      '5+ godina u product-fokusiranoj agenciji — rad na enterprise, SaaS, fintech i headless platformama.',
    company: 'Lilly021',
    role: 'Full-Stack Web Developer',
    period: 'Nov 2021. – Trenutno',
    companyDesc:
      'Full-service digitalna agencija koja isporučuje web platforme, enterprise aplikacije i skalabilne digitalne proizvode za međunarodne klijente.',
    projects: [
      {
        name: 'ASIP Prevent',
        type: 'ERP Platforma',
        points: [
          'Izgradio upravljanje korisnicima i rolama sa preciznim dozvolama i AI-podržane tokove generacije dokumenata (Word/PDF) koristeći višekratne šablone.',
          'Razvio sistem evidencije integrisan sa tokovima dokumenata — omogućavajući automatizovanu generaciju, praćenje životnog ciklusa i strukturisano povezivanje između zapisa, dokumenata i regulatornih procesa.',
          'Implementirao tiketing, interne sisteme za upravljanje zadacima i dizajnirao skalabilnu sistemsku arhitekturu ERP platforme.',
        ],
        tech: ['React', 'Tailwind CSS', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'Digital Realty',
        type: 'Enterprise Web Platforma',
        points: [
          'Integrisao Marketo sa Next.js za marketing automatizaciju i poboljšao tok podataka između frontenda i CMS sistema.',
          'Optimizovao admin tokove rada za menadžere sadržaja i unapredio pristupačnost platforme na WCAG 2.1 nivo.',
          'Vodio proširenje platforme i razvoj funkcionalnosti, održavajući stabilnost sistema visoko-prometne enterprise web platforme.',
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
          'Migrirao stilizaciju sa SCSS na Tailwind CSS, poboljšavajući modularnost, skalabilnost i dugoročnu održivost.',
          'Zamenio MUI library komponente custom React komponentama, poboljšavajući konzistentnost i fleksibilnost UI-ja.',
          'Vodio frontend refaktoring i optimizaciju performansi — smanjio load time i poboljšao korisničko iskustvo.',
        ],
        tech: ['React', 'Tailwind CSS', 'JavaScript'],
      },
      {
        name: 'Dealio',
        type: 'Cross-Platform App',
        points: [
          'Izgradio responzivni UI sa Next.js, poboljšavajući korisničko iskustvo i performanse na svim uređajima.',
          'Postavio Detox okruženje za React Native e2e testiranje i implementirao end-to-end testove koji osiguravaju pouzdanost platforme.',
          'Poboljšao pristupačnost kroz pravilno labelovanje formi, upravljanje fokusom i optimizaciju performansi koda.',
        ],
        tech: ['Next.js', 'React Native', 'Detox', 'JavaScript'],
      },
      {
        name: 'BlockControl',
        type: 'Web Aplikacija',
        points: [
          'Vodio razvoj E-wallet aplikacije — dizajnirao punu arhitekturu, state management sa Redux Toolkit-om i real-time ažuriranja transakcija putem WebSocket-a.',
          'Integrisao više platnih sistema: Stripe, Klarna, direktni bankarski transfer i QR Code plaćanja — API integracija, webhook handling i custom checkout tokovi.',
          'Izgradio Next.js SSR aplikaciju sa SEO fokusom, React backoffice admin i doprinosio React Native Expo mobilnoj aplikaciji; implementirao Twilio SMS/notifikacione funkcije.',
          'Proširivao i održavao Express.js backend API-je; implementirao pristupačne React komponente u skladu sa WCAG smernicama.',
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
        name: 'Digital Realty — Faza I',
        type: 'Enterprise Web Platforma',
        points: [
          'Razvijao i održavao veliki Drupal CMS za enterprise upravljanje sadržajem za globalnog provajdera data centara i colocation usluga (ranije Interxion).',
          'Integrisao Algolia pretragu, izgradio višekratne UI komponente od ranih faza projekta i razvio skalabilne Next.js frontend funkcionalnosti sa WCAG 2.1 pristupačnošću.',
          'Izgradio interaktivnu mapu koristeći Google Maps API za vizualizaciju globalnih lokacija data centara i povezanih usluga.',
          'Sarađivao u Agile/Scrum okruženju — sprint planiranje, review-i i iterativna isporuka funkcionalnosti.',
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
        type: 'Platforma za simulaciju intervjua',
        points: [
          'Dizajnirao i izgradio full-stack aplikaciju od nule — definisao arhitekturu projekta, tok podataka i ključnu poslovnu logiku sa ASP.NET Core backendom.',
          'Razvio Next.js frontend sa responzivnim UI-jem i dizajnirao PostgreSQL strukturu baze podataka za skalabilno upravljanje podacima.',
          'Implementirao funkcionalnosti simulacije intervjua: biblioteke scenarija, tokove pitanja i logiku interakcije korisnika.',
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
        name: 'Managevio — Faza I',
        type: 'SaaS ERP Platforma',
        points: [
          'Doprinosio razvoju SaaS ERP sistema koji pokriva finansije, HR, upravljanje imovinom, projektima, dokumentima i CRM unutar mikroservisno orijentisane arhitekture.',
          'Radio na frontend (React) i backend (ASP.NET Core) funkcionalnostima; izgradio i integrisao API-je koristeći GraphQL i gRPC za međuservisnu komunikaciju.',
          'Koristio Elasticsearch za pretragu i filtriranje; nadgledao sisteme sa Kubernetes-om, Grafana-om, Loki-jem i Sentry-jem u Dockerizovanom okruženju.',
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
    notableProjects: 'Istaknuti projekti',
  },

  projects: {
    sectionLabel: 'Projekti',
    heading: 'Odabrani radovi.',
    subheading:
      'Realni produkcioni vebsajtovi izgrađeni headless arhitekturom i modernim frontendom.',
    viewProject: 'Pogledaj projekat',
    items: [
      {
        id: 'digitalrealty',
        name: 'digitalrealty.com',
        type: 'Enterprise Web Platforma',
        desc: 'Platforma velikog obima za globalnu kompaniju u oblasti data centara. Proširivanje funkcionalnosti, integracija Marketo marketing alata, poboljšanje Drupal admin tokova rada i podizanje standarda pristupačnosti.',
        url: 'https://www.digitalrealty.com',
        tech: ['Next.js', 'Drupal', 'PHP', 'Symfony', 'MySQL', 'Algolia'],
        angle: 'Enterprise Platforma',
      },

      {
        id: 'vasovic',
        name: 'vasovic.com',
        type: 'Headless Content Sajt',
        desc: 'Content-driven vebsajt sa čistim headless WordPress backendom i performansnim Next.js frontendom. Fokus na jakoj prezentaciji, SEO-u i uređivačkoj fleksibilnosti.',
        url: 'https://vasovic.com',
        tech: ['Next.js 16', 'WordPress Headless', 'REST API'],
        angle: 'Content Platforma',
      },
      {
        id: 'aviani',
        name: 'aviani.se',
        type: 'Headless E-Commerce',
        desc: 'Kompletna headless e-commerce implementacija koja kombinuje WooCommerce podatke sa custom Next.js storefrontom. Izgrađena za brzinu, skalabilnost i moderno iskustvo kupovine.',
        url: 'https://aviani.se',
        tech: ['Next.js 16', 'WordPress Headless', 'WooCommerce', 'REST API'],
        angle: 'Headless E-Commerce',
      },
      {
        id: 'genny',
        name: 'genny.rs',
        type: 'Headless Showroom Sajt',
        desc: 'Showroom sajt za trgovca keramikom sa elegantnim prikazom kolekcija i mogućnošću slanja upita direktno sa sajta. Izgrađen na headless WordPress arhitekturi sa Next.js frontendom i Tailwind CSS-om — brz, pregledan i lak za upravljanje sadržajem.',
        url: 'https://genny.rs',
        tech: ['Next.js', 'WordPress Headless', 'Tailwind CSS'],
        angle: 'Headless Showroom',
      },
      {
        id: 'soca',
        name: 'soca.rs',
        type: 'E-Commerce & Servis Platforma',
        desc: 'Platforma za novosadsku radnju i servis bele tehnike. Obuhvata izlistavanje i pretragu proizvoda iz velike baze, slanje porudžbina, upite o proizvodima i prijavu kvarova — sve u jednom mestu. SEO optimizovana i izgrađena za performanse.',
        url: 'https://soca.rs',
        tech: ['Next.js', 'Express.js'],
        angle: 'E-Commerce Platforma',
      },
    ],
  },

  whyme: {
    sectionLabel: 'Zašto ja',
    heading: 'Šta dobijate kada radimo zajedno.',
    subheading:
      'Ne samo kod — kompletan, promišljen pristup izgradnji proizvoda koji funkcionišu.',
    items: [
      {
        title: 'Frontend koji izgleda i performira.',
        desc: 'Gradim interfejse s preciznošću — responzivne, pristupačne, glatke. Svaka interakcija je namerna, svaki piksel je opravdan.',
      },
      {
        title: 'SEO ugrađen od temelja.',
        desc: 'Performanse, semantički HTML, strukturirani podaci i crawlability su deo svakog projekta, ne naknadna misao.',
      },
      {
        title: 'Arhitektura koja skalira.',
        desc: 'Čista komponentna struktura, promišljeni tok podataka i održivi obrasci — izgrađeni da rastu bez pada.',
      },
      {
        title: 'Ekspertiza u Headless CMS-u.',
        desc: 'Duboko iskustvo sa WordPress Headless, Drupal i WooCommerce Headless — decoupled arhitekture koje daju slobodu urednicima i kontrolu developerima.',
      },
      {
        title: 'Full-stack sposobnosti.',
        desc: 'Od složenih admin panela i ERP-nalik platformi do API integracija i dizajna baza podataka — bavim se oba dela stack-a.',
      },
      {
        title: 'Kvalitet koda koji traje.',
        desc: 'Čitljiv, refaktorabilni i dokumentovan kod. Kod koji možete predati, skalirati ili se vratiti njemu 6 meseci kasnije bez konfuzije.',
      },
    ],
  },

  contact: {
    sectionLabel: 'Kontakt',
    heading: 'Hajde da radimo zajedno.',
    subheading:
      'Otvoren za remote pozicije, freelance projekte i zanimljive saradnje. Ako gradite nešto ozbiljno, voleo bih da čujem o tome.',
    email: 'pakisakac@gmail.com',
    emailLabel: 'Email',
    linkedIn: 'LinkedIn',
    gitHub: 'GitHub',
    upWork: 'Upwork',
    cta: 'Pošalji poruku',
    availability: 'Trenutno dostupan za nove prilike.',
    form: {
      name: 'Ime',
      namePlaceholder: 'Vaše ime',
      email: 'Email',
      emailPlaceholder: 'vas@email.com',
      subject: 'Tema (opciono)',
      subjectPlaceholder: 'O čemu se radi?',
      message: 'Poruka',
      messagePlaceholder: 'Recite mi o svom projektu ili ideji...',
      submit: 'Pošalji poruku',
      sending: 'Slanje...',
      successTitle: 'Poruka poslata!',
      successDesc: 'Hvala na javljanju — vratiću se uskoro.',
      sendAnother: 'Pošalji još jednu poruku',
      error:
        'Nešto je pošlo naopako. Pokušajte ponovo ili me kontaktirajte direktno.',
    },
  },

  notFound: {
    code: '404',
    heading: 'Stranica nije pronađena.',
    subheading: 'Stranica koju tražite ne postoji ili je premještena.',
    cta: 'Nazad na početnu',
  },

  error: {
    code: '500',
    heading: 'Nešto je pošlo naopako.',
    subheading: 'Došlo je do neočekivane greške. Molimo pokušajte ponovo.',
    retry: 'Pokušaj ponovo',
    cta: 'Nazad na početnu',
  },

  footer: {
    copy: 'Izgrađeno u Next.js-u. Dizajn i razvoj: Nemanja Nakomčić.',
    rights: 'Sva prava zadržana.',
  },
};

export default sr;
