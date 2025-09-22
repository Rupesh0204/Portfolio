import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Plus, Trash2, X } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills: React.FC = () => {
  const [skillCategories, setSkillCategories] = React.useState({
    languages: [
      { name: 'JavaScript', percentage: 90, color: '#F7DF1E' },
      { name: 'TypeScript', percentage: 85, color: '#3178C6' },
      { name: 'Python', percentage: 70, color: '#3776AB' },
      { name: 'Java', percentage: 85, color: '#ED8B00' },
      { name: 'C++', percentage: 70, color: '#00599C' },
      { name: 'C', percentage: 70, color: '#5ff71e' },
      { name: 'C#', percentage: 50, color: '#2acb8097' },
      { name: 'Kotlin', percentage: 60, color: '#f71eb6' },
    ],
    libraries: [
      { name: 'React', percentage: 95, color: '#61DAFB' },
      { name: 'Node.js', percentage: 85, color: '#339933' },
      { name: 'Express', percentage: 80, color: '#000000' },
      { name: 'Next.js', percentage: 80, color: '#000000' },
      { name: 'TailwindCSS', percentage: 90, color: '#06B6D4' },
      { name: 'Springboot', percentage: 70, color: '#b418e9' },
    ],
    tools: [
      { name: 'Git', percentage: 88, color: '#F05032' },
      { name: 'Docker', percentage: 70, color: '#2496ED' },
      { name: 'AWS', percentage: 65, color: '#232F3E' },
      { name: 'MongoDB', percentage: 75, color: '#47A248' },
      { name: 'PostgreSQL', percentage: 80, color: '#336791' },
    ],
  });
  const [showAddForms, setShowAddForms] = React.useState({
    languages: false,
    libraries: false,
    tools: false
  });
  const [newSkills, setNewSkills] = React.useState({
    languages: { name: '', percentage: 50, color: '#3B82F6' },
    libraries: { name: '', percentage: 50, color: '#3B82F6' },
    tools: { name: '', percentage: 50, color: '#3B82F6' }
  });

  const addSkill = (category: keyof typeof skillCategories) => {
    const newSkill = newSkills[category];
    if (newSkill.name) {
      setSkillCategories({
        ...skillCategories,
        [category]: [...skillCategories[category], { ...newSkill }]
      });
      setNewSkills({
        ...newSkills,
        [category]: { name: '', percentage: 50, color: '#3B82F6' }
      });
      setShowAddForms({
        ...showAddForms,
        [category]: false
      });
    }
  };

  const removeSkill = (category: keyof typeof skillCategories, skillName: string) => {
    setSkillCategories({
      ...skillCategories,
      [category]: skillCategories[category].filter(skill => skill.name !== skillName)
    });
  };

  const SkillCard = ({ skill, index, category, onRemove }: { skill: Skill; index: number; category: keyof typeof skillCategories; onRemove: (name: string) => void }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group relative"
    >
      <button
        onClick={() => onRemove(skill.name)}
        className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={14} />
      </button>
      <div className="w-24 h-24 mx-auto mb-4">
        <CircularProgressbar
          value={skill.percentage}
          text={`${skill.percentage}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: skill.color,
            textColor: '#374151',
            trailColor: '#f3f4f6',
            backgroundColor: '#ffffff',
          })}
        />
      </div>
      <h4 className="text-lg font-semibold text-gray-800 text-center">{skill.name}</h4>
    </motion.div>
  );

  const SkillCategory = ({ title, skills, icon, category }: { title: string; skills: Skill[]; icon: string; category: keyof typeof skillCategories }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <div className="text-4xl mb-4">{icon}</div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={() => setShowAddForms({ ...showAddForms, [category]: true })}
            className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Add Skill Form */}
      {showAddForms[category] && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 mb-8 max-w-md mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-800">Add New Skill</h4>
            <button
              onClick={() => setShowAddForms({ ...showAddForms, [category]: false })}
              className="p-1 hover:bg-gray-200 rounded-full"
            >
              <X size={16} />
            </button>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Skill Name *"
              value={newSkills[category].name}
              onChange={(e) => setNewSkills({
                ...newSkills,
                [category]: { ...newSkills[category], name: e.target.value }
              })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proficiency: {newSkills[category].percentage}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={newSkills[category].percentage}
                onChange={(e) => setNewSkills({
                  ...newSkills,
                  [category]: { ...newSkills[category], percentage: parseInt(e.target.value) }
                })}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <input
                type="color"
                value={newSkills[category].color}
                onChange={(e) => setNewSkills({
                  ...newSkills,
                  [category]: { ...newSkills[category], color: e.target.value }
                })}
                className="w-full h-10 border rounded-lg"
              />
            </div>
            <button
              onClick={() => addSkill(category)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Skill
            </button>
          </div>
        </motion.div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index} 
            category={category}
            onRemove={(name) => removeSkill(category, name)}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels across different categories.
          </p>
        </motion.div>

        <SkillCategory 
          title="Programming Languages" 
          skills={skillCategories.languages} 
          icon="💻" 
          category="languages"
        />
        <SkillCategory 
          title="Frameworks & Libraries" 
          skills={skillCategories.libraries} 
          icon="📚" 
          category="libraries"
        />
        <SkillCategory 
          title="Tools & Technologies" 
          skills={skillCategories.tools} 
          icon="🛠️" 
          category="tools"
        />
      </div>
    </section>
  );
};

export default Skills;