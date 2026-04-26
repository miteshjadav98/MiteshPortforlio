import { motion } from 'framer-motion';
import { Trophy, Award, Zap } from 'lucide-react';
import { Section } from '../layout/Section';
import { ACHIEVEMENTS } from '../../data/constants';

export function Achievements() {
  const getIcon = (id) => {
    switch (id) {
      case 1:
        return Trophy;
      case 2:
        return Award;
      case 3:
        return Zap;
      default:
        return Trophy;
    }
  };

  return (
    <Section id="achievements" title="Achievements & Certifications" subtitle="Recognition and milestones in my professional journey.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = getIcon(achievement.id);
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-[#111] rounded-xl border border-yellow-500/20">
                  <Icon className="text-yellow-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded text-sm text-yellow-300 font-medium">
                      {achievement.achievement}
                    </span>
                    <span className="text-xs text-gray-500">{achievement.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
