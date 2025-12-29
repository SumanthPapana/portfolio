
// Portfolio.jsx
import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Cpu,
  Zap,
  Shield,
  Mic,
  Thermometer,
  Wifi,
  Database,
  Cctv,
  Code,
  TestTube,
  Battery,
  Settings,
  Cloud,
} from "lucide-react";

import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const navItems = [
    "About",
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
    "Achievements",
    "Contact",
  ];

  const experiences = [
    {
      company: "Venky's Vision IT Solutions",
      role: "Intern",
      duration: "Internship",
      description: [
        "Gained hands-on training in Power Systems, Renewable Energy, and Automation relevant to EEE industry.",
        "Mentored learners in industrial and academic projects, focusing on real-time applications like automation, renewable energy systems, and electric vehicles.",
      ],
      technologies: [
        "Power Systems",
        "Renewable Energy",
        "Automation",
        "Electric Vehicles",
        "Industrial Projects",
      ],
      icon: <Settings className="text-gray-700" size={24} />,
    },
  ];

  const certifications = [
    {
      name: "Java Full Stack by WIPRO TALENT NEXT",
      issuer: "Wipro",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      description:
        "Completed the Java Full Stack Development Certification under the Wipro TalentNext (WTN) program, gaining strong proficiency in both front-end and back-end development.",
      details: [
        "Hands-on experience in building full-stack applications using Core Java, HTML, JavaScript, and MySQL.",
        "Developed and deployed end-to-end project modules, focusing on clean coding practices, API integration, and scalable application design.",
      ],
      icon: <Code className="text-gray-700" size={20} />,
    },
    {
      name: "Autodesk FUSION 360",
      issuer: "Autodesk",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      description:
        "Learned CAD/CAM modeling, rendering, and simulation in mechanical engineering context.",
      details: [
        "Gained hands-on experience in 3D CAD/CAM modeling, rendering, and mechanical design simulation.",
        "Designed and analyzed mechanical components to understand real-world engineering workflows.",
      ],
      icon: <Settings className="text-gray-700" size={20} />,
    },
    {
      name: "AIML Using Python [Industrial Automation Level-1]",
      issuer: "Tesolve",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      description:
        "Applied AIML for predictive monitoring and analytics in industrial automation using Python.",
      details: [
        "Built and tested Python-based ML models for automation and equipment health assessment.",
        "Developed a solid foundation in data preprocessing, model training, and industrial data insights.",
      ],
      icon: <Cpu className="text-gray-700" size={20} />,
    },
    {
      name: "AIML Using Python [Industrial Automation Level-2]",
      issuer: "Taras",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      description:
        "Implemented advanced ML models for real-time anomaly detection and predictive maintenance in industrial systems using Python.",
      details: [
        "Worked on optimizing models for fault detection and performance prediction in industrial processes.",
        "Enhanced understanding of end-to-end ML pipelines, from sensor data acquisition to model deployment.",
      ],
      icon: <Cpu className="text-gray-700" size={20} />,
    },
  ];

  const achievements = [
    {
      title: "Library Committee Head – Academic Excellence",
      description:
        "Appointed as committee head for securing 7th rank and consistent performance in EEE Department.",
      date: "Academic",
      icon: <Award className="text-gray-700" size={24} />,
    },
    {
      title: "Spark Team Member – KL University 2024",
      description:
        "Organized cultural and tech events, handled logistics and faculty coordination.",
      date: "2024",
      icon: <Award className="text-gray-700" size={24} />,
    },
    {
      title: "EV Club Member – KL University",
      description:
        "Led innovation initiatives in EV design and collaborated with industry mentors.",
      date: "Club Activity",
      icon: <Zap className="text-gray-700" size={24} />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Robotic Arm Design using Fusion 360",
      description:
        "Designed and simulated a modular robotic arm using Fusion 360 with custom end-effector and 3D-printable parts.",
      detailedDescription: [
        "Applied CAD simulation and stress analysis tools to evaluate structural integrity, material selection, and load-bearing efficiency.",
        "Improved design accuracy and performance reliability through comprehensive analysis.",
        "Enhanced the arm's efficiency by optimizing joint torque distribution and reducing weight using topology optimization in Fusion 360.",
        "Created custom end-effector designs for various applications.",
        "Developed 3D-printable parts for rapid prototyping and testing.",
      ],
      technologies: [
        "Fusion 360",
        "CAD Design",
        "3D Modeling",
        "Stress Analysis",
        "Topology Optimization",
        "3D Printing",
      ],
      icon: <Settings className="text-gray-700" size={24} />,
    },
    {
      id: 2,
      title: "Battery Health Monitoring for EVs via Mobile Application",
      description:
        "Developed ESP32-based system to monitor voltage, current, temperature, and SOC with real-time mobile app alerts.",
      detailedDescription: [
        "Integrated real-time battery data on mobile app with alerts for abnormal conditions.",
        "Implemented data transmission using IoT protocols for seamless communication.",
        "Optimized sensor calibration to ensure accurate, low-latency monitoring of battery performance.",
        "Developed an intuitive mobile dashboard for live battery analytics and early fault alerts.",
        "Utilized Bluetooth communication with ESP32 for wireless data transmission.",
        "Implemented State of Charge (SOC) estimation algorithms for accurate battery status.",
      ],
      technologies: [
        "ESP32",
        "IoT",
        "Bluetooth",
        "Mobile Development",
        "Sensor Integration",
        "Battery Management",
        "Python",
      ],
      icon: <Battery className="text-gray-700" size={24} />,
    },
    {
      id: 3,
      title: "Bluetooth Controlled Robot Using Raspberry Pi Pico W Board",
      description:
        "Built a robot controlled via Bluetooth commands using Raspberry Pi Pico and Android app.",
      detailedDescription: [
        "Designed and assembled a robust chassis integrating motor drivers (L298N) and power management circuits.",
        "Implemented stable operation through optimized power management and motor control.",
        "Programmed motion control algorithms in MicroPython ensuring smooth navigation.",
        "Achieved precise speed regulation via mobile commands through Bluetooth interface.",
        "Developed Android application for intuitive robot control interface.",
        "Implemented obstacle avoidance and path planning algorithms.",
      ],
      technologies: [
        "Raspberry Pi Pico W",
        "MicroPython",
        "Bluetooth",
        "L298N Motor Driver",
        "Android Development",
        "Robotics",
      ],
      icon: <Cpu className="text-gray-700" size={24} />,
    },
    {
      id: 4,
      title: "Renewable Generation Forecasting and Load Demand Control",
      description:
        "Developed energy management system with automatic source-shifting between renewable and grid supply.",
      detailedDescription: [
        "Developed an automatic source-shifting mechanism using Arduino UNO.",
        "Implemented load-demand monitoring using sensors to simulate variable load patterns.",
        "Integrated decision logic for load scheduling based on priority and available energy.",
        "Created forecasting algorithms for renewable energy generation prediction.",
        "Implemented smart grid integration for optimal energy distribution.",
        "Developed user interface for monitoring energy consumption and generation patterns.",
      ],
      technologies: [
        "Arduino UNO",
        "Renewable Energy",
        "Energy Management",
        "Load Forecasting",
        "Smart Grid",
        "Sensor Networks",
      ],
      icon: <Zap className="text-gray-700" size={24} />,
    },
  ];

  const skills = {
    programming: ["C Programming", "Python", "SQL"],
    embeddedSystems: [
      "Embedded Applications",
      "EVT Prototyping",
      "PCB Designing",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
    ],
    designTools: [
      "Fusion 360",
      "Tinkercad",
      "EasyEDA",
      "3D Model Designing",
      "CAD/CAM",
    ],
    simulationTools: ["MATLAB", "Multisim", "B2Spice"],
    energySystems: [
      "Power Systems",
      "Renewable Energy",
      "Electric Vehicles",
      "Battery Management",
    ],
    automation: [
      "Industrial Automation",
      "PLC Programming",
      "Control Systems",
      "IoT Integration",
    ],
    webDevelopment: [
      "HTML",
      "JavaScript",
      "Java",
      "MySQL",
      "Full Stack Development",
    ],
  };

  const renderContent = () => {
    switch (activeSection.toLowerCase()) {
      case "about":
        return (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-60 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dzinfdirr/image/upload/v1767025487/WhatsApp_Image_2025-12-29_at_21.54.09_mvipo2.jpg"
                  alt="Papana Sumanth"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Papana Sumanth
                </h2>
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                  <Cpu size={20} className="text-gray-600" />
                  <p className="text-lg font-semibold text-gray-700">
                    Electrical & Electronics Engineer | AI & Autonomous Systems
                  </p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <GraduationCap className="text-gray-600" size={18} />
                    <span>
                      <strong>Education:</strong> B.Tech in Electrical and
                      Electronics Engineering, KL University (CGPA: 9.15)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Zap className="text-gray-600" size={18} />
                    <span>
                      <strong>Specialization:</strong> AI & Autonomous Systems
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="text-gray-600" size={18} />
                    <span>
                      <strong>Email:</strong> 2200069036eee@gmail.com
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="text-gray-600" size={18} />
                    <span>
                      <strong>Phone:</strong> +91 9392659512
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="text-gray-600" size={18} />
                    <span>
                      <strong>Location:</strong> Guntur, Andhra Pradesh, India
                    </span>
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/sumanth-papana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/SumanthPapana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-gray-200 rounded-full opacity-20"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                A dedicated Fourth-year Electrical and Electronics Engineering
                student with a passion for technology and a solid understanding
                of core concepts. Specializing in AI & Autonomous Systems with
                expertise in embedded systems, EV prototyping, 3D modeling, and
                renewable energy systems. Seeking opportunities to leverage my
                knowledge and enthusiasm in a dynamic environment where I can
                contribute to innovative projects and continue to grow both
                personally and professionally.
              </p>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <GraduationCap className="text-gray-700" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-gray-600">
                    Electrical and Electronics Engineering
                  </p>
                  <p className="text-gray-600 font-medium">
                    KL University, Guntur, AP
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    July 2025 - Pursuing
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                    <span className="text-gray-800 font-bold">
                      CGPA: 9.15/10
                    </span>
                    <span className="text-gray-600">
                      | Stream: AI & Autonomous Systems
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <GraduationCap className="text-gray-700" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    Diploma in Electrical and Electronics Engineering
                  </h3>
                  <p className="text-gray-600">
                    Anubose Institute of Technology, Palvancha, TG
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Dec 2020 - June 2023
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                    <span className="text-gray-800 font-bold">
                      CGPA: 6.96/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <GraduationCap className="text-gray-700" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="text-gray-600">
                    KPR's Gowtham School, Sathupalli, TG
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    June 2019 - March 2020
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                    <span className="text-gray-800 font-bold">
                      CGPA: 9.7/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Programming Languages */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Programming Languages
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.programming.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Embedded Systems */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Embedded Systems & Hardware
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.embeddedSystems.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design Tools */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Design & Simulation Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.designTools.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Simulation Tools */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <TestTube className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Simulation & Analysis
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.simulationTools.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Energy Systems */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Energy Systems
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.energySystems.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Development */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Web Development & Automation
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.webDevelopment.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedExperience(
                      selectedExperience === idx ? null : idx
                    )
                  }
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {exp.company}
                          </h3>
                          <p className="text-gray-600 font-semibold">
                            {exp.role}
                          </p>
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.duration}
                        </span>
                      </div>

                      {selectedExperience === idx && (
                        <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                          <div className="space-y-3">
                            {exp.description.map((point, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                                <p className="text-gray-700">{point}</p>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <Zap size={18} className="text-gray-600" />
                              Technologies & Domains:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <p className="text-gray-600 text-sm mt-4 font-medium flex items-center gap-1">
                        {selectedExperience === idx ? (
                          <span>Click to collapse</span>
                        ) : (
                          <>
                            <span>Click to expand details</span>
                            <ExternalLink size={16} />
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    )
                  }
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {selectedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                      <p className="font-bold text-gray-800 mb-2">
                        Key Features & Achievements:
                      </p>
                      <div className="space-y-2">
                        {project.detailedDescription.map((feature, idx) => (
                          <p
                            key={idx}
                            className="text-gray-700 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm mt-3 font-medium flex items-center gap-1">
                    {selectedProject === project.id ? (
                      "Click to collapse"
                    ) : (
                      <>
                        Click for details
                        <ExternalLink size={14} />
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedCertification(
                      selectedCertification === idx ? null : idx
                    )
                  }
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{cert.issuer}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{cert.description}</p>

                    {selectedCertification === idx && (
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                        <p className="font-bold text-gray-800 mb-2">
                          Key Learnings:
                        </p>
                        <div className="space-y-2">
                          {cert.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-gray-700 text-sm flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></span>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium"
                      >
                        Verify Certificate
                        <ExternalLink size={16} />
                      </a>
                      <p className="text-gray-600 text-sm">
                        {selectedCertification === idx
                          ? "Click to collapse"
                          : "Click for details"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Achievements & Leadership
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {achievement.title}
                      </h3>
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Me
            </h2>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Mail className="text-gray-700" size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Email</p>
                      <a
                        href="mailto:2200069036eee@gmail.com"
                        className="text-gray-800 font-bold text-lg hover:text-gray-600 transition-colors"
                      >
                        2200069036eee@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Phone className="text-gray-700" size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Phone</p>
                      <a
                        href="tel:+919392659512"
                        className="text-gray-800 font-bold text-lg hover:text-gray-600 transition-colors"
                      >
                        +91 9392659512
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <MapPin className="text-gray-700" size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        Location
                      </p>
                      <p className="text-gray-800 font-bold text-lg">
                        Guntur, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <Linkedin className="text-gray-700" size={28} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">
                          LinkedIn
                        </p>
                        <a
                          href="https://linkedin.com/in/sumanth-papana"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-bold hover:text-gray-600 transition-colors"
                        >
                          /sumanth-papana
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <Github className="text-gray-700" size={28} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">
                          GitHub
                        </p>
                        <a
                          href="https://github.com/SumanthPapana"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-bold hover:text-gray-600 transition-colors"
                        >
                          /SumanthPapana
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Cpu className="text-gray-700" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Papana Sumanth
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`px-4 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.toLowerCase()
                      ? "bg-gray-100 text-gray-800 font-semibold border border-gray-300"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "bg-gray-100 text-gray-800 font-semibold border-l-4 border-gray-400"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">{renderContent()}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold mb-1">Papana Sumanth</p>
              <p className="text-gray-300 text-sm">
                Electrical & Electronics Engineer | AI & Autonomous Systems
                Specialist
              </p>
              <p className="text-gray-400 text-sm mt-1">
                I hereby declare that the above written particulars are true to
                my knowledge and belief.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/sumanth-papana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/SumanthPapana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:2200069036eee@gmail.com"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Portfolio | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

