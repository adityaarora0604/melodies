import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export const DiscoverView = () => {
  return (
    <div className="flex flex-col gap-14 p-12 pr-16 h-full overflow-y-auto custom-scrollbar pb-40">
      <div className="max-w-5xl">
        <h2 className="text-[40px] font-serif font-light mb-10 tracking-tight text-melodies-text-primary">Discover New Sound</h2>
        
        {/* Search Bar */}
        <div className="relative group mb-16">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-melodies-text-secondary group-focus-within:text-melodies-accent transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search artists, songs, or podcasts..."
            className="w-full bg-white/5 border border-melodies-border rounded-full py-4 pl-14 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-melodies-accent/30 transition-all placeholder:text-melodies-text-secondary"
          />
        </div>

        {/* Categories */}
        <div>
           <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-melodies-accent mb-8">Curated Disciplines</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Acoustic', 'Modernism', 'Chill-Step', 'Boutique', 'Global', 'Techno', 'Ambient', 'Classic'].map((cat, i) => (
                <motion.div 
                  key={cat} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-video bg-melodies-surface rounded-xl p-6 flex flex-col justify-between overflow-hidden border border-melodies-border cursor-pointer hover:bg-melodies-surface-hover hover:-translate-y-1 transition-all shadow-md group"
                >
                  <h4 className="font-semibold text-base text-melodies-text-primary group-hover:text-melodies-accent transition-colors">{cat}</h4>
                  <div className="w-8 h-1 bg-melodies-accent/20 group-hover:bg-melodies-accent transition-colors" />
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
