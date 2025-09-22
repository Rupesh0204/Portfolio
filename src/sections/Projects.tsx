import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Plus, Trash2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  summary: string;
  skills: string[];
  githubUrl: string;
  image: string;
  screenshots: string[];
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-Buy",
      summary: "Built a secure e-commerce platform with payment integration, OTP authentication, real-time delivery tracking, and a seller dashboard, delivered on time, earning client trust and referrals.",
      skills: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS", "MERN stack"],
      githubUrl: "https://github.com/Rupesh0204/E-commerce-Website.git",
      image: "/public/imge-com.png",
      screenshots: [
        "/public/img1.png",
         "/public/img2.png",
        "/public/img3.png",
         "/public/img4.png",
          "/public/img5.png",
           "/public/img6.png",
            "/public/img7.png",
             "/public/img7.1.png",
              "/public/img8.png",
               "/public/img9.png",
                "/public/img10.png",
                 "/public/img11.png",
                  "/public/img12.png",
                   "/public/img13.png",
                    "/public/img14.png",
      ],
      //liveUrl: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Opacity Social",
      summary: "Led a 4-member team to build a high-complexity mobile app for real-time tracking, file sharing, and collaboration, improving project management, used by college staff, and winning two inter-college innovation awards.",
      skills: ["Android", "Firebase", "Material-UI", " Kotlin"],
      githubUrl: "https://github.com/Rupesh0204/Opacity-Social.git",
      image: "/public/img-opa.png",
      screenshots: [
        "/public/img100.png",
        "/public/img101.png",
         "/public/img102.png",
        "/public/img103.png",
         "/public/img104.png",
          "/public/img105.png",
           "/public/img106.png",
            "/public/img107.png",
             "/public/img108.png",
               "/public/img109.png",
                "/public/img110.png",
                 "/public/img111.png",
                  "/public/img112.png",
                   "/public/img113.png",
                    "/public/img114.png",
                    "/public/img115.png","/public/img116.png","/public/img117.png","/public/img118.png",
      ],
    },
    {
      id: 3,
      title: "OneShot AI",
      summary: "Developed a versatile AI chatbot integrating OpenAI API for code debugging, summary creation, image generation, and general Q&A, with secure key handling and a unified UI.",
      skills: ["Vue.js", "ReactJs", "OpenAI API", "Nodejs","Nextjs"],
      githubUrl: "https://github.com/Rupesh0204/AI-Bot.git",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      screenshots: [
      "/public/img200.png",
      "/public/img201.png",
        "/public/img202.png",
        "/public/img203.png",
         "/public/img204.png",
          "/public/img205.png",
           "/public/img206.png",
            "/public/img207.png",
              "/public/img208.png",
               "/public/img209.png",
                "/public/img210.png",
      ],
      //liveUrl: "https://your-weather-demo.com"
    }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    summary: '',
    skills: '',
    githubUrl: '',
    image: '',
    screenshots: '',
    liveUrl: ''
  });

  const addProject = () => {
    if (newProject.title && newProject.summary && newProject.githubUrl && newProject.image) {
      const skillsArray = newProject.skills.split(',').map(skill => skill.trim()).filter(skill => skill);
      const screenshotsArray = newProject.screenshots.split(',').map(url => url.trim()).filter(url => url);
      
      const project: Project = {
        id: Date.now(),
        title: newProject.title,
        summary: newProject.summary,
        skills: skillsArray,
        githubUrl: newProject.githubUrl,
        image: newProject.image,
        screenshots: screenshotsArray.length > 0 ? screenshotsArray : [newProject.image],
        liveUrl: newProject.liveUrl || undefined
      };
      
      setProjects([...projects, project]);
      setNewProject({
        title: '',
        summary: '',
        skills: '',
        githubUrl: '',
        image: '',
        screenshots: '',
        liveUrl: ''
      });
      setShowAddForm(false);
    }
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-800">Featured Projects</h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Plus size={24} />
            </button>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Add Project Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Project</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Project Title *"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="GitHub URL *"
                value={newProject.githubUrl}
                onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="url"
                placeholder="Main Image URL *"
                value={newProject.image}
                onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Live Demo URL (optional)"
                value={newProject.liveUrl}
                onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              placeholder="Project Summary *"
              value={newProject.summary}
              onChange={(e) => setNewProject({ ...newProject, summary: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none mb-4"
            />
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Skills (comma-separated) *"
                value={newProject.skills}
                onChange={(e) => setNewProject({ ...newProject, skills: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Screenshot URLs (comma-separated, optional)"
                value={newProject.screenshots}
                onChange={(e) => setNewProject({ ...newProject, screenshots: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={addProject}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Project
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group relative"
            >
              <button
                onClick={() => removeProject(project.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={16} />
              </button>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative p-6">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-12">
                  {selectedProject.title}
                </h3>

                {/* Image Gallery */}
                <div className="relative mb-6">
                  <img
                    src={selectedProject.screenshots[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                  
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedProject.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.summary}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;