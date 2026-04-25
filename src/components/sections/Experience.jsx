import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { EXPERIENCE, EDUCATION } from '../../data/constants';

export function Experience() {
  return (
    <Section id="experience" title="Experience & Education" subtitle="My professional journey and academic background.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Work Experience
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111] text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                  <div className="flex flex-col mb-4">
                    <span className="text-blue-400 text-sm font-medium mb-1">{exp.duration}</span>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <span className="text-gray-400 text-sm">{exp.company}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            Education
          </h3>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <span className="text-purple-400 text-sm font-medium mb-1 block">{edu.year}</span>
                <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-gray-400 text-sm mb-3">{edu.institution}</p>
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
