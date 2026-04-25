import { PERSONAL_INFO } from '../../data/constants';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 mt-20">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gradient">MitekLabs</span>
            <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href={PERSONAL_INFO.social.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
