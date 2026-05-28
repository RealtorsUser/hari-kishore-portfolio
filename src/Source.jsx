import React from 'react';

const skills = [
  'Java',
  'Spring Boot',
  'Microservices Architecture',
  'RESTful APIs',
  'ReactJS',
  'Hibernate',
  'MySQL',
  'NoSQL',
  'Spring Data JPA',
  'SQL Optimization',
  'System Design',
  'API Gateway',
  'JWT Authentication',
  'Enterprise Application Development',
  'Distributed Systems',
  'Git & GitHub',
  'Postman',
  'JIRA',
  'Agile Methodology',
  'Frontend Development',
  'Backend Development',
  'Cloud Ready Applications',
  'AWS',
  'Google Cloud Platform (GCP)',
  'Docker',
  'Kubernetes',
  'CI/CD Pipelines',
  'JUnit',
  'Selenium',
  'Linux',
  'Maven',
  'Tomcat',
  'Log4j',
  'Tender Management Systems',
  'BOQ Preparation',
  'Cost Estimation',
  'E-Procurement Portals',
  'MS Excel Advanced AI Tools',
  'MS Project',
  'AutoCAD Basics',
  'Vendor Management',
  'Digital Signature Certificate (DSC)',
  'Project Coordination',
  'Full Stack Development',
];

const projects = [
  {
    title: 'DailyTender',
    description:
      'Smart tender tracking and management platform for monitoring government tenders, bid participation, document tracking, tender status updates, and infrastructure project workflows.',
    tech: ['ReactJS', 'Spring Boot', 'MySQL', 'REST APIs'],
    symbol: '◈',
    route: '/projects/dailytender',
    features: [
      'Tender Management',
      'Document Uploads',
      'Bid Tracking',
      'Dashboard Analytics',
    ],
  },
  {
    title: 'EstimateforInfra',
    description:
      'Advanced infrastructure estimation platform for Civil, Irrigation, Electrical, WTP, STP, Drainage, Reservoir, and Canal works with automated quantity calculations and reporting.',
    tech: ['ReactJS', 'Spring Boot', 'SQL', 'Microservices'],
    symbol: '⬢',
    route: '/projects/estimateforinfra',
    features: [
      'BOQ Generation',
      'Quantity Calculations',
      'Cost Estimation',
      'Infrastructure Analytics',
    ],
  },
  {
    title: 'Realstor',
    description:
      'Modern real estate marketplace platform for property sales, listings, customer management, virtual property showcasing, and real-time property search.',
    tech: ['ReactJS', 'Spring Boot', 'MySQL', 'JWT'],
    symbol: '◆',
    route: '/projects/realstor',
    features: [
      'Property Listings',
      'Search Filters',
      'Property Management',
      'Customer Inquiry System',
    ],
  },
];

const experience = [
  {
    company: 'BVSR Constructions Pvt. Ltd.',
    role: 'Engineer - Tenders',
    domain: 'Tendering & Estimation',
    details:
      'Managing end-to-end tender lifecycle including tender identification, BOQ analysis, bid preparation, compliance verification, documentation management, e-procurement submissions, and coordination for infrastructure projects.',
  },
  {
    company: 'Sonata Software Limited',
    role: 'Software Engineer',
    domain: 'Enterprise Software Development',
    details:
      'Designed and developed enterprise-grade Java applications using Spring Boot, Microservices, REST APIs, SQL optimization, CI/CD pipelines, and Agile methodologies.',
  },
  {
    company: 'Bluestem (USA)',
    role: 'Software Engineer',
    domain: 'E-Commerce Platform',
    details:
      'Developed checkout and payment processing modules, collaborated with onsite US teams, resolved Jira tickets, and improved application performance for enterprise e-commerce systems.',
  },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
            HKR.
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-all duration-300">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-all duration-300">
            Skills
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-all duration-300">
            Experience
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-all duration-300">
            Projects
          </a>
          <a href="#education" className="hover:text-cyan-400 transition-all duration-300">
            Education
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-all duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available For Software Engineering Opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tight">
            Hari
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
              Kishore
            </span>
            Reddy
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-slate-400">Current Role</p>
              <h3 className="font-bold text-cyan-300">Engineer - Tenders</h3>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-slate-400">Specialization</p>
              <h3 className="font-bold text-cyan-300">Java Full Stack</h3>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-slate-400">Location</p>
              <h3 className="font-bold text-cyan-300">Hyderabad, India</h3>
            </div>
          </div>

          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mb-10">
            Results-driven Software Engineer and Tendering & Estimation Engineer
            with expertise in enterprise applications, microservices architecture,
            REST APIs, infrastructure estimation systems, tender management,
            BOQ preparation, and scalable full-stack development using Java,
            Spring Boot, ReactJS, SQL, and cloud technologies.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20 font-semibold"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[380px] h-[380px] rounded-[40px] bg-gradient-to-br from-slate-900 to-black border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_55%)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-52 h-52 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 flex items-center justify-center text-8xl font-black shadow-[0_0_60px_rgba(6,182,212,0.45)]">
                HK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-black text-white py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-black leading-tight mb-8">
            Building Modern Enterprise Solutions
          </h2>
        </div>

        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
            Experienced Software Engineer and Tendering Engineer with strong
            expertise in Java, Spring Boot, Microservices, REST APIs,
            ReactJS, Hibernate, SQL, cloud-ready applications, and
            enterprise-grade software development.
          </p>

          <p>
            Experienced in handling enterprise travel systems, e-commerce
            applications, digital API platforms, infrastructure estimation,
            e-procurement systems, BOQ preparation, tender lifecycle management,
            vendor coordination, and scalable backend architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certifications = [
    'Java Full Stack Developer',
    'AWS Certified Developer – Associate',
    'Google Cloud Certified – Associate Cloud Engineer',
  ];

  return (
    <section className="bg-black text-white py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Certifications
          </p>

          <h2 className="text-5xl font-black">Professional Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                ✓
              </div>

              <h3 className="text-2xl font-bold leading-relaxed">
                {cert}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const education = [
    {
      degree: 'B.Tech – Electrical and Electronics Engineering',
      college: 'Rajeev Gandhi Memorial College of Engineering and Technology',
      year: '2017 – 2020',
    },
    {
      degree: 'Diploma – Electrical and Electronics Engineering',
      college: 'Sree Venkateswara Government Polytechnic College',
      year: '2013 – 2017',
    },
  ];

  return (
    <section id="education" className="bg-[#020617] text-white py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Education
          </p>

          <h2 className="text-5xl font-black">Academic Background</h2>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.degree}</h3>
                  <p className="text-slate-400 text-lg">{item.college}</p>
                </div>

                <span className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium w-fit">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#020617] text-white py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-black">Technical Expertise</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:text-cyan-300 transition-all duration-300">
                  {skill}
                </h3>

                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-black">Career Journey</h2>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.company}
              className="group rounded-[36px] p-8 border border-white/10 bg-white/[0.03] hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{item.role}</h3>
                  <p className="text-cyan-400 text-lg">{item.company}</p>
                  <p className="text-slate-400 mt-4 max-w-3xl leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div>
                  <span className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium">
                    {item.domain}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#020617] text-white py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-black">Featured Projects</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-[36px] overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black p-8 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />

              <div className="text-5xl text-cyan-400 mb-8">
                {project.symbol}
              </div>

              <h3 className="text-3xl font-bold mb-6 leading-tight">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-10">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.route}
                className="inline-flex items-center gap-3 text-cyan-400 font-semibold group-hover:gap-5 transition-all duration-300"
              >
                View Full Case Study
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black text-white py-28 px-6 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-6xl font-black mb-8 leading-tight">
            Let’s Build Something Great Together
          </h2>

          <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl">
            Open for Software Engineering, Tendering & Estimation,
            Enterprise Application Development, Infrastructure Technology
            Solutions, and innovative collaborations.
          </p>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-slate-400 text-sm mb-2">Email</p>
              <a
                href="mailto:realtorstest@gmail.com"
                className="text-2xl font-bold text-cyan-300 hover:text-cyan-400 transition-all"
              >
                realtorstest@gmail.com
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-slate-400 text-sm mb-2">Phone</p>
              <a
                href="tel:+918971805618"
                className="text-2xl font-bold text-cyan-300 hover:text-cyan-400 transition-all"
              >
                +91 8971805618
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-slate-400 text-sm mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/hari-kishore-reddy-mekala-714764284"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-cyan-300 hover:text-cyan-400 transition-all break-all"
              >
                www.linkedin.com/in/hari-kishore-reddy-mekala-714764284
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 lg:p-10 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3">Send Me a Message</h3>
            <p className="text-slate-400 leading-relaxed">
              Have a project idea, job opportunity, or collaboration proposal?
              Send your details and message directly.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-400 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project / Job Opportunity"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-3">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-cyan-400 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 font-bold text-lg shadow-2xl shadow-cyan-500/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
