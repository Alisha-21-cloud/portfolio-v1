import React, { useEffect, useState, useCallback } from "react";

import { supabase } from "../supabase";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, GraduationCap, Briefcase } from "lucide-react";




const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);


function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// techStacks tetap sama
const techStacks = [
  { icon: "/mytech/java.svg", language: "Java" },
  { icon: "/mytech/python.svg", language: "Python" },
  { icon: "/mytech/javascript.svg", language: "JavaScript" },
  { icon: "/mytech/typescript.svg", language: "TypeScript" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "/mytech/nextjs.svg", language: "Next.js" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "/mytech/numpy.svg", language: "NumPy" },
  { icon: "/mytech/pandas.svg", language: "Pandas" },
  { icon: "/mytech/langchain.svg", language: "LangChain" },
  { icon: "/mytech/mongodb.svg", language: "MongoDB" },
  { icon: "/mytech/mysql.svg", language: "MySQL" },
  { icon: "/mytech/neon.svg", language: "Neon" },
  { icon: "/mytech/postgresql.svg", language: "PostgreSQL" },
  { icon: "/mytech/t3.svg", language: "T3" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "/mytech/appwrite.svg", language: "Appwrite" },
  { icon: "/mytech/aws.svg", language: "AWS" },
  { icon: "/mytech/convex.svg", language: "Convex" },
  { icon: "/mytech/modal.svg", language: "Modal" },
  { icon: "/mytech/clerk.svg", language: "Clerk" },
  { icon: "/mytech/Polar.svg", language: "Polar" },
  { icon: "/mytech/git.svg", language: "Git" },
  { icon: "/mytech/github.svg", language: "GitHub" },
  { icon: "/mytech/docker.svg", language: "Docker" },
  { icon: "/mytech/sentry.svg", language: "Sentry" },
  { icon: "/mytech/vscode.svg", language: "VS Code" },
  { icon: "/mytech/pycharm.svg", language: "PyCharm" },
  { icon: "/mytech/intellij.svg", language: "IntelliJ" },
  { icon: "/mytech/webstorm.svg", language: "WebStorm" },
  { icon: "/mytech/jupyter.svg", language: "Jupyter" },
  { icon: "/mytech/Httpie.svg", language: "Httpie" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);


  const fetchData = useCallback(async () => {
    try {
      // Mengambil data dari Supabase secara paralel
      const [projectsResponse, certificatesResponse] = await Promise.all([
        supabase.from("projects").select("*").order('id', { ascending: true }),
        supabase.from("certificates").select("*").order('id', { ascending: true }),
      ]);

      // Error handling untuk setiap request
      if (projectsResponse.error) throw projectsResponse.error;
      if (certificatesResponse.error) throw certificatesResponse.error;

      // Supabase mengembalikan data dalam properti 'data'
      const projectData = projectsResponse.data || [];
      const certificateData = certificatesResponse.data || [];

      setProjects(projectData);
      setCertificates(certificateData);

      // Store in localStorage (fungsionalitas ini tetap dipertahankan)
      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  }, []);



  useEffect(() => {
    // Coba ambil dari localStorage dulu untuk laod lebih cepat
    const cachedProjects = localStorage.getItem('projects');
    const cachedCertificates = localStorage.getItem('certificates');

    if (cachedProjects && cachedCertificates) {
      setProjects(JSON.parse(cachedProjects));
      setCertificates(JSON.parse(cachedCertificates));
    }

    fetchData(); // Tetap panggil fetchData untuk sinkronisasi data terbaru
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);



  // Sisa dari komponen (return statement) tidak ada perubahan
  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications,technical expertise and my experience.
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
            {/* my changes */}
            <Tab
              icon={<GraduationCap className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Education"
              {...a11yProps(3)}
            />
            <Tab
              icon={<Briefcase className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Experience"
              {...a11yProps(4)}
            />
          </Tabs>

        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="py-16 px-4">
              <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                    {
                      year: "2022 - 2026",
                      title: "B.Tech in Computer Science",
                      subtitle: "Specialization in AIML",
                      place: "Pragati Engineering College",
                      cgpa: "7.91/10",
                      level: "Bachelor's Degree",
                      icon: "university",
                      status: "ongoing"
                    },
                    {
                      year: "2019 - 2021",
                      title: "Intermediate",
                      subtitle: "MPC Stream",
                      place: "Sri Medhavi Junior College",
                      cgpa: "939/1000",
                      level: "Higher Secondary",
                      icon: "school",
                      status: "completed"
                    },
                    {
                      year: "2018 - 2019",
                      title: "10th Standard",
                      subtitle: "Secondary Education",
                      place: "Bhashyam Public School",
                      cgpa: "9.7/10",
                      level: "Secondary School",
                      icon: "book",
                      status: "completed"
                    }
                  ].map((edu, i) => (
                    <div
                      key={i}
                      className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 transform transition-all duration-700 hover:scale-105 hover:-rotate-1 hover:shadow-purple-500/25"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={i * 200}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 -left-4 w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl"></div>
                      </div>

                      {/* Header with icon */}
                      <div className="relative p-8 pb-6">
                        {/* Status indicator - moved to top */}
                        <div className="flex justify-end mb-4">
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${edu.status === 'ongoing'
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                            {edu.status === 'ongoing' ? 'Current' : 'Completed'}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-8">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${i === 0 ? 'bg-gradient-to-br from-purple-500/30 to-indigo-500/30' :
                              i === 1 ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' :
                                'bg-gradient-to-br from-indigo-500/30 to-pink-500/30'
                            } backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                            {edu.icon === 'university' ? (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                              </svg>
                            ) : edu.icon === 'school' ? (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
                              </svg>
                            ) : (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                              </svg>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-slate-400 text-sm font-medium mb-1">{edu.level}</div>
                            <div className="text-purple-300 font-bold text-lg">{edu.year}</div>
                          </div>
                        </div>

                        {/* Institution name */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                          {edu.place}
                        </h3>

                        {/* Course details */}
                        <div className="space-y-2 mb-6">
                          <h4 className="text-xl font-semibold text-slate-200">{edu.title}</h4>
                          <p className="text-slate-400 text-base">{edu.subtitle}</p>
                        </div>

                        {/* Grade/Score */}
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-medium">Academic Score</span>
                          <div className={`px-4 py-2 rounded-xl font-bold text-lg ${i === 0 ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/30' :
                              i === 1 ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30' :
                                'bg-gradient-to-r from-indigo-500/20 to-pink-500/20 text-indigo-300 border border-indigo-500/30'
                            }`}>
                            {edu.cgpa}
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className={`h-2 w-full ${i === 0 ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                          i === 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                            'bg-gradient-to-r from-indigo-500 to-pink-500'
                        } group-hover:h-3 transition-all duration-300`}></div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                      {/* 3D border effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={4} dir={theme.direction}>
            <div className="py-12 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-8">
                  {[
                    {
                      role: "AIML Intern",
                      company: "Infosys SpringBoard",
                      duration: "2025 - Present",
                      startDate: "sept 2025",
                      endDate: "Nov 2025",
                      description: "Assigned to work on the project 'Developing Named Entity Recognition (NER) Models for Financial Data Extraction. Gaining hands-on experience in applying machine learning, collaborating effectively with peers, and enhancing problem-solving skills through real-world applications.",
                      projects: [
                        "Developing NER Models for Financial Data Extraction",
                      ],
                      technologies: ["Python", "Natural Language Processing (NLP)", "Named Entity Recognition (NER)", "Machine Learning"],
                      image: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png?w=400&h=200&fit=crop&crop=center",
                      achievements: "Developing and implementing Named Entity Recognition (NER) models for financial data extraction, gaining practical experience in NLP and machine learning"
                    },
                  ].map((exp, i) => (
                    <div
                      key={i}
                      className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 backdrop-blur-xl transform transition-all duration-700 hover:scale-105 hover:shadow-purple-500/25 hover:shadow-3xl w-full max-w-3xl min-h-[600px]"
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={i * 200}
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Company Image Header */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={exp.image}
                          alt={`${exp.company} workplace`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/80"></div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 backdrop-blur-sm">
                            {exp.duration.includes('Present') ? 'Current' : 'Completed'}
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="relative p-8 z-10 flex flex-col space-y-6">
                        {/* Header Section */}
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-purple-400 font-semibold text-xl">{exp.company}</p>
                          </div>
                          <div className="flex items-center text-slate-400 text-sm space-x-3">
                            <span className="bg-slate-700/50 px-3 py-2 rounded-lg font-medium">{exp.startDate}</span>
                            <span className="text-purple-400">→</span>
                            <span className="bg-slate-700/50 px-3 py-2 rounded-lg font-medium">{exp.endDate}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <p className="text-slate-300 text-base leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Projects */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Projects</h4>
                          <div className="space-y-2">
                            {exp.projects.map((project, idx) => (
                              <div key={idx} className="text-slate-400 text-base flex items-start">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {project}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Technologies</h4>
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 px-4 py-2 rounded-lg text-base font-medium border border-purple-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="border-t border-slate-700/50 pt-6">
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Achievements</h4>
                          <p className="text-slate-400 text-base leading-relaxed">{exp.achievements}</p>
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                      </div>

                      {/* 3D border effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}