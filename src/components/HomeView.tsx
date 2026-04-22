import React from 'react';
import { motion } from 'motion/react';
import { Play, Clock, MoreHorizontal } from 'lucide-react';
import { PLAYLISTS, ARTISTS, SONGS, Playlist, Artist } from '@/src/constants';

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-xl font-medium text-melodies-text-primary tracking-tight">{title}</h2>
    <button className="text-[11px] font-bold text-melodies-accent hover:underline uppercase tracking-widest">
      See All
    </button>
  </div>
);

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    className="bg-melodies-surface p-4 rounded-xl hover:bg-melodies-surface-hover transition-all group border border-transparent hover:border-melodies-border cursor-pointer"
  >
    <div className="relative aspect-square mb-4 rounded-md overflow-hidden bg-zinc-900 shadow-lg">
      <img 
        src={playlist.coverUrl} 
        alt={playlist.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <h3 className="font-semibold text-[15px] mb-0.5 truncate text-melodies-text-primary">{playlist.title}</h3>
    <p className="text-xs text-melodies-text-secondary line-clamp-1">
      {playlist.description}
    </p>
  </motion.div>
);

interface ArtistCircleProps {
  artist: Artist;
}

const ArtistCircle = ({ artist }: ArtistCircleProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -4 }}
    className="flex flex-col items-center gap-4 group cursor-pointer shrink-0"
  >
    <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-xl border border-transparent group-hover:border-melodies-accent/30 transition-all">
      <img 
        src={artist.imageUrl} 
        alt={artist.name} 
        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="text-center">
      <h3 className="font-medium text-[14px] text-melodies-text-primary">{artist.name}</h3>
      <p className="text-[10px] text-melodies-text-secondary uppercase tracking-widest mt-0.5">Artist</p>
    </div>
  </motion.div>
);

export const HomeView = () => {
  return (
    <div className="flex flex-col gap-14 p-12 pr-16 overflow-y-auto custom-scrollbar h-full pb-40">
      <header>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.3em] text-melodies-accent mb-4 font-semibold"
        >
          Special Edition
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[52px] font-serif font-light text-melodies-text-primary mb-2 leading-none"
        >
          Good Evening, Aditya
        </motion.h1>
      </header>

      <section>
        <SectionHeader title="Recently Played" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAYLISTS.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
          {PLAYLISTS.map((playlist) => (
            <PlaylistCard key={playlist.id + '-2'} playlist={playlist} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Your Daily Mixes" />
        <div className="flex gap-10 overflow-x-auto pb-6 custom-scrollbar pr-10">
          {ARTISTS.map((artist) => (
            <ArtistCircle key={artist.id} artist={artist} />
          ))}
          {ARTISTS.map((artist) => (
             <ArtistCircle key={artist.id + '-2'} artist={artist} />
          ))}
        </div>
      </section>

      {/* Featured Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-melodies-accent/5 p-10 rounded-2xl border border-melodies-accent/10 flex items-center justify-between"
      >
        <div>
          <p className="text-[10px] text-melodies-accent mb-3 uppercase tracking-[0.2em] font-bold">Featured Playlist</p>
          <h3 className="font-serif text-4xl font-light mb-4">Curated For BTech Focus</h3>
          <p className="text-melodies-text-secondary text-sm max-w-md leading-relaxed">
            Low-fi and ambient tracks to keep you in the zone during long coding sessions.
          </p>
        </div>
        <button className="bg-melodies-accent text-black font-bold px-10 py-3 rounded-full text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:bg-white">
          LISTEN NOW
        </button>
      </motion.div>
    </div>
  );
};
;
