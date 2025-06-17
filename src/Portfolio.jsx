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
    image: "/kafa.jpg",
    github: "https://github.com/aziym/KAFA-Management-System",
    demo: "https://github.com/aziym/KAFA-Management-System"
  },
  {
    id: 2,
    title: "TCPI Predict (Students Performance Prediction with Machine Learning)",
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
  },
  {
    id: 5,
    title: "Prototype E-Munakahat System",
    description: "Led development of a prototype E-Munakahat system for couples in Pahang to register marriage licenses online with Majlis Agama Islam Negeri Pahang. Focused on user-friendly design, data security, and efficient digital workflows.",
    image: "/munakahat.png", // make sure to include this image in your assets
    github: "https://github.com/aziym/E-Munakahat.IncentiveApplication-Module", // adjust if the repo is private or under a different name
    demo: "https://github.com/aziym/E-Munakahat.IncentiveApplication-Module"
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
    },
    {
      name: "MSSQL",
      icon: "/mssql.svg"
    },
    {
      name: "SAP S/4HANA",
      icon: "SAP.jpg"
    },
    {
      name: "SAP B1",
      icon: "/SAPB1.png"
    },
    {
      name: "C#",
      icon: "/csharp.png"
    },
    {
      name: "VB.NET",
      icon: "/vbnet.jpg"
    }
  
  ];

  // Enhanced experiences with multiple images
  const experiences = [
    {
      title: "SAP Associate Technical Consultant (SAP Business One)",
      company: "Axxis Consulting",
      period: "March 2025 - Current",
      images: [
        "axxis1.jpg",       // SAP Business One dashboard
        "axxis2.jpg"          // Add-on customization screen or workflow
      ],
      description: [
        "Assisted in end-to-end SAP Business One implementation projects, focusing on cloud-based deployment and performance optimization on both HANA and MSSQL databases",
        "Developed custom SAP B1 add-ons using SAP B1 Studio and C# to enhance key modules like Inventory, Finance, and Sales",
        "Created advanced SQL queries and stored procedures tailored to HANA and MSSQL environments to support real-time analytics and reporting",
        "Customized forms, user-defined fields (UDFs), and UI layouts to align with specific client workflows and enhance system usability",
        "Worked with consultants to perform requirement analysis, build technical specs, and deploy cloud-hosted solutions using B1 on HANA",
        "Provided documentation, end-user training, and ongoing support to ensure smooth go-live and post-implementation success"
      ],
      technologies: [
        "SAP Business One",
        "SAP HANA",
        "Microsoft SQL Server (MSSQL)",
        "SAP B1 Studio",
        "C#",
        "SQL",
        "Crystal Reports",
        "Git",
        "Cloud Deployment"
      ]
    },
    {
      title: "Kindergarten Students' Performance Prediction Model Project Lead",
      company: "Tadika Cahaya Permata Ibu (TCPI)",
      period: "March 2024 - January 2025",
      images: [
        "tcpi2.jpg",
        "tcpi3.jpg",
        "tcpi.jpg"  // Data analysis charts
      ],
      description: [
        "Proposed and developed a machine learning model to predict students' performance for Tadika Cahaya Permata Ibu",
        "Developed a machine learning model using Python and deployed it with Flask",
        "Designed an intuitive interface with React, HTML5, and CSS3 to display predictions",
        "Integrated backend with Node.js for real-time data processing",
        "Utilized Git for version control and collaboration"
      ],
      technologies: [
        "Python",
        "Flask",
        "React",
        "HTML5",
        "CSS3",
        "Node.js",
        "Git"
      ]
    },
    {
      title: "E-Munakahat System Project Lead",
      company: "University Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
      period: "June 2023 - January 2024",
      images: [
        "sdw1.jpg", // Main project screenshot
        "sdw2.jpg",
        "sdw3.png"  // System interface
      ],
      description: [
        "Led a team of four to design, develop, and test a web-based system for couples to register marriage licenses for Majlis Agama Islam, Negeri Pahang",
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
      images: [
        "munakahat2.jpg",
        "munakahat3.jpg",
        "kafa.jpg"
      ],
      description: [
        "Collaborated in a group of four members to develop a prototype of a web-based for parents to enroll their primary school children for extracurricular KAFA activities for Majlis Agama Islam, Negeri Pahang",
        "Conducted stakeholder interviews with Majlis Agama Islam, Pahang to gather requirements",
        "Developed a secure backend using Laravel and MySQL.",
        "Utilized PHP and JavaScript for the development",
        "Conducted thorough testing of the system, including unit testing, integration testing, and user acceptance testing (UAT) to identify and fix any issues"
      ],
      technologies: ["Laravel", "MySQL", "PHP", "Git", "HTML5", "CSS3"]
    },
    {
      title: "Head of Barista",
      company: "28 Studio and Coffee",
      period: "June, 2024 - October, 2024",
      images: [
        "barista1.jpg",
        "barista2.JPG" // Coffee shop interior
        
      ],
      description: [
        "Lead and manage a team of baristas, ensuring smooth daily operations.",
        "Provide mentorship, training, and continuous development to team members.",
        "Ensure adherence to company policies, procedures, and service standards",
      ],
      technologies: ["Leadership", "Team Management", "Customer Service", "Training"]
    }
  ];

  // CV Download function
  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Make sure to place your CV file in the public folder
    link.download = 'Azim_Bakri_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Expertise data constant
const expertiseData = [
  {
    title: "Full-Stack Web Development",
    level: 92,
    description: "Building scalable, secure, and user-friendly web apps using Laravel, React, Node.js, and MySQL."
  },
  {
    title: "SAP B1 Consulting",
    level: 90,
    description: "Delivering end-to-end SAP Business One solutions including technical customizations (add-ons, reports, SQL queries) and functional consulting (business process analysis, user training, and solution design)."
  },
  {
    title: "System Integration & Customization",
    level: 85,
    description: "Connecting SAP B1 with web-based systems, databases, and external APIs for seamless business operations."
  },
  {
    title: "Cloud & DevOps Skills",
    level: 80,
    description: "Hands-on with Microsoft Azure, deploying applications and managing cloud infrastructure."
  },
  {
    title: "AI & Predictive Modelling",
    level: 90,
    description: "Developing ML models for student performance prediction and deploying them via Flask/React platforms."
  },
  {
    title: "Software Project Management",
    level: 95,
    description: "Experienced in Agile-based project planning, team leadership, and client-driven software delivery."
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
                  Fresh graduate in Computer Science (Software Engineering) from UMPSA. Experienced in both functional and technical SAP consulting, from customizing SAP B1 to optimizing business processes. Also skilled in full-stack development, system integration, and building real-world digital solutions.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}

  
<section id="experience" className="px-4 py-16 relative">
  {/* Timeline Vertical Line */}
  <div className="absolute top-36 sm:top-40 bottom-0 left-[28px] sm:left-1/2 w-1 bg-gradient-to-b from-emerald-600/40 to-transparent rounded-full z-0" />

  {/* Animation container with staggered children */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }}
    className="max-w-6xl mx-auto relative z-10"
  >
    {/* Section Header */}
    <motion.h2
      className="text-4xl font-bold text-center mb-12 text-emerald-300 drop-shadow-md"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      EXPERIENCE
    </motion.h2>

    {/* Experience Items */}
    <div className="space-y-16 relative">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className={`
            relative bg-gray-900/60 border border-emerald-600/20 
            backdrop-blur-md rounded-xl p-6 sm:p-8 
            transition-all hover:shadow-emerald-500/20 hover:shadow-xl
            ${index % 2 === 0 ? 'sm:ml-24 sm:mr-6' : 'sm:ml-6 sm:mr-24'}
          `}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "anticipate" } }
          }}
        >
          {/* Timeline Dot */}
          <motion.div
            className={`
              absolute top-6 w-4 h-4 rounded-full border-4 border-emerald-400
              bg-gray-950 z-20
              ${index % 2 === 0 ? 'left-[-36px]' : 'right-[-36px] sm:left-auto sm:right-auto'}
            `}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
            <div>
              <h3 className="text-2xl text-emerald-300 font-semibold">{exp.title}</h3>
              <p className="text-emerald-200">{exp.company}</p>
            </div>
            <p className="text-sm text-emerald-400 mt-2 sm:mt-0">{exp.period}</p>
          </div>

          {/* Project Gallery */}
          <div className="mb-5">
            <h4 className="text-md font-medium text-emerald-200 mb-3">Project Gallery</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-center">
              {exp.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className="relative group overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: imgIndex * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img
                    src={image}
                    alt={`${exp.title} - Image ${imgIndex + 1}`}
                    className="w-full h-24 sm:h-32 object-cover rounded-lg ring-1 ring-emerald-400/20 
                      group-hover:ring-emerald-300/50 group-hover:shadow-emerald-400/10 shadow-sm transition"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-800/70 text-emerald-100 text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {imgIndex + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-5">
            <h4 className="text-md font-medium text-emerald-200 mb-2">Key Contributions</h4>
            <ul className="list-disc pl-5 space-y-1 text-emerald-100 text-sm leading-relaxed">
              {exp.description.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ x: 6, color: "#6EE7B7" }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-md font-medium text-emerald-200 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="text-xs px-3 py-1 bg-emerald-700/40 border border-emerald-600/30 rounded-full text-emerald-100 shadow-inner transition hover:scale-105 hover:bg-emerald-600/40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

          {/*Expetise*/}

        <section id="expertise" className="px-4 py-20">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.2 }}
    className="max-w-5xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl p-8 text-emerald-50 border border-emerald-700/30"
  >
    {/* Section Title */}
    <motion.h2
      className="text-4xl font-bold text-center mb-12 text-emerald-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      EXPERTISE 
    </motion.h2>

    {/* Expertise Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {expertiseData.map((expertise, index) => (
        <motion.div
          key={index}
          className="bg-emerald-800/30 rounded-lg p-6 border border-emerald-600/20 hover:border-emerald-500/40 transition-all duration-300"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ 
            scale: 1.02, 
            backgroundColor: "rgba(6, 95, 70, 0.4)",
            y: -5
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-emerald-300 mb-2">{expertise.title}</h3>
            <p className="text-sm text-emerald-200 opacity-80">{expertise.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-emerald-200">Proficiency Level</span>
              <motion.span 
                className="text-sm font-bold text-emerald-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (index * 0.2) + 0.8 }}
              >
                {expertise.level}%
              </motion.span>
            </div>
            
            {/* Progress Bar Background */}
            <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
              {/* Animated Progress Fill */}
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: `${expertise.level}%` }}
                transition={{ 
                  delay: (index * 0.2) + 0.5, 
                  duration: 1.5, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: (index * 0.2) + 1
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Pulse animation on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            whileHover={{
              boxShadow: [
                "0 0 0 0 rgba(16, 185, 129, 0)",
                "0 0 0 10px rgba(16, 185, 129, 0.1)",
                "0 0 0 20px rgba(16, 185, 129, 0)"
              ]
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-emerald-200 text-lg"
        whileHover={{ scale: 1.05, color: "#6EE7B7" }}
      >
     
      </motion.p>
    </motion.div>
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

        {/* CV Download Section */}
<section id="cv" className="px-4 py-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl p-8 text-emerald-50 border border-emerald-700/30 shadow-lg shadow-emerald-600/10"
  >
    <motion.h2
      className="text-3xl font-bold mb-10 text-emerald-300 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      DOWNLOAD MY CV
    </motion.h2>

    <div className="text-center">
      {/* Icon Card Animation */}
      <motion.div
        className="w-32 h-32 mx-auto mb-8 relative group cursor-pointer"
        onClick={downloadCV}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-md group-hover:bg-emerald-400/30 transition-all duration-300"
        />
        <div className="relative z-10 w-full h-full bg-emerald-800/60 rounded-lg flex items-center justify-center border-2 border-emerald-500/40 group-hover:border-emerald-400/60 transition-all duration-300">
          <motion.svg
            className="w-16 h-16 text-emerald-300 group-hover:text-emerald-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clipRule="evenodd"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Description Paragraph */}
      <motion.p
        className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get a comprehensive overview of my experience, skills, and achievements.
        Download my latest CV to learn more about my professional journey.
      </motion.p>

      {/* Download Button */}
      <motion.button
        onClick={downloadCV}
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border-2 border-emerald-500/40 hover:border-emerald-400/60 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        📄 Download CV
      </motion.button>
    </div>
  </motion.div>
</section>


       {/* Contact Section */}
        {/* Contact Section */}
<section id="contact" className="px-4 py-20 relative overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent pointer-events-none" />

  <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl border border-emerald-700/30 p-10 relative z-10 shadow-lg shadow-emerald-900/10">
    
    {/* Title */}
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold text-emerald-300 text-center mb-6 drop-shadow-[0_0_12px_rgba(16,185,129,0.2)]"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Let's Connect!
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-center text-emerald-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      I'm always open to new opportunities, meaningful collaborations, or just chatting about tech and innovation. Don’t hesitate to drop me a message!
    </motion.p>

    {/* Contact Buttons */}
    <motion.div
      className="flex flex-wrap justify-center gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {[
        {
          label: "Email",
          href: "mailto:azim.bakri2002@gmail.com",
          imgSrc: "/email.png"
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/muhamad-azim-bin-m-bakri/",
          imgSrc: "/linkedin.png"
        },
        {
          label: "GitHub",
          href: "https://github.com/aziym",
          imgSrc: "/github.png"
        }
      ].map((link, idx) => (
        <motion.a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(16,185,129,0.3)",
            boxShadow: "0px 0px 20px rgba(16,185,129,0.4)"
          }}
          className="flex items-center gap-3 px-6 py-3 bg-emerald-700/50 text-emerald-100 rounded-full border border-emerald-600/40 transition-all duration-300 hover:text-white"
        >
          <img 
            src={link.imgSrc}
            alt={`${link.label} logo`} 
            className="w-6 h-6 object-contain"
          />
          <span className="text-base font-medium">{link.label}</span>
        </motion.a>
      ))}
    </motion.div>

    {/* Divider Line */}
    <motion.div
      className="mt-14 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    />

  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-950/90 border-t border-emerald-800/30 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-emerald-200">
          <p>&copy; 2025 Azim Bakri. All rights reserved.</p>
          <p className="mt-2 text-sm text-emerald-400">
            Built with React and styled with Tailwind CSS
          </p>
        </div>
      </footer>
      
      </div>
    </div>
  );
};

export default Portfolio;