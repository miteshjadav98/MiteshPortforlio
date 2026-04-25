import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { SKILLS } from '../../data/constants';

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Technologies and tools I use to build scalable products.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-[#111] rounded-xl border border-white/10">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500/30 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
