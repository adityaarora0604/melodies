import React from 'react';
import { motion } from 'motion/react';
import { User, Settings, LogOut, Clock, Heart, Podcast, Edit3, Camera } from 'lucide-react';
import { PLAYLISTS, SONGS } from '@/src/constants';

export const LibraryView = () => {
  const [profilePic, setProfilePic] = React.useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (prev) => setProfilePic(prev.target?.result as string);
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex flex-col gap-14 p-12 pr-16 h-full overflow-y-auto custom-scrollbar pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-melodies-surface rounded-3xl p-10 border border-melodies-border flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
           <div className="relative">
             <div className="w-44 h-44 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border-2 border-white/5 shadow-2xl group-hover:border-melodies-accent/40 transition-all duration-500">
                {profilePic ? (
                  <img src={profilePic} className="w-full h-full object-cover" alt="Profile" />
                ) : (
                  <User className="w-20 h-20 text-white/10" />
                )}
             </div>
             <label className="absolute bottom-2 right-2 w-10 h-10 bg-melodies-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-lg border-4 border-melodies-surface">
               <Camera className="w-4 h-4 text-black" />
               <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
             </label>
           </div>

           <div className="text-center md:text-left z-10">
             <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
               <span className="text-[10px] font-bold uppercase tracking-widest text-black bg-melodies-accent px-3 py-1 rounded-full">Premium Student</span>
             </div>
             <h2 className="text-[44px] font-serif font-light mb-2 tracking-tight">Aditya Arora</h2>
             <p className="text-melodies-text-secondary text-sm mb-6 tracking-wide italic opacity-80">6 Public Playlists • 120 Liked Songs • B.Tech Student</p>
             <div className="flex items-center gap-4 justify-center md:justify-start">
               <button className="bg-white text-black font-bold px-10 py-3 rounded-full text-sm hover:bg-melodies-accent transition-all flex items-center gap-3">
                 <Edit3 className="w-4 h-4" />
                 Edit Profile
               </button>
               <button className="p-3 border border-melodies-border rounded-full hover:bg-white/5 transition-colors">
                 <Settings className="w-5 h-5 text-melodies-text-secondary" />
               </button>
             </div>
           </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-melodies-surface rounded-3xl p-10 border border-melodies-border flex flex-col justify-between shadow-xl">
           <div>
             <h3 className="font-medium text-lg mb-8 text-melodies-text-primary">Engagement</h3>
             <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-melodies-text-secondary">Avg. Session</span>
                  <span className="font-serif text-lg text-melodies-accent">42m</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-melodies-text-secondary">Archetype</span>
                  <span className="font-serif text-lg text-melodies-accent">Minimalist</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-melodies-text-secondary">Atmosphere</span>
                  <span className="font-serif text-lg text-melodies-accent">Refined</span>
                </div>
             </div>
           </div>
           <button className="flex items-center gap-3 text-xs font-bold text-red-700 uppercase tracking-[0.2em] hover:text-red-500 mt-12 transition-colors">
             <LogOut className="w-4 h-4" /> Terminate Session
           </button>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-4">
              <Heart className="w-5 h-5 text-melodies-accent fill-melodies-accent" />
              <h3 className="text-xl font-medium tracking-tight">Acquired Taste</h3>
           </div>
           <span className="text-[10px] uppercase tracking-widest text-melodies-accent cursor-pointer hover:underline">Full Collection</span>
        </div>
        <div className="bg-white/5 rounded-2xl border border-melodies-border overflow-hidden">
          {Object.values(SONGS).slice(0, 3).map((song, i) => (
            <div 
              key={song.id} 
              className="flex items-center gap-6 p-5 hover:bg-melodies-surface-hover transition-colors group cursor-pointer border-b border-white/5 last:border-0"
            >
              <img 
                src={song.coverUrl} 
                className="w-12 h-12 rounded shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" 
                alt={song.title} 
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-melodies-text-primary">{song.title}</h4>
                <p className="text-xs text-melodies-text-secondary tracking-wide">{song.artistName}</p>
              </div>
              <div className="text-[11px] font-mono text-melodies-text-secondary opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                 {song.duration}
              </div>
              <Heart className="w-4 h-4 text-melodies-accent fill-melodies-accent" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-8">
           <Podcast className="w-5 h-5 text-melodies-text-secondary" />
           <h3 className="text-xl font-medium tracking-tight">Audio Journals</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {['Only Murders in the Building', 'Dark House', 'Science Vs', 'The Daily'].map((pod) => (
             <div key={pod} className="bg-melodies-surface p-6 rounded-2xl border border-melodies-border hover:bg-melodies-surface-hover hover:-translate-y-1 transition-all cursor-pointer shadow-lg group">
               <div className="aspect-square bg-zinc-900 rounded-xl mb-6 flex items-center justify-center border border-white/5 group-hover:border-melodies-accent/20 transition-all duration-500">
                 <Podcast className="w-14 h-14 text-white/5 group-hover:text-melodies-accent/20 transition-all duration-700" />
               </div>
               <h4 className="text-sm font-bold leading-tight text-melodies-text-primary mb-1">{pod}</h4>
               <p className="text-[10px] text-melodies-text-secondary uppercase tracking-[0.15em]">Series</p>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
};
