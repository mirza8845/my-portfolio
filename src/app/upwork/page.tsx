"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaReact,
  FaJs,
  FaGithub,
  FaDatabase,
  FaDesktop,
  FaServer,
  FaLayerGroup,
  FaCubes,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiJsonwebtokens,
  SiPassport,
  SiAntdesign,
  SiMongodb,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [currentYear, setCurrentYear] = useState(2023);

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about"];

      const currentPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          currentPosition >= offsetTop &&
          currentPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }

      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-black"></div>;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className={scrolled ? "scrolled" : ""}>
        <nav
          className={`flex justify-between items-center ${
            mobileMenuOpen ? "expanded" : ""
          }`}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            Hamza Anwar
          </motion.h1>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {["Home", "Skills", "Projects", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-white/80 hover:text-white transition-all text-sm font-medium ${
                  activeSection === item.toLowerCase()
                    ? "active text-white"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md mobile-menu"
            >
              <div className="py-3 px-6 flex flex-col space-y-1">
                {["Home", "Skills", "Projects", "About"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`text-white/80 hover:text-white transition-all text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 ${
                        activeSection === item.toLowerCase()
                          ? "active text-white bg-white/10"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Hamza Anwar
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/80">
              Full Stack Developer | React, Next.js, NestJS
            </h2>
            <p className="text-white/70 mb-10 max-w-xl">
              I&apos;m a full-stack developer skilled in React, Next.js, and NestJS.
              I build fast, clean, and functional web applications.
            </p>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transform transition-all shadow-lg hover:shadow-xl w-fit"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white/90">
                Frontend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  {
                    icon: <FaReact className="text-blue-400" />,
                    name: "React.js",
                    level: 90,
                  },
                  {
                    icon: <SiNextdotjs className="text-white" />,
                    name: "Next.js",
                    level: 85,
                  },
                  {
                    icon: <FaJs className="text-yellow-400" />,
                    name: "JavaScript (ES6+)",
                    level: 90,
                  },
                  {
                    icon: <SiTailwindcss className="text-cyan-400" />,
                    name: "Tailwind CSS",
                    level: 95,
                  },
                  {
                    icon: <SiTypescript className="text-blue-500" />,
                    name: "TypeScript",
                    level: 80,
                  },
                  {
                    icon: <FaLayerGroup className="text-teal-400" />,
                    name: "Zustand",
                    level: 80,
                  },
                  {
                    icon: <FaCubes className="text-purple-500" />,
                    name: "MobX",
                    level: 75,
                  },
                  {
                    icon: <SiAntdesign className="text-red-500" />,
                    name: "Ant Design",
                    level: 85,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white/90">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  {
                    icon: <SiNextdotjs className="text-red-400" />,
                    name: "NestJS",
                    level: 85,
                  },
                  {
                    icon: <FaJs className="text-green-400" />,
                    name: "Node.js",
                    level: 88,
                  },
                  {
                    icon: <SiMongodb className="text-green-500" />,
                    name: "MongoDB",
                    level: 80,
                  },
                  {
                    icon: <FaDatabase className="text-blue-400" />,
                    name: "MySQL",
                    level: 75,
                  },
                  {
                    icon: <FaServer className="text-gray-300" />,
                    name: "REST APIs",
                    level: 90,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white/90">Other</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  {
                    icon: <FaGithub className="text-white" />,
                    name: "Git & GitHub",
                    level: 90,
                  },
                  {
                    icon: <FaDesktop className="text-blue-400" />,
                    name: "Responsive Design",
                    level: 95,
                  },
                  {
                    icon: <SiPostman className="text-orange-400" />,
                    name: "Postman",
                    level: 85,
                  },
                  {
                    icon: <SiJsonwebtokens className="text-yellow-400" />,
                    name: "JWT Auth",
                    level: 80,
                  },
                  {
                    icon: <SiPassport className="text-green-400" />,
                    name: "Passport.js",
                    level: 75,
                  },
                  {
                    icon: <SiAntdesign className="text-red-500" />,
                    name: "Ant Design",
                    level: 85,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cliste.app",
                description:
                  "A product that generates academic essays using AI. I am working as the solo full-stack developer, handling both backend and frontend.",
                tech: "Next.js, NestJS, MySQL, OpenAI API, Zustand, ReactQuery, Tailwind, Passport.js, Shadcn",
                image: "/images/cliste.png",
                github: "Private",
                demo: "https://www.cliste.app/",
              },
              {
                title: "Mevalow",
                description:
                  "A digital marketing agency website with a content management system built with Next.js, Tailwind CSS, and Supabase.",
                tech: "Next.js, Tailwind CSS, Supabase",
                image: "/images/mevalow.png",
                github: "Private",
                demo: "https://mevalow.vercel.app/",
              },
              {
                title: "Thought Threads",
                description:
                  "My personal blog site where I share programming tips and experiences.",
                tech: "Next.js, Tailwind CSS, MDX",
                image: "/images/thoughtThreads.png",
                github: "Private",
                demo: "https://thought-threads-beta.vercel.app",
              },
              {
                title: "Office Management System",
                description:
                  "A system to manage employee records, payroll, and attendance, designed for efficient office operations.",
                tech: "React, Antd, Mobx, Scss",
                image: "/images/oms.png",
                github: "Private",
              },
              {
                title: "AI SEO Writing Tool",
                description:
                  "An AI-powered SEO tool that analyzes and optimizes external websites.",
                tech: "Next.js, Mobx, Scss, Antd",
                image: "/images/AiSeoTool.avif",
                github: "Private",
              },
              {
                title: "Medium Clone",
                description: "Full-stack clone of Medium for learning.",
                tech: "React, Antd, Tailwind",
                image: "/images/mediumClone.avif",
                github: "Private",
              },
              {
                title: "Blog Publish Platform",
                description:
                  "A platform for publishing and managing blog posts with features like dynamic routing, rich text editing, and user-friendly content management. Built to simplify the writing and publishing workflow.",
                tech: "Next.js, NestJS, MySQL, Tailwind, Shadcn",
                status: "In Development",
                image: "/images/blogPublishingSite.png",
                github: "Private",
                demo: "Coming soon",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 group hover:border-blue-500 transition-all h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/oms.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                    <div className="p-4 w-full flex justify-end space-x-3">
                      {project.github && project.github !== "Private" && (
                        <a
                          href={project.github}
                          className="bg-gray-900/80 p-2 rounded-full hover:bg-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && project.demo !== "Coming soon" && (
                        <a
                          href={project.demo}
                          className="bg-gray-900/80 p-2 rounded-full hover:bg-purple-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  {project.status && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium bg-blue-500/80 text-white py-1 px-2 rounded-full">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm text-blue-400 font-medium">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3"
            >
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50"></div>
                <div className="w-full h-full rounded-full relative z-10 border-4 border-gray-800 overflow-hidden">
                  <Image 
                    src="/images/profilePic.png"
                    alt="Jahanzaib Ali"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-2/3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="section-divider"></div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hi there! I&apos;m Hamza, a passionate full-stack developer with
                expertise in creating modern and responsive web applications. I
                specialize in building complete solutions using React.js and
                Next.js for the frontend, paired with NestJS and Node.js for
                robust backend systems.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in web development began with a fascination for
                creating visually appealing and functional websites that solve
                real-world problems. I&apos;m constantly learning and
                experimenting with new technologies across the entire stack to
                deliver elegant, scalable, and high-performance applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Hamza Anwar. All rights reserved.
              </p>
            </div>
            <div>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
