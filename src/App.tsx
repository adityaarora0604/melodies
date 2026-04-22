import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { HomeView } from './components/HomeView';
import { DiscoverView } from './components/DiscoverView';
import { LibraryView } from './components/LibraryView';
import { ARTISTS } from './constants';
import { ChevronLeft, ChevronRight, User, Bell, Play } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [view, setView] = React.useState('home');
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showOnboarding, setShowOnboarding] = React.useState(true);
  const [step, setStep] = React.useState(1); // 1: Hero, 2: Artist Selection

  const handleStart = () => setStep(2);
  const handleFinishOnboarding = () => setShowOnboarding(false);

  if (showOnboarding) {
    return (
      <div className="h-screen w-full bg-melodies-bg flex items-center justify-center overflow-hidden font-sans">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center relative z-10 px-6 max-w-2xl"
            >
              <motion.div 
                animate={{ 
                  opacity: [0.1, 0.15, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-melodies-accent blur-[140px] -z-10 rounded-full" 
              />
              <h1 className="text-[120px] font-serif italic text-melodies-accent mb-4 tracking-tighter leading-none opacity-90">Melodies</h1>
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-melodies-text-secondary mb-14">Refined Audio Architecture</p>
              <button 
                onClick={handleStart}
                className="bg-melodies-accent text-black font-bold px-12 py-4 rounded-full text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto group tracking-widest"
              >
                <span>ENTER ARCHIVE</span>
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current text-melodies-accent ml-0.5" />
                </div>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl w-full px-12 py-16 bg-melodies-surface rounded-[32px] border border-melodies-border shadow-2x-strong relative mx-6"
            >
              <div className="text-center mb-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-melodies-accent mb-4 font-bold">Personalization</p>
                <h2 className="text-4xl font-serif font-light mb-4 text-melodies-text-primary italic">Select Your Curators</h2>
                <p className="text-melodies-text-secondary text-sm">Choose at least 3 to initialize your unique sound profile.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16 max-h-[380px] overflow-y-auto custom-scrollbar pr-4">
                {ARTISTS.map((artist) => (
                  <motion.div 
                    whileHover={{ y: -5 }}
                    key={artist.id} 
                    className="flex flex-col items-center gap-4 cursor-pointer group"
                  >
                    <div className="relative">
                      <img 
                        src={artist.imageUrl} 
                        className="w-24 h-24 rounded-full object-cover border-2 border-transparent group-hover:border-melodies-accent/50 transition-all shadow-2xl grayscale group-hover:grayscale-0 duration-500"
                        alt={artist.name}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-center tracking-widest uppercase text-melodies-text-secondary group-hover:text-melodies-text-primary transition-colors">{artist.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center border-t border-white/5 pt-12">
                <button 
                  onClick={handleFinishOnboarding}
                  className="bg-white text-black font-bold px-16 py-3.5 rounded-full hover:bg-melodies-accent transition-all shadow-xl text-sm tracking-widest uppercase"
                >
                  Save & Initialize
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-melodies-bg overflow-hidden font-sans text-melodies-text-primary">
      <Sidebar currentView={view} onViewChange={setView} />
      
      <main className="flex-1 flex flex-col relative">
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-12 z-20">
          <div className="flex gap-4">
            <button className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-melodies-text-secondary" />
            </button>
            <button className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-melodies-text-secondary" />
            </button>
          </div>

          <div className="flex items-center gap-10">
            <button className="text-[11px] font-bold tracking-[0.2em] text-melodies-accent hover:text-white transition-colors uppercase">
              Exclusive Access
            </button>
            <Bell className="w-5 h-5 text-melodies-text-secondary hover:text-white cursor-pointer transition-colors" />
            <div className="flex items-center gap-4 cursor-pointer group">
              <span className="text-xs font-bold tracking-widest text-melodies-text-secondary group-hover:text-white transition-colors uppercase">Aditya</span>
              <div className="w-9 h-9 rounded-full bg-melodies-surface flex items-center justify-center overflow-hidden border border-melodies-border group-hover:border-melodies-accent transition-all">
                <User className="w-5 h-5 text-melodies-text-secondary" />
              </div>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {view === 'home' && <HomeView />}
              {view === 'discover' && <DiscoverView />}
              {view === 'library' && <LibraryView />}
            </motion.div>
          </AnimatePresence>
          
          {/* Theme Gradient Overlay */}
          <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-[#15110e] via-transparent to-transparent opacity-40" />
        </div>

        {/* Persistent Player */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <Player 
            currentSongId="neon-silhouettes" 
            isPlaying={isPlaying} 
            onTogglePlay={() => setIsPlaying(!isPlaying)} 
          />
        </div>
      </main>
    </div>
  );
}
