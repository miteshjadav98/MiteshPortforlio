import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { PERSONAL_INFO } from '../../data/constants';
import { Mail, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

export function Contact() {
  const contactLinks = [
    {
      name: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: 'text-rose-400'
    },
    {
      name: 'LinkedIn',
      value: 'Connect with me',
      href: PERSONAL_INFO.social.linkedin,
      icon: Linkedin,
      color: 'text-blue-500'
    },
    {
      name: 'GitHub',
      value: 'View my repositories',
      href: PERSONAL_INFO.social.github,
      icon: Github,
      color: 'text-gray-300'
    },
    {
      name: 'LeetCode',
      value: 'See my coding stats',
      href: PERSONAL_INFO.social.leetcode,
      icon: ExternalLink,
      color: 'text-yellow-500'
    }
  ];

  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's build something amazing together.">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group"
              >
                <div className={`p-3 bg-[#111] rounded-xl border border-white/10 group-hover:scale-110 transition-transform ${link.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">{link.name}</h4>
                  <span className="text-gray-400 text-sm">{link.value}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
