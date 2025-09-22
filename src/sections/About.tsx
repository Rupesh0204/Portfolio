import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Plus, X } from 'lucide-react';

interface CardData {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
}

const About: React.FC = () => {
  const [educationData, setEducationData] = useState<CardData[]>([
    {
      id: 1,
      title: 'Diploma in Computer Technology',
      institution: 'K. K. Wagh Polytechnic, Nashik (under MSBTE)',
      period: '2020 - 2023',
      description: 'Attended Diploma in Computer Technology right after SSC 10th, To gain basics of Computer Technology',
    },
     {
      id: 2,
      title: 'Bachelor of Computer Engineering',
      institution: 'Sinhagad Academy of Engineering, Pune ( Under Savirtribai Phule Pune University)',
      period: '2023 - 2026',
      description: 'Attending SAE as Direct Second year Student After 3 years of Diploma',
    },
  ]);

  const [internshipData, setInternshipData] = useState<CardData[]>([
    {
      id: 1,
      title: 'Software Development Intern',
      institution: 'Sachitech Technologies',
      period: 'Winter 2022',
      description: 'Developed web applications',
    },
     {
      id: 2,
      title: 'FullStack Development Intern',
      institution: 'Xmega',
      period: 'Summer 2025',
      description: 'worked on Clients buisness project',
    },
  ]);

  const [newEducation, setNewEducation] = useState({
    title: '',
    institution: '',
    period: '',
    description: '',
  });
  const [newInternship, setNewInternship] = useState({
    title: '',
    institution: '',
    period: '',
    description: '',
  });
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showInternshipForm, setShowInternshipForm] = useState(false);

  const addEducation = () => {
    if (newEducation.title && newEducation.institution) {
      setEducationData([...educationData, { id: Date.now(), ...newEducation }]);
      setNewEducation({
        title: '',
        institution: '',
        period: '',
        description: '',
      });
      setShowEducationForm(false);
    }
  };

  const addInternship = () => {
    if (newInternship.title && newInternship.institution) {
      setInternshipData([
        ...internshipData,
        { id: Date.now(), ...newInternship },
      ]);
      setNewInternship({
        title: '',
        institution: '',
        period: '',
        description: '',
      });
      setShowInternshipForm(false);
    }
  };

  const removeEducation = (id: number) => {
    setEducationData(educationData.filter((item) => item.id !== id));
  };

  const removeInternship = (id: number) => {
    setInternshipData(internshipData.filter((item) => item.id !== id));
  };

  const CardForm = ({ data, setData, onAdd, onCancel, type }: any) => (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Institution/Company"
          value={data.institution}
          onChange={(e) => setData({ ...data, institution: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Period"
          value={data.period}
          onChange={(e) => setData({ ...data, period: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <textarea
          placeholder="Description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
        />
        <div className="flex gap-3">
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add {type}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              I am Rupesh Bhadane, a passionate Full-Stack Web and App Developer
              with a strong interest in Cloud and DevOps technologies.
            </p>
            <p>
              My journey in technology began with a curiosity about how things
              work, which led me to pursue computer science and dive deep into
              various programming languages and frameworks.
            </p>
            <p>
              I believe in continuous learning and staying updated with the
              latest technologies to create innovative solutions that make a
              difference.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blogs, or exploring new technologies
              and tools.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" size={28} />
                Education
              </h3>
              <button
                onClick={() => setShowEducationForm(true)}
                className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {educationData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 group hover:shadow-xl transition-shadow relative"
                >
                  <button
                    onClick={() => removeEducation(item.id)}
                    className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}

              {showEducationForm && (
                <CardForm
                  data={newEducation}
                  setData={setNewEducation}
                  onAdd={addEducation}
                  onCancel={() => setShowEducationForm(false)}
                  type="Education"
                />
              )}
            </div>
          </motion.div>

          {/* Internship Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                <Briefcase className="mr-3 text-purple-600" size={28} />
                Experience
              </h3>
              <button
                onClick={() => setShowInternshipForm(true)}
                className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {internshipData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 group hover:shadow-xl transition-shadow relative"
                >
                  <button
                    onClick={() => removeInternship(item.id)}
                    className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-purple-600 font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}

              {showInternshipForm && (
                <CardForm
                  data={newInternship}
                  setData={setNewInternship}
                  onAdd={addInternship}
                  onCancel={() => setShowInternshipForm(false)}
                  type="Experience"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
