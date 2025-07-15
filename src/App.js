import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
    const [activeSection, setActiveSection] = useState('profile');

    // Function to handle smooth scrolling to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    // Data from the resume
    const resumeData = {
        name: "Harshdeep Gorade",
        title: "Software Developer",
        contact: {
            phone: "+91 8779246114",
            email: "goradeharshdeep29@gmail.com",
            linkedin: "https://www.linkedin.com/in/harshdeep-gorade-b241b2252/", // Placeholder, please update
            github: "https://github.com/Harshdeeep29/" // Placeholder, please update
        },
        profile: "Enthusiastic Full-Stack Developer with expertise in building responsive web applications, API integrations, and scalable backend systems. Skilled in React.js, PHP, Java, JavaScript, and database management (MySQL, PostgreSQL). Proven ability to deliver user-centric designs and seamless user experiences.",
        education: {
            degree: "Bachelor of Technology in Information Technology",
            university: "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts",
            years: "2021-2025",
            gpa: "7.5/10"
        },
        skills: {
            programmingLanguages: ["Java", "JavaScript", "PHP", "SQL", "Python"],
            frameworksLibraries: ["React.js", "Bootstrap", "AJAX", "MVC Architecture", "JDBC", "Servlets"],
            databases: ["MySQL", "PostgreSQL", "phpMyAdmin"],
            webTechnologies: ["HTML", "CSS", "REST API", "JSON"],
            softwareEngineering: ["OOP", "Data Structures & Algorithms (DSA)", "API Integration", "CRUD Operations", "SDLC", "Git", "GitHub"]
        },
        projects: [
            {
                name: "OOHDODO Advertising Website",
                technologies: "PHP, JavaScript, AJAX, MySQL",
                description: [
                    "Designed and developed a dynamic vendor and admin portal with role-based access control (RBAC).",
                    "Implemented product approval workflows and intelligent filtering, improving content discoverability.",
                    "Enhanced responsiveness and reduced page load times using AJAX-powered UI interactions."
                ]
            },
            {
                name: "Online Examination System",
                technologies: "React.js, PHP, MySQL, Bootstrap",
                description: [
                    "Built a secure, role-based web platform for exam creation, test management, and real-time result tracking.",
                    "Integrated user authentication, input validation, and performance analytics to ensure system reliability.",
                    "Applied best practices for data integrity and secure session management."
                ]
            }
        ],
        experience: [
            {
                title: "PHP Backend Developer",
                company: "YESWEUS",
                duration: "Feb 2025 - May 2025",
                responsibilities: [
                    "Contributed to 3 PHP-based projects focused on backend development using PHP and MySQL.",
                    "Built secure systems with login, validation, and session handling.",
                    "Developed admin dashboards with full CRUD functionality and real-time data updates."
                ]
            },
            {
                title: "Frontend Developer",
                company: "IBM",
                duration: "Jun 2023 - Jul 2023",
                responsibilities: [
                    "Worked on 1 project involving React.js.",
                    "Implemented image upload functionality using PHP."
                ]
            }
        ],
        certifications: [
            "Cloud Essentials for Developers (IBM)",
            "Java Programming Essentials (Coursera)"
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-400">{resumeData.name.split(' ')[0]}<span className="text-gray-100">.dev</span></h1>
                    <ul className="flex space-x-6">
                        {['profile', 'education', 'skills', 'projects', 'experience', 'certifications'].map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => scrollToSection(section)}
                                    className={`text-lg font-medium transition-colors duration-300 ${activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-300'}`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="profile" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.wpexplorer.com/wp-content/uploads/beginner-dev-skills.png" }}></div> {/* Placeholder background image */}
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="relative z-10 p-8 rounded-lg shadow-2xl bg-gray-800 bg-opacity-70 max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105">
                    <h2 className="text-5xl font-extrabold text-blue-400 mb-4 animate-fade-in-up">{resumeData.name}</h2>
                    <p className="text-3xl font-light text-gray-200 mb-6 animate-fade-in-up delay-200">{resumeData.title}</p>
                    <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-400">{resumeData.profile}</p>
                    <div className="mt-8 flex justify-center space-x-6 animate-fade-in-up delay-600">
                        <a href={`mailto:${resumeData.contact.email}`} className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>Email Me</span>
                        </a>
                        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.816 1.291 1.816 1.291 1.052 1.815 2.779 1.299 3.442.993.108-.775.418-1.291.762-1.591-2.645-.299-5.414-1.327-5.414-5.937 0-1.312.465-2.387 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.105 3.176.77.835 1.235 1.909 1.235 3.221 0 4.621-2.764 5.625-5.426 5.924.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.196-6.086 8.196-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content Sections */}
            <main className="container mx-auto px-6 py-16">
                {/* Education Section */}
                <section id="education" className="mb-16 p-8 bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-4xl font-bold text-blue-400 mb-6 text-center">Education</h3>
                    <div className="flex flex-col md:flex-row items-center md:space-x-8">
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <img src="https://mucdoe.samarth.ac.in/uploads/uims/c9c707794a80127622878c8a2659e2b629aa319b34f98a1644c1375e677d19a71_1739442624_53547382_logo.png" alt="University Logo" className="rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <p className="text-3xl font-semibold text-gray-200">{resumeData.education.degree}</p>
                            <p className="text-xl text-gray-300 mt-2">{resumeData.education.university}</p>
                            <p className="text-lg text-gray-400 mt-1">{resumeData.education.years}</p>
                            <p className="text-lg text-gray-400 mt-1">GPA: {resumeData.education.gpa}</p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-16 p-8 bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-4xl font-bold text-blue-400 mb-8 text-center">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(resumeData.skills).map(([category, skills]) => (
                            <div key={category} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-2xl font-semibold text-gray-100 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {skills.map((skill, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-16 p-8 bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-4xl font-bold text-blue-400 mb-8 text-center">Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                <h4 className="text-2xl font-semibold text-gray-100 mb-3">{project.name}</h4>
                                <p className="text-blue-300 text-lg mb-4">Technologies: {project.technologies}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 flex-grow">
                                    {project.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                                {/* Add project links if available */}
                                {/* <div className="mt-4 flex space-x-4">
                                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12 1.586l-4 4A2 2 0 007 7.414V16a2 2 0 002 2h4a2 2 0 002-2V7.414a2 2 0 00-.586-1.414l-4-4zM14 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                                        </svg>
                                        GitHub Repo
                                    </a>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Work Experience Section */}
                <section id="experience" className="mb-16 p-8 bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-4xl font-bold text-blue-400 mb-8 text-center">Work Experience</h3>
                    <div className="space-y-8">
                        {resumeData.experience.map((job, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-2xl font-semibold text-gray-100">{job.title}</h4>
                                    <span className="text-gray-400 text-md">{job.duration}</span>
                                </div>
                                <p className="text-blue-300 text-lg mb-4">{job.company}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {job.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="mb-16 p-8 bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-4xl font-bold text-blue-400 mb-8 text-center">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                                <p className="text-xl font-medium text-gray-100">{cert}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href={`mailto:${resumeData.contact.email}`} className="hover:text-blue-400 transition-colors duration-300">Email</a>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
                </div>
            </footer>

            {/* Tailwind CSS Custom Styles & Animations */}
            <style jsx="true">{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

                .font-inter {
                    font-family: 'Inter', sans-serif;
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                    opacity: 0;
                }

                .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
                .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
                .animate-fade-in-up.delay-600 { animation-delay: 0.6s; }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default App;
