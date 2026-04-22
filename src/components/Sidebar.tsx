import React from 'react';
import { Home, Search, Library, PlusCircle, Heart, Music2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-4 px-4 py-3 w-full text-sm font-medium transition-colors rounded-lg",
      active 
        ? "text-white bg-white/10" 
        : "text-melodies-text-muted hover:text-white"
    )}
  >
    <Icon className="w-6 h-6" />
    <span>{label}</span>
  </button>
);

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  return (
    <div className="flex flex-col h-full w-[240px] bg-black border-r border-melodies-border p-8 gap-12">
      <div className="px-2">
        <h1 className="text-3xl font-serif italic font-light tracking-tight text-melodies-accent">Melodies</h1>
      </div>

      <nav className="flex flex-col gap-6">
        <SidebarItem 
          icon={Home} 
          label="Home" 
          active={currentView === 'home'} 
          onClick={() => onViewChange('home')}
        />
        <SidebarItem 
          icon={Search} 
          label="Discover" 
          active={currentView === 'discover'} 
          onClick={() => onViewChange('discover')}
        />
        <SidebarItem 
          icon={Library} 
          label="Library" 
          active={currentView === 'library'} 
          onClick={() => onViewChange('library')}
        />
      </nav>

      <div className="mt-auto border-t border-melodies-border pt-8 flex flex-col gap-6">
        <div className="flex items-center gap-4 text-melodies-text-secondary hover:text-melodies-text-primary transition-colors cursor-pointer text-sm">
          <div className="w-6 h-6 border border-dashed border-melodies-text-secondary rounded flex items-center justify-center text-xs">+</div>
          <span>Create Playlist</span>
        </div>
        <div className="text-xs text-melodies-text-secondary space-y-4">
          <p className="hover:text-melodies-text-primary cursor-pointer transition-colors">Late Night Sessions</p>
          <p className="hover:text-melodies-text-primary cursor-pointer transition-colors">Design Focus</p>
          <p className="hover:text-melodies-text-primary cursor-pointer transition-colors">2021 Archives</p>
        </div>
      </div>
    </div>
  );
};
