import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, FileText, Plus, Trash2 } from 'lucide-react';

interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
  journal?: string;
  coAuthors?: string[];
}

const Research: React.FC = () => {
  const [researchPapers, setResearchPapers] = React.useState<ResearchPaper[]>([
    {
      id: 1,
      title: "Al As A Collaborative Tool: Enhancing Workplace Efficiency Without Replacing Human Jobs",
      description: "Explored AI as a collaborative tool to enhance workplace efficiency by augmenting human capabilities, streamlining tasks, and promoting ethical human-AI collaboration.",
      link: "https://ijsrem.com/download/ai-as-a-collaborative-tool-enhancing-workplace-efficiency-without-replacing-human-jobs/",
      date: "2025-04-20",
      journal: "IJSREM",
      coAuthors: ["None"]
    },
    {
      id: 2,
      title: "Social Productivity Platform: A study of Collaboration, Communication and Productivity",
      description: "Published in IJSREM, this paper presents Opacity Social, a Kotlin-Firebase Android app that enhances team collaboration, project management, and real-time communication, improving efficiency and engagement for small teams and students.",
      link: "https://ijsrem.com/download/social-productivity-platform-a-study-of-collaboration-communication-and-productivity/",
      date: "2023-04-20",
      journal: "IJSREM",
      coAuthors: ["Prof. S.K.Mahajan","Rutuja Dorkar","Jayesh Jadhav","Shweta Ahire"]
    },
    {
      id: 3,
  title: "EcoSwap: Bridging Users and Charitable Trusts through Intelligent Item Exchange and Donation Management",
  description: "Published in IJSREM, this research introduces EcoSwap, a community-driven platform that connects users and charitable trusts through intelligent item exchange and donation management. It integrates AI-based demand prediction, geofencing, and secure trust frameworks to promote sustainability, transparency, and social impact.",
  link: "https://ijsrem.com/download/ecoswap-bridging-users-and-charitable-trusts-through-intelligent-item-exchange-and-donation-management/",
  date: "2025-10-15",
  journal: "IJSREM",
  coAuthors: ["Prof. T.B. Faruki", "Janhavi Thoke", "Rutik Yadav", "Magdum Layakali Pirjade"]
    },

  ]);
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [newPaper, setNewPaper] = React.useState({
    title: '',
    description: '',
    link: '',
    date: '',
    journal: '',
    coAuthors: ''
  });

  const addPaper = () => {
    if (newPaper.title && newPaper.description && newPaper.link && newPaper.date) {
      const coAuthorsArray = newPaper.coAuthors.split(',').map(author => author.trim()).filter(author => author);
      
      const paper: ResearchPaper = {
        id: Date.now(),
        title: newPaper.title,
        description: newPaper.description,
        link: newPaper.link,
        date: newPaper.date,
        journal: newPaper.journal || undefined,
        coAuthors: coAuthorsArray.length > 0 ? coAuthorsArray : undefined
      };
      
      setResearchPapers([...researchPapers, paper]);
      setNewPaper({
        title: '',
        description: '',
        link: '',
        date: '',
        journal: '',
        coAuthors: ''
      });
      setShowAddForm(false);
    }
  };

  const removePaper = (id: number) => {
    setResearchPapers(researchPapers.filter(paper => paper.id !== id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-800">Research Publications</h2>
            {/* <button
              onClick={() => setShowAddForm(true)}
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Plus size={24} />
            </button> */}
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My contributions to the academic community through research papers and publications in various fields of computer science and technology.
          </p>
        </motion.div>

        {/* Add Paper Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Research Paper</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Paper Title *"
                value={newPaper.title}
                onChange={(e) => setNewPaper({ ...newPaper, title: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Paper Link *"
                value={newPaper.link}
                onChange={(e) => setNewPaper({ ...newPaper, link: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="date"
                placeholder="Publication Date *"
                value={newPaper.date}
                onChange={(e) => setNewPaper({ ...newPaper, date: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Journal/Conference (optional)"
                value={newPaper.journal}
                onChange={(e) => setNewPaper({ ...newPaper, journal: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              placeholder="Paper Description *"
              value={newPaper.description}
              onChange={(e) => setNewPaper({ ...newPaper, description: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none mb-4"
            />
            <input
              type="text"
              placeholder="Co-authors (comma-separated, optional)"
              value={newPaper.coAuthors}
              onChange={(e) => setNewPaper({ ...newPaper, coAuthors: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            <div className="flex gap-3">
              {/* <button
                onClick={addPaper}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Paper
              </button> */}
              {/* <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button> */}
            </div>
          </motion.div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group relative"
            >
              {/* <button
                onClick={() => removePaper(paper.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={16} />
              </button> */}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FileText className="text-blue-600" size={24} />
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    {formatDate(paper.date)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {paper.title}
                </h3>

                {paper.journal && (
                  <p className="text-sm text-purple-600 font-medium mb-2">
                    {paper.journal}
                  </p>
                )}

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {paper.description}
                </p>

                {paper.coAuthors && paper.coAuthors.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Co-authors:</p>
                    <div className="flex flex-wrap gap-1">
                      {paper.coAuthors.map((author, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {author}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium group"
                  >
                    <span className="mr-2">Read Paper</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="text-xs text-gray-500">
                    Published
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Interested in collaboration or have questions about my research?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;