import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Bot, ExternalLink, ArrowRight, Store, IndianRupee, Users, Book } from 'lucide-react';

export function LiveProducts() {
  return (
    <Section id="products" className="bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden glass border-white/10"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium w-fit mb-6">
                <Bot size={16} />
                <span>Live Product Showcase</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise PDF Chatbot
              </h3>
              
              <p className="text-gray-400 text-lg mb-8">
                A highly scalable RAG-based conversational AI platform. Upload your documents and get intelligent, context-aware answers instantly powered by FastAPI and Ollama.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="http://chatbot.miteklabs.tech" target="_blank" rel="noreferrer">
                  <Button variant="gradient" className="gap-2 w-full sm:w-auto">
                    Try it now <ExternalLink size={18} />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative bg-[#111] p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/5 flex items-center justify-center min-h-[300px]">
              {/* Abstract Representation of the product */}
              <div className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <div className="h-8 bg-[#1a1a1a] border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Bot size={16} className="text-blue-400" />
                    </div>
                    <div className="bg-[#1a1a1a] p-3 rounded-lg rounded-tl-none border border-white/5 text-sm text-gray-300 w-[80%]">
                      Hello! I'm ready to analyze your PDF documents. What would you like to know?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 shrink-0" />
                    <div className="bg-blue-600/20 p-3 rounded-lg rounded-tr-none border border-blue-500/20 text-sm text-gray-300 w-[70%]">
                      Can you summarize the architecture diagram on page 4?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Bot size={16} className="text-blue-400" />
                    </div>
                    <div className="bg-[#1a1a1a] p-3 rounded-lg rounded-tl-none border border-white/5 text-sm text-gray-300 w-[85%] space-y-2">
                      <div className="h-2 bg-white/10 rounded w-full animate-pulse" />
                      <div className="h-2 bg-white/10 rounded w-5/6 animate-pulse" />
                      <div className="h-2 bg-white/10 rounded w-4/6 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Khatabook CRM Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden glass border-white/10"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            <div className="p-10 md:p-14 flex flex-col justify-center lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium w-fit mb-6">
                <Store size={16} />
                <span>Live Product Showcase</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Khatabook CRM
              </h3>
              
              <p className="text-gray-400 text-lg mb-8">
                A multi-tenant SaaS for managing digital ledgers, inventory, and customers. Features RBAC, atomic transactions, and an isolated dashboard for every shopkeeper.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="https://app.miteklabs.tech" target="_blank" rel="noreferrer">
                  <Button variant="gradient" className="gap-2 w-full sm:w-auto">
                    Try it now <ExternalLink size={18} />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative bg-[#111] p-8 lg:p-10 border-t lg:border-t-0 lg:border-r border-white/5 flex items-center justify-center min-h-[300px] lg:order-1">
              {/* Abstract Representation of Khatabook */}
              <div className="w-full max-w-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <div className="h-8 bg-[#1a1a1a] border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                {/* Navbar */}
                <div className="border-b border-white/10 p-3 flex justify-between items-center bg-[#111]">
                  <div className="font-bold text-white flex items-center gap-1 text-sm">
                    Khata<span className="text-purple-500">Book</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-4 w-12 bg-white/10 rounded" />
                    <div className="h-4 w-12 bg-white/10 rounded" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 space-y-4 bg-[#0a0a0a]">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="h-6 w-32 bg-white/10 rounded" />
                     <div className="w-5 h-5 rounded bg-purple-500/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                       <div className="text-gray-400 text-[10px] mb-1 font-medium tracking-wider">TOTAL DUE</div>
                       <div className="text-orange-500 text-xl font-bold flex items-center"><IndianRupee size={16} strokeWidth={3} /> 900</div>
                    </div>
                    <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                       <div className="text-gray-400 text-[10px] mb-1 font-medium tracking-wider">TOTAL COLLECTED</div>
                       <div className="text-green-500 text-xl font-bold flex items-center"><IndianRupee size={16} strokeWidth={3} /> 1,650</div>
                    </div>
                    <div className="bg-[#111] py-5 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                       <Users size={20} className="text-purple-400" />
                       <div className="text-white text-xs font-medium">Customers</div>
                    </div>
                    <div className="bg-[#111] py-5 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                       <Store size={20} className="text-orange-400" />
                       <div className="text-white text-xs font-medium">Products</div>
                    </div>
                    <div className="bg-[#111] py-5 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors col-span-2">
                       <Book size={20} className="text-blue-400" />
                       <div className="text-white text-xs font-medium">New Transaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
