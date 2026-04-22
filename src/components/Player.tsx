import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Pause, Heart } from 'lucide-react';
import { SONGS } from '@/src/constants';
import { motion } from 'motion/react';

interface PlayerProps {
  currentSongId?: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Player = ({ currentSongId, isPlaying, onTogglePlay }: PlayerProps) => {
  // Mocking song progress
  const [progress, setProgress] = React.useState(35);

  const currentSong = currentSongId ? SONGS[currentSongId] : null;

  return (
    <div className="h-[96px] bg-[#0a0a0a]/85 backdrop-blur-2xl border-t border-melodies-border px-8 flex items-center justify-between">
      {/* Current Song Info */}
      <div className="flex items-center gap-4 w-[30%]">
        {currentSong ? (
          <>
            <div className="w-[56px] h-[56px] bg-melodies-surface rounded-md overflow-hidden relative group shadow-lg">
              <img 
                src={currentSong.coverUrl} 
                alt={currentSong.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-melodies-text-primary hover:underline cursor-pointer transition-all truncate">
                {currentSong.title}
              </h4>
              <p className="text-xs text-melodies-text-secondary hover:text-melodies-text-primary cursor-pointer transition-all truncate">
                {currentSong.artistName}
              </p>
            </div>
            <Heart className="w-4 h-4 text-melodies-accent fill-melodies-accent ml-4 shrink-0 cursor-pointer" />
          </>
        ) : (
          <div className="text-melodies-text-secondary text-sm italic">Nothing playing</div>
        )}
      </div>

      {/* Controls */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-8">
          <Shuffle className="w-4 h-4 text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer" />
          <SkipBack className="w-5 h-5 fill-current text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer" />
          <button 
            onClick={onTogglePlay}
            className="w-10 h-10 rounded-full bg-melodies-text-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-black fill-current" />
            ) : (
              <Play className="w-5 h-5 text-black fill-current ml-0.5" />
            )}
          </button>
          <SkipForward className="w-5 h-5 fill-current text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer" />
          <Repeat className="w-4 h-4 text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer" />
        </div>
        
        <div className="flex items-center gap-4 w-[400px] mt-1">
          <span className="text-[11px] text-melodies-text-secondary w-10 text-right font-mono tracking-tight">1:24</span>
          <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden group cursor-pointer">
             <div 
              className="absolute h-full bg-melodies-accent transition-all duration-300" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <span className="text-[11px] text-melodies-text-secondary w-10 font-mono tracking-tight">4:02</span>
        </div>
      </div>

      {/* Volume & Extra */}
      <div className="flex items-center gap-5 w-[30%] justify-end">
        <Volume2 className="w-5 h-5 text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer shrink-0" />
        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden self-center">
          <div className="h-full bg-melodies-text-secondary w-2/3" />
        </div>
        <Maximize2 className="w-4 h-4 text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer ml-1" />
      </div>
    </div>
  );
};
