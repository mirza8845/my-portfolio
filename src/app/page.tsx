"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiOpenai, SiNestjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Tooltip } from "antd";

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
  const [displayedText, setDisplayedText] = useState("");
  const fullTitle = "Senior Software Engineer | Full-Stack Developer";
  
  useEffect(() => {
    if (!isMounted) return;
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setDisplayedText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [isMounted]);

  const handleContactSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById(
      "message"
    ) as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const mailtoLink = `mailto:jahanzaib8845@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;

    window.location.href = mailtoLink;
  }, []);

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about", "contact"];

      // Check if user is near the bottom of the page
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        setActiveSection("contact");
        setScrolled(window.scrollY > 100);
        return;
      }

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
            Jahanzaib Ali
          </motion.h1>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
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
                {["Home", "Skills", "Projects", "About", "Contact"].map(
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
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-black/50"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400">
                Jahanzaib Ali
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/80 min-h-[2rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-white/70 mb-10 max-w-xl">
              Experienced Full-Stack Developer specializing in advanced Web and Mobile Applications. 
              Expert in React, React Native, Node.js, Python, and modern web technologies. 
              Proven track record as a team leader delivering successful projects.
            </p>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white font-medium transform transition-all shadow-lg hover:shadow-xl w-fit"
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

          {/* Main Tech Stack - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { icon: <FaReact className="text-3xl text-cyan-400" />, name: "React" },
                { icon: <FaReact className="text-3xl text-teal-400" />, name: "React Native" },
                { icon: <SiTypescript className="text-3xl text-blue-500" />, name: "JavaScript" },
                { icon: <FaNodeJs className="text-3xl text-green-500" />, name: "Node.js" },
                { icon: <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/></svg>, name: "Express.js" },
                { icon: <SiMongodb className="text-3xl text-green-400" />, name: "MongoDB" },
                { icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>, name: "React Native" },
                { icon: <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>, name: "Python" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all"
                >
                  {tech.icon}
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Development",
                skills: ["React.js", "React Native", "Vue.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Material UI", "ReactStrap"],
              },
              {
                title: "Backend Development",
                skills: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "REST APIs", "Firebase"],
              },
              {
                title: "Databases",
                skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
              },
              {
                title: "Mobile Development",
                skills: ["React Native", "Flutter", "Dart", "iOS & Android", "Cross-platform Apps"],
              },
              {
                title: "Tools & Technologies",
                skills: ["Git", "Redux", "Axios", "Firebase Cloud Messaging", "Pubnub", "Social Auth", "Push Notifications"],
              },
              {
                title: "Project Types",
                skills: ["AI LMS Systems", "E-commerce Apps", "Event Management", "Freelance Marketplaces", "Service Platforms", "Web & Mobile Apps"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all"
              >
                <h3 className="text-lg font-semibold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-gray-700/50 text-gray-300 border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
                title: "SoStudy",
                description:
                  "An AI-powered Learning Management System (LMS) featuring web and mobile applications. This platform facilitates seamless management of learning experiences for both students and educational institutions with advanced AI capabilities.",
                tech: "React.js, React Native, Node.js, Express.js",
                image: "/images/sostudy.png",
                github: "Private",
                year: "2024 - 2025",
              },
              {
                title: "RentArround",
                description:
                  "A comprehensive E-Commerce platform with both web and mobile applications. Features robust online marketplace for seamless buying and selling experiences between customers and merchants.",
                tech: "React.js, React Native, Firebase, Python, Django",
                image: "/images/rentarround.png",
                github: "Private",
                year: "2024 - 2025",
              },
              {
                title: "Wosom",
                description:
                  "An events management web application that provides users with the ability to explore, book, and manage all types of events through a user-friendly online platform.",
                tech: "React.js, Firebase, PHP, Laravel",
                image: "/images/wosom.png",
                github: "Private",
                year: "2024",
              },
              {
                title: "Clean&Co",
                description:
                  "A cleaning service corporation platform with web and mobile applications. Enables seamless booking and management of professional cleaning services for both customers and service providers.",
                tech: "React.js, React Native, Firebase, Python, Django",
                image: "/images/cleanandco.png",
                github: "Private",
                year: "2024",
              },
              {
                title: "Growtal",
                description:
                  "A freelance marketplace web application built from scratch. Features complete API integration with Axios & Redux state management, Firebase push notifications (foreground & background), social logins (Google & LinkedIn), and multiple user type handling. Led junior developers team on this project.",
                tech: "React.js, ReactStrap, Firebase, Python, Django",
                image: "/images/growtal.png",
                github: "Private",
                year: "2023 - 2024",
              },
              {
                title: "BGI",
                description:
                  "Comprehensive web application built from scratch using React.js and ReactStrap. Features complete API integration with Redux, Firebase push notifications, Pubnub real-time messaging, social logins, and multi-user type support. Successfully led the development team.",
                tech: "React.js, ReactStrap, Material UI, Firebase, Pubnub, Python, Django",
                image: "/images/bgi.png",
                github: "Private",
                year: "2022 - 2023",
              },
              {
                title: "UIBA",
                description:
                  "Advanced web application featuring complete authentication flows, real-time notifications, state management with Redux, and Material UI design system. Delivered on time with full team leadership.",
                tech: "React.js, ReactStrap, Material UI, Firebase, Python, Django",
                image: "/images/uiba.png",
                github: "Private",
                year: "2022 - 2023",
              },
              {
                title: "MightyMe",
                description:
                  "Mobile fitness application built with React Native. Features comprehensive user management, real-time notifications, and seamless backend integration. Successfully led the development and delivery.",
                tech: "React Native, CSS, Firebase, Python, Django",
                image: "/images/mightyme.png",
                github: "Private",
                year: "2021 - 2022",
              },
              {
                title: "BlaqueFitness",
                description:
                  "Feature-rich mobile fitness application with user authentication, workout tracking, and real-time sync capabilities. Implemented push notifications and social login features.",
                tech: "React Native, CSS, Firebase, Python, Django",
                image: "/images/blaquefitness.png",
                github: "Private",
                year: "2021 - 2022",
              },
              {
                title: "Highland & PakTejarat",
                description:
                  "Multiple full-stack projects including both web and mobile applications. Built using traditional PHP/Laravel stack with modern frontend implementations and responsive designs.",
                tech: "Laravel, PHP, CSS, HTML",
                image: "/images/highland.png",
                github: "Private",
                year: "2020 - 2022",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 group hover:border-teal-500 transition-all h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = "/images/oms.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                    <div className="p-4 w-full flex justify-end space-x-3">
                      <div className="bg-gray-900/80 px-3 py-1.5 rounded-full text-xs text-teal-400 font-medium border border-teal-500/30">
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <Tooltip 
                    title={project.description}
                    placement="bottom"
                    overlayStyle={{ maxWidth: 400 }}
                  >
                    <p className="text-gray-400 mb-4 line-clamp-3 cursor-help">
                      {project.description}
                    </p>
                  </Tooltip>
                  <div className="mt-auto">
                    <p className="text-sm text-teal-400 font-medium">
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 blur-xl opacity-50"></div>
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
                Hi! I&apos;m <strong>Jahanzaib Ali</strong>, an experienced Full-Stack Developer with a proven 
                track record of successfully delivering advanced Web and Mobile Applications. 
                I specialize in JavaScript, React.js, Vue.js, React Native, Python, Node.js, 
                Express.js, Dart, and Flutter.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I also perform the role of Team Leader in my company, managing multiple projects 
                and coordinating development teams. With strong communication and technical skills 
                backed by my IT education, I&apos;ve led the development of projects that clients have 
                deemed as &quot;standards&quot; in their field. My leadership has helped increase company 
                revenue while maintaining high-quality code standards.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether it&apos;s building AI-powered LMS systems, E-commerce platforms, event management 
                applications, or mobile fitness apps - I bring innovative ideas, solid architecture, 
                and on-time delivery to every project.
              </p>
              <div className="flex space-x-4">
                  <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white font-medium"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 peer text-white"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 peer text-white"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 peer text-white"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                  >
                    Your Message
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white font-medium hover:shadow-lg transition-all"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Feel free to reach out to me for collaboration, job
                  opportunities, or just to say hello!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
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
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:jahanzaib8845@gmail.com"
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      jahanzaib8845@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
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
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </div>
                    <a
                      href="tel:+923444625292"
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      +92 344 4625292
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
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
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">Modal Town C, Bahawalpur, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/mirza8845"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="inline-flex w-12 h-12 rounded-full bg-gray-800 items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/jahanzaib-ali-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="inline-flex w-12 h-12 rounded-full bg-gray-800 items-center justify-center hover:bg-teal-700 transition-colors"
                  >
                    <FaLinkedin size={20} className="text-teal-400" />
                  </motion.a>
                </div>
              </div>
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
                © {currentYear} Jahanzaib Ali. All rights reserved.
              </p>
            </div>
            <div>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
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
