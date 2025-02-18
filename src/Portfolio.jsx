import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Portfolio = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Animation configurations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const bounceAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const spinAnimation = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = 60;
    const targetPosition = element.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  // Project data with specific images
  const projects = [
    {
      id: 1,
      title: "Prototype KAFA Management System",
      description: "Developed and tested a prototype system for parents to enroll their primary school children for extracurricular KAFA activities for Majlis Agama, Negeri Pahang",
      image: "/project.png",
      github: "https://github.com/aziym/KAFA-Management-System",
      demo: "https://github.com/aziym/KAFA-Management-System"
    },
    {
      id: 2,
      title: "TCPI Predict (Students Perfromance Prediction with machine learning)",
      description: "A study focused on developing a machine learning model to predict student performance at Tadika Cahaya Permata Ibu",
      image: "/tcpi.jpg",
      github: "https://github.com/aziym/students-prediction-frontend",
      demo: "https://students-prediction-frontend.vercel.app/"
    },
    {
      id: 3,
      title: "My-Savings Calculator",
      description: "My Savings Calculator helps you plan savings by setting a target amount, goal date, and monthly income. It shows how much to save each month to reach your goal",
      image: "/savings.jpg",
      github: "https://github.com/aziym/MySavings-Calculator",
      demo: "https://my-savings-calculator.vercel.app/"
    },
    {
      id: 4,
      title: "My-Bill Splitter Calculator",
      description: "My Bill Splitter makes it easy to split bills. Add names, customize with tax, and see how much everyone owes quickly and fairly",
      image: "/bill.jpg",
      github: "https://github.com/aziym/MyBill-Splitter",
      demo: "https://my-bill-splitter-chi.vercel.app/"
    }
  ];

  // Skills data with specific icons
  const skills = [
    {
      name: "Java",
      icon: "/java.png"
    },
    {
      name: "Python",
      icon: "/phyton.png"
    },
    {
      name: "Html",
      icon: "/html.png"
    },
    {
      name: "Css",
      icon: "/css.png"
    },
    {
      name: "Php",
      icon: "/php.png"
    },
    {
      name: "C++",
      icon: "/cplus.png"
    },
    {
      name: "React",
      icon: "/react.png"
    },
    {
      name: "Node.js",
      icon: "/node.png"
    },
    {
      name: "Laravel",
      icon: "/laravel.png"
    },
    {
      name: "MongoDB",
      icon: "/mongodb.png"
    },
    {
      name: "Firebase",
      icon: "/firebaseIcon.png"
    },
    {
      name: "MqSql",
      icon: "/sql.png"
    },
    {
      name: "Git",
      icon: "/git.png"
    },
    {
      name: "ABAP",
      icon: "/abap.png"
    },
    {
      name: "Angular",
      icon: "/angular.png"
    },
    {
      name: "Microsoft Azure",
      icon: "/azure.png"
    },{
      name: "Microsoft Excell",
      icon: "/excell.png"
    },
    {
      name: "Figma",
      icon: "/figma.png"
    }
  ];

  const experiences = [
    {
      title: "E-Munakahat System  Project Lead",
      company: "University Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
      period: "June 2023 - January 2024",
      description: [
        "Led a team of four to design, develop, and test a web-based system for couples to register  marriage licenses for  Majlis Agama Islam, Negeri Pahang",
        "Applied requirements elicitation techniques to clarify system functionalities and expectations from Majlis Agama Islam, Pahang",
        "Developed secure backend systems using Laravel and MySQL",
        "Integrated interactive features using PHP and JavaScript",
        "Ensured collaboration with Git version control and iterative testing"
      ],
      technologies: ["Laravel", "MySQL", "PHP", "Git", "HTML5", "CSS3"]
    },
    {
      title: "KAFA Management System Project Member",
      company: "University Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
      period: "March 2024 - June 2024",
      description: [
        "Collaborated in a group of four members to develop a prototype of a web-based  for parents to enroll their primary school children for extracurricular KAFA activities for Majlis Agama Islam, Negeri Pahang",
        "Conducted stakeholder interviews with Majlis Agama Islam, Pahang to gather requirements",
        "Developed a secure backend using Laravel and MySQL. ",
        "Utilized PHP and JavaScript for the development",
        "Conducted thorough testing of the system, including unit testing, integration testing, and user acceptance testing (UAT) to identify and fix any issues"
      ],
      technologies: ["Laravel", "MySQL", "PHP", "Git", "HTML5", "CSS3"]
    },
    {
      title: "Kindergarten Students’ Performance Prediction Model Project Lead",
      company: "Tadika Cahaya Permata Ibu (TCPI)",
      period: "March 2024 - January 2025",
      description: [
        "Proposed and developed machine learning model that predict students’ performance for Tadika Cahaya Permata Ibu",
        "Developed a machine learning model using Python and deployed it with Flask",
        "Designed an intuitive interface with React, HTML5, and CSS3 to display predictions",
        "Integrated backend with Node.js for real-time data processing.",
        "Utilized Git for version control and collaboration"
      ],
      technologies: ["Python", "Flask", "React", "HTML5", "CSS3", "Node.js", "Git"]
    },
    {
      title: "Head of Barista",
      company: "28 Studio and Coffee",
      period: "June, 2024 - October, 2024",
      description: [
        "Lead and manage a team of baristas, ensuring smooth daily operations.",
        "Provide mentorship, training, and continuous development to team members.",
        "Ensure adherence to company policies, procedures, and service standards",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Docker"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced overlay with better transparency and blur */}
      <div className="absolute inset-0 bg-emerald-950/75 backdrop-blur-sm" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full bg-gray-950/90 backdrop-blur-md z-50 border-b border-emerald-800/30 h-[60px]">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ul className="flex space-x-8 justify-center text-emerald-100">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <motion.li 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.1, color: "#6EE7B7" }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer hover:text-emerald-300 transition-colors capitalize"
                >
                  {section}
                </motion.li>
              ))}
            </ul>
          </div>
        </nav>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <motion.div 
            {...fadeIn}
            whileHover={{ scale: 1.02 }}
            className="max-w-5xl bg-gray-900/40 backdrop-blur-md rounded-xl p-10 text-emerald-50 border border-emerald-700/30"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                {...bounceAnimation}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md"
                  {...pulseAnimation}
                />
                <img 
                  src="/heroImage.png"
                  alt="Profile" 
                  className="rounded-full w-66 h-65 object-cover mx-auto ring-4 ring-emerald-500/40 relative z-10"
                />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-5xl font-bold mb-4 text-emerald-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ delay: 0.2 }}
                >
                  Azim Bakri
                </motion.h1>
                <motion.p 
                  className="text-2xl text-emerald-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.3 }}
                >
                  Highly motivated Bachelor of Computer Science (Software Engineering) student 
                  with Honors from Universiti Malaysia Pahang Al-Sultan Abdullah. 
                  Possesses a strong foundation in software development, system analysis 
                  and project management supported with hands on experience in programming and team projects.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Add this after the About section and before the Skills section */}
        <section id="experience" className="px-4 py-16">
           <motion.div 
              {...fadeIn}
                className="max-w-5xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl p-8 text-emerald-50 border border-emerald-700/30"
          >
          <motion.h2 
              className="text-3xl font-bold mb-8 text-emerald-300"
              whileHover={{ scale: 1.05, x: 10 }}
          >
            EXPERIENCE 
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-emerald-800/50 rounded-lg p-6 border border-emerald-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
              scale: 1.02, 
              backgroundColor: "rgba(6, 95, 70, 0.4)",
              y: -5
              }}
            >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-emerald-300">{exp.title}</h3>
                <p className="text-emerald-200">{exp.company}</p>
              </div>
              <p className="text-emerald-400 mt-2 md:mt-0">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {exp.description.map((item, idx) => (
                <motion.li 
                  key={idx}
                  className="text-emerald-100"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 bg-emerald-700/50 rounded-full text-sm text-emerald-200"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 95, 70, 0.6)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
        </div>
        </motion.div>
        </section>

        {/* Skills section with specific icons */}
        <section id="skills" className="px-4 py-16">
          <motion.div 
            {...fadeIn}
            className="max-w-5xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl p-8 text-emerald-50 border border-emerald-700/30"
          >
            <motion.h3 
              className="text-3xl font-semibold mb-6 text-emerald-200"
              whileHover={{ scale: 1.05, x: 10 }}
            >
              SKILLS
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-emerald-800/50 rounded-lg p-4 text-center text-emerald-50 border border-emerald-700/30"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(6, 95, 70, 0.4)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div {...bounceAnimation}>
                    <img 
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 mx-auto mb-2"
                    />
                  </motion.div>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section with specific images */}
        <section id="projects" className="min-h-screen px-4 py-16">
          <motion.div 
            {...fadeIn}
            className="max-w-5xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl p-8 text-emerald-50 border border-emerald-700/30"
          >
            <motion.h2 
              className="text-3xl font-bold mb-8 text-emerald-300"
              whileHover={{ scale: 1.05, x: 10 }}
            >
              PROJECTS
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-emerald-800/50 rounded-lg overflow-hidden border border-emerald-700/30"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(6, 95, 70, 0.4)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative overflow-hidden"
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-emerald-400">{project.title}</h3>
                    <p className="text-emerald-200 mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <motion.a 
                        href={project.github}
                        className="text-emerald-400 hover:text-emerald-300"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                      <motion.a 
                        href={project.demo}
                        className="text-emerald-400 hover:text-emerald-300"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-4 py-16">
          <motion.div 
            {...fadeIn}
            className="max-w-5xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl p-8 text-emerald-50 border border-emerald-700/30"
          >
            <motion.h2 
              className="text-3xl font-bold mb-8 text-emerald-300"
              whileHover={{ scale: 1.05, x: 10 }}
            >
              CONTACT, feel free to reach me out !
            </motion.h2>
            <div className="grid gap-6">
              {[
                { href: "mailto:azim.bakri2002@gmail.com", text: "Drop me a message anytime, let’s talk code, ideas, or collaborations", icon: "/email.png" },
                { href: "https://www.linkedin.com/in/muhamad-azim-bin-m-bakri", text: "Connect with me and let's grow our networks while sharing tech insights!", icon: "/linkedin.png" },
                { href: "https://github.com/aziym", text: "Dive into my projects and see what I’ve been building behind the scenes!", icon: "/github.png" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 bg-emerald-800/50 rounded-lg p-6 border border-emerald-700/30"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(6, 95, 70, 0.4)",
                    x: 10
                  }}
                  whileTap={{ scale: 0.98 }}
                  {...floatAnimation}
                >
                  <motion.img 
                    src={contact.icon}
                    alt="Contact"
                    className="w-8 h-8"
                    {...bounceAnimation}
                  />
                  <span className="text-emerald-100">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;