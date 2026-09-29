import React from 'react';
import { motion } from 'framer-motion';

type ColorKey =
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'emerald'
  | 'cyan'
  | 'pink'
  | 'amber'
  | 'lime'
  | 'slate';

interface Category {
  title: string;
  icon: string;
  color: ColorKey;
  skills: string[];
  note?: string; // optional one-line highlight shown under the chips
}

const categories: Category[] = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'blue',
    skills: ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'indigo',
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    color: 'purple',
    skills: [
      'Spring Boot',
      'Node.js',
      'Express.js',
      'FastAPI',
      'RESTful APIs',
      'JWT Authentication',
      'Role-Based Access Control',
      'Input Validation',
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'emerald',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Firebase (NoSQL)',
      'Supabase',
      'SQL Query Optimization',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'cyan',
    skills: [
      'AWS',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    title: 'AI / GenAI',
    icon: '🤖',
    color: 'pink',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'LLM Integration (Anthropic Claude API)',
      'Vector Embeddings',
      'Prompt Engineering',
      'LLM Orchestration',
    ],
  },
  {
    title: 'AI Tools',
    icon: '✨',
    color: 'amber',
    // Keep only the tools you genuinely use. Easy additions if true for you:
    // 'GitHub Copilot', 'Cursor', 'v0', 'Perplexity'
    skills: [
      'Claude Code',
      'Claude',
      'ChatGPT',
      'Gemini',
      'Bolt.new',
      'Lovable',
      'AI-Assisted Development',
    ],
    note: 'AI-assisted workflows cut feature turnaround by about 25% at Scribido Campus.',
  },
  {
    title: 'Tools & Testing',
    icon: '🛠️',
    color: 'lime',
    skills: [
      'Postman',
      'API Testing',
      'Unit & Integration Testing',
      'Stripe API',
    ],
  },
  {
    title: 'Core Concepts',
    icon: '📚',
    color: 'slate',
    skills: [
      'Data Structures & Algorithms',
      'System Design',
      'Object-Oriented Programming',
      'Agile / Scrum',
    ],
  },
];

// One colour per section; every chip in a section uses that colour.
// Class names are written out in full so Tailwind can find them.
const themes: Record<
  ColorKey,
  { card: string; chip: string; count: string; bar: string; badge: string }
> = {
  blue: {
    card: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-500',
    chip: 'bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200',
    count: 'text-blue-600',
    bar: 'from-blue-500 to-indigo-500',
    badge: 'ring-blue-200',
  },
  indigo: {
    card: 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-500',
    chip: 'bg-indigo-100 text-indigo-800 border border-indigo-200 hover:bg-indigo-200',
    count: 'text-indigo-600',
    bar: 'from-indigo-500 to-purple-500',
    badge: 'ring-indigo-200',
  },
  purple: {
    card: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-500',
    chip: 'bg-purple-100 text-purple-800 border border-purple-200 hover:bg-purple-200',
    count: 'text-purple-600',
    bar: 'from-purple-500 to-pink-500',
    badge: 'ring-purple-200',
  },
  emerald: {
    card: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-500',
    chip: 'bg-emerald-100 text-emerald-800 border border-emerald-200 hover:bg-emerald-200',
    count: 'text-emerald-600',
    bar: 'from-emerald-500 to-teal-500',
    badge: 'ring-emerald-200',
  },
  cyan: {
    card: 'bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-500',
    chip: 'bg-cyan-100 text-cyan-800 border border-cyan-200 hover:bg-cyan-200',
    count: 'text-cyan-600',
    bar: 'from-cyan-500 to-sky-500',
    badge: 'ring-cyan-200',
  },
  pink: {
    card: 'bg-gradient-to-br from-pink-50 to-rose-50 border-pink-500',
    chip: 'bg-pink-100 text-pink-800 border border-pink-200 hover:bg-pink-200',
    count: 'text-pink-600',
    bar: 'from-pink-500 to-rose-500',
    badge: 'ring-pink-200',
  },
  amber: {
    card: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-500',
    chip: 'bg-amber-100 text-amber-800 border border-amber-200 hover:bg-amber-200',
    count: 'text-amber-700',
    bar: 'from-amber-500 to-yellow-500',
    badge: 'ring-amber-200',
  },
  lime: {
    card: 'bg-gradient-to-br from-lime-50 to-green-50 border-lime-500',
    chip: 'bg-lime-100 text-lime-800 border border-lime-200 hover:bg-lime-200',
    count: 'text-lime-700',
    bar: 'from-lime-500 to-green-500',
    badge: 'ring-lime-200',
  },
  slate: {
    card: 'bg-gradient-to-br from-slate-50 to-gray-100 border-slate-500',
    chip: 'bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300',
    count: 'text-slate-600',
    bar: 'from-slate-500 to-gray-500',
    badge: 'ring-slate-200',
  },
};

const SkillCategory: React.FC<{ category: Category }> = ({ category }) => {
  const theme = themes[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ring-4 ${theme.badge} text-3xl mb-4`}
        >
          {category.icon}
        </div>
        <div className="flex items-center justify-center gap-4 mb-2">
          <h3 className="text-3xl font-bold text-gray-800">{category.title}</h3>
        </div>
        <p className={`text-sm font-medium mb-4 ${theme.count}`}>
          {category.skills.length} skills
        </p>
        <div
          className={`w-24 h-1 bg-gradient-to-r ${theme.bar} mx-auto rounded-full`}
        ></div>
      </div>

      <div
        className={`${theme.card} p-6 rounded-lg shadow-lg border-l-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${theme.chip}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {category.note && (
          <p className="text-sm text-gray-600 text-center mt-5">
            {category.note}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const lastIsAlone = categories.length % 2 === 1;

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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The languages, frameworks and tools I use to take a product from
            database to interface to deployment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-10">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={
                lastIsAlone && index === categories.length - 1
                  ? 'lg:col-span-2 lg:w-full lg:max-w-3xl lg:mx-auto'
                  : ''
              }
            >
              <SkillCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;