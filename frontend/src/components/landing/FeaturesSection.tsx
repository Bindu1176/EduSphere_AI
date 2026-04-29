import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const features = [
  { title: '🤖 AI Chatbot', desc: 'Instant answers for timetables, exams, and resources.' },
  { title: '📅 Timetable', desc: 'Access your latest schedules, updated by admins.' },
  { title: '📚 Syllabus', desc: 'Download official course syllabus effortlessly.' },
  { title: '🎯 Career Path', desc: 'Get AI-driven career guidance based on your skills.' },
  { title: '💰 Scholarships', desc: 'Find active scholarships to support your education.' },
  { title: '🤝 Senior Hub', desc: 'Learn from seniors, get notes, and interview tips.' }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need in One Place</h2>
        <p className="text-light-muted max-w-2xl mx-auto text-lg">
          EduSphere brings together all academic tools and resources under one AI-powered platform.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(79, 70, 229, 0.4)' }}
            className="glass-card p-8 flex flex-col gap-4"
          >
            <div className="text-4xl">{f.title.split(' ')[0]}</div>
            <h3 className="text-xl font-semibold">{f.title.split(' ').slice(1).join(' ')}</h3>
            <p className="text-light-muted">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
