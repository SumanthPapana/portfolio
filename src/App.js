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
} from "lucide-react";
import "./portfolio.css";

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
      company: "Microchip Technology",
      role: "Embedded System Developer (Virtual Internship)",
      duration: "10-week Virtual Internship",
      description: [
        "Completed a 10-week Embedded Systems Developer Virtual Internship, gaining hands-on experience in microcontroller-based system design, sensor interfacing, and real-time embedded programming using Embedded C.",
        "Developed and tested embedded firmware for hardware peripherals, focusing on GPIO, timers, interrupts, and serial communication, following industry-standard development practices.",
        "Strengthened practical knowledge of embedded system architecture, debugging techniques, and hardware-software integration through guided labs and project-based learning.",
      ],
      technologies: [
        "Embedded C",
        "Microcontrollers",
        "GPIO",
        "Timers",
        "Interrupts",
        "Serial Communication",
      ],
      icon: <Cpu className="text-gray-700" size={24} />,
    },
    {
      company: "Technical Hub Pvt Ltd",
      role: "Web Development Intern",
      duration: "Internship",
      description: [
        "Learned HTML, CSS, and Bootstrap, focusing on building responsive and well-structured web pages.",
        "Actively participated in technical bootcamps, gaining hands-on exposure to practical web development concepts.",
        "Developed responsive web interfaces using HTML5, CSS3, and JavaScript following MVC architecture principles.",
        "Implemented object-oriented design patterns in front-end development that improved code maintainability and reusability.",
        "Created reusable UI components with Bootstrap that ensured cross-browser compatibility and responsive design.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "MVC Architecture",
      ],
      icon: <Code className="text-gray-700" size={24} />,
    },
  ];

  const certifications = [
    {
      name: "Embedded Systems And IoT Programming",
      issuer: "TESSOLVE",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      icon: <Cpu className="text-gray-700" size={20} />,
    },
    {
      name: "Embedded System Application And IoT Programming",
      issuer: "TESSOLVE",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      icon: <Zap className="text-gray-700" size={20} />,
    },
    {
      name: "MATLAB Onramp",
      issuer: "MathWorks",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      icon: <Database className="text-gray-700" size={20} />,
    },
    {
      name: "IT Specialist - HTML and CSS",
      issuer: "Certiport",
      date: "Completed",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop&q=80",
      verifyLink: "#",
      icon: <Code className="text-gray-700" size={20} />,
    },
  ];

  const achievements = [
    {
      title: "Finalist – Aerohack 2025 (Electronics Track, Individual)",
      description:
        "Designed and demonstrated a cost-effective, lightweight bird-attack deterrence system for medical delivery drones, addressing real-world constraints such as wind gusts and drizzle, and ensuring safe flight over a 10 km hilly route.",
      date: "2025",
      icon: <Shield className="text-gray-700" size={24} />,
    },
    {
      title: "Agentblazer Champion - Salesforce Trailhead",
      description:
        "Earned the prestigious Agentblazer Champion badge by completing advanced modules on Salesforce AI, automation, and customer engagement. Demonstrated hands-on proficiency through real-world guided challenges.",
      date: "Achieved",
      icon: <Award className="text-gray-700" size={24} />,
    },
    {
      title: "Merit Scholarship - KL University",
      description:
        "Honored with a scholarship worth 3.6 lakhs from KLEF for achieving 90.9% in Diploma studies.",
      date: "2023",
      icon: <Award className="text-gray-700" size={24} />,
    },
  ];

  const projects = [
    {
      id: 1,
      title:
        "Fingerprint based Vehicle Starter | RFID Technology, Arduino Nano",
      description:
        "Designed and implemented a dual-authentication vehicle security system utilizing fingerprint recognition (R307 sensor) and RFID technology (RC522 module) with Arduino Nano as the central microcontroller.",
      detailedDescription: [
        "Dual-authentication security system combining fingerprint and RFID technology",
        "128-bit AES encryption for secure data storage and transmission",
        "Relay control system interfaces with vehicle ignition without modifying OEM wiring",
        "Fail-safe protocols prevent vehicle disabling during system malfunction",
        "Low-power sleep mode achieves 95% power reduction during idle periods",
        "Bluetooth compatibility for remote monitoring and control",
      ],
      technologies: [
        "Arduino Nano",
        "RFID RC522",
        "Fingerprint R307",
        "AES Encryption",
        "C Programming",
        "Bluetooth",
        "Relay Control",
      ],
      icon: <Shield className="text-gray-700" size={24} />,
    },
    {
      id: 2,
      title: "Hand Gesture Vocalizer | ESP32 Micro-Controller",
      description:
        "Developed a gesture recognition system using an ESP32 microcontroller, enabling real-time vocalization of hand gestures.",
      detailedDescription: [
        "Real-time gesture recognition and vocalization system",
        "ESP32 microcontroller with flex sensors and accelerometer integration",
        "AI-powered gesture interpretation for device control",
        "Wireless communication capabilities",
        "Speaker output for real-time voice feedback",
        "Complex gesture pattern recognition",
      ],
      technologies: [
        "ESP32",
        "Arduino IDE",
        "Flex Sensors",
        "Accelerometer",
        "AI",
        "C++",
        "Wireless Communication",
      ],
      icon: <Mic className="text-gray-700" size={24} />,
    },
    {
      id: 3,
      title: "Turning Trash into Treasure: Waste-to-Energy Solutions",
      description:
        "Constructed a model demonstrating waste heat conversion using Peltier modules, providing sustainable energy solutions.",
      detailedDescription: [
        "Waste heat conversion system using Peltier modules",
        "Thermoelectric generation from temperature differentials",
        "Heat sink optimization for maximum energy conversion",
        "Sustainable energy solution from waste materials",
        "Energy efficiency optimization techniques",
      ],
      technologies: [
        "Peltier Modules",
        "Thermoelectric Generation",
        "Heat Sinks",
        "Energy Conversion",
        "Sustainable Energy",
      ],
      icon: <Zap className="text-gray-700" size={24} />,
    },
    {
      id: 4,
      title: "Househunt: Finding your Perfect Rental Home",
      description:
        "Developed responsive user interfaces for property listings, search filters, and user/owner dashboards.",
      detailedDescription: [
        "Responsive property listing interface with advanced filtering",
        "User and owner dashboards with different access levels",
        "Modern UI/UX design principles implementation",
        "Cross-platform compatibility",
        "Real-time search and filtering capabilities",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Material UI",
        "Responsive Design",
      ],
      icon: <Cctv className="text-gray-700" size={24} />,
    },
  ];

  const skills = {
    programming: ["C", "Embedded C", "Python", "SQL"],
    embeddedSystems: [
      "ESP32",
      "Arduino",
      "STM32",
      "Raspberry Pi",
      "Sensor Integration",
      "Real-time Firmware",
    ],
    communicationProtocols: ["UART", "SPI", "I2C", "WiFi", "Bluetooth"],
    hardware: [
      "Circuit Design",
      "Component Integration",
      "Power Management",
      "PCB Design",
    ],
    testing: [
      "Oscilloscope",
      "Multimeter",
      "Signal Analysis",
      "Systematic Debugging",
    ],
    developmentTools: [
      "Arduino IDE",
      "MATLAB",
      "EasyEDA",
      "Tinkercad",
      "Multisim",
    ],
    workstationTools: ["VMware", "Cisco Packet Tracer", "VS Code"],
    webDevelopment: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  };

  const renderContent = () => {
    switch (activeSection.toLowerCase()) {
      case "about":
        return (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-50 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dzinfdirr/image/upload/v1767020437/WhatsApp_Image_2025-12-29_at_20.24.58_dwtpqr.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Bandireddy Shalem Raja
                </h2>
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                  <Cpu size={20} className="text-gray-600" />
                  <p className="text-lg font-semibold text-gray-700">
                    Embedded Systems & IoT Specialist
                  </p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <GraduationCap className="text-gray-600" size={18} />
                    <span>
                      <strong>Education:</strong> B.Tech in ECE, KL University
                      (CGPA: 9.46)
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Zap className="text-gray-600" size={18} />
                    <span>
                      <strong>Specialization:</strong> Embedded Systems & IoT
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="text-gray-600" size={18} />
                    <span>
                      <strong>Email:</strong> 2200049134ece@gmail.com
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="text-gray-600" size={18} />
                    <span>
                      <strong>Phone:</strong> +91 9618217797
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-gray-200 rounded-full opacity-20"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Motivated Electronics and Communication Engineering student
                specializing in Embedded Systems & IoT, seeking opportunities
                where I can apply my skills in Embedded C programming, sensor
                interfacing, communication protocols, and system testing. Eager
                to contribute to real-world embedded product development while
                gaining hands-on experience in firmware design, hardware
                bring-up, and debugging within a professional engineering
                environment.
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
                    Electronics and Communication Engineering
                  </p>
                  <p className="text-gray-600 font-medium">
                    KL University, Guntur, AP
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Aug 2023 - Present
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                    <span className="text-gray-800 font-bold">
                      CGPA: 9.46/10
                    </span>
                    <span className="text-gray-600">
                      | Stream: Embedded Systems & IoT
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
                    Diploma in Electronics and Communication Engineering
                  </h3>
                  <p className="text-gray-600">
                    Aditya College of Engineering, Sutampalem, AP
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Dec 2020 - June 2023
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                    <span className="text-gray-800 font-bold">
                      Percentage: 90.99%
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
                  <p className="text-gray-600">Suryadeep EM High School</p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
                    <span className="text-gray-800 font-bold">
                      Percentage: 93.17%
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
                    Embedded Systems
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

              {/* Communication Protocols */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Communication Protocols
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.communicationProtocols.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware Development */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Hardware Development
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.hardware.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testing & Debugging */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <TestTube className="text-gray-700" size={28} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Testing & Debugging
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.testing.map((skill) => (
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
                    Web Development
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
                              Technologies Used:
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

              {/* Research Experience */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <TestTube className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Research Experience
                    </h3>
                    <p className="text-gray-600 font-semibold">
                      IoT Development Boards | Dr K. Sripathi Roy
                    </p>
                    <div className="space-y-3 mt-4">
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2"></span>
                        Conducted comprehensive performance analysis of multiple
                        IoT development boards including ESP32, STM32, Arduino,
                        and Raspberry Pi
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2"></span>
                        Evaluated processing capabilities, power consumption
                        metrics, and communication efficiency across various
                        sensor interfacing scenarios
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2"></span>
                        Implemented sensor fusion algorithms across platforms to
                        measure execution speed and memory utilization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                        Key Features:
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
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300"
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
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium"
                    >
                      Verify Certificate
                      <ExternalLink size={16} />
                    </a>
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

              {/* Leadership */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Award className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      Club Member - Review Tech
                    </h3>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      Leadership Role
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Cultivated a supportive atmosphere within the club, enhancing
                  knowledge exchange and skill development. Organized regular
                  workshops for over 30 members, resulting in tangible
                  improvements in project outcomes.
                </p>
              </div>
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
                        href="mailto:2200049134ece@gmail.com"
                        className="text-gray-800 font-bold text-lg hover:text-gray-600 transition-colors"
                      >
                        2200049134ece@gmail.com
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
                        href="tel:+919618217797"
                        className="text-gray-800 font-bold text-lg hover:text-gray-600 transition-colors"
                      >
                        +91 9618217797
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
                          href="https://linkedin.com/in/shalemrajabandireddy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-bold hover:text-gray-600 transition-colors"
                        >
                          /shalemrajabandireddy
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
                          href="https://github.com/Shalem99"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-bold hover:text-gray-600 transition-colors"
                        >
                          /Shalem99
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
              <h1 className="text-2xl font-bold text-gray-800">Shalem Raja</h1>
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
              <p className="text-lg font-bold mb-1">Bandireddy Shalem Raja</p>
              <p className="text-gray-300 text-sm">
                Embedded Systems & IoT Specialist | Electronics & Communication
                Engineer
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/shalemrajabandireddy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Shalem99"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:2200049134ece@gmail.com"
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
