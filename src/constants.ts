import { Song, Artist, Playlist } from './types';

export type { Song, Artist, Playlist };

export const ARTISTS: Artist[] = [
  {
    id: 'luna-vane',
    name: 'Luna Vane',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    genres: ['Dream Pop', 'Atmospheric'],
    popularSongs: ['neon-silhouettes', 'velvet-echoes']
  },
  {
    id: 'kayan-echo',
    name: 'Kayan Echo',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    genres: ['Electronic', 'Synthwave'],
    popularSongs: ['digital-heartbeat']
  },
  {
      id: 'elowen-star',
      name: 'Elowen Star',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
      genres: ['Acoustic', 'Folk'],
      popularSongs: ['pine-whispers']
  }
];

export const SONGS: Record<string, Song> = {
  'neon-silhouettes': {
    id: 'neon-silhouettes',
    title: 'Neon Silhouettes',
    artistId: 'luna-vane',
    artistName: 'Luna Vane',
    albumId: 'after-dark',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop',
    duration: '4:12'
  },
  'velvet-echoes': {
    id: 'velvet-echoes',
    title: 'Velvet Echoes',
    artistId: 'luna-vane',
    artistName: 'Luna Vane',
    albumId: 'midnight-monologue',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop',
    duration: '3:45'
  },
  'digital-heartbeat': {
    id: 'digital-heartbeat',
    title: 'Digital Heartbeat',
    artistId: 'kayan-echo',
    artistName: 'Kayan Echo',
    albumId: 'binary-soul',
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    duration: '5:10'
  },
  'pine-whispers': {
      id: 'pine-whispers',
      title: 'Pine Whispers',
      artistId: 'elowen-star',
      artistName: 'Elowen Star',
      albumId: 'forest-tales',
      coverUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
      duration: '3:28'
  }
};

export const PLAYLISTS: Playlist[] = [
  {
    id: 'ethereal-drift',
    title: 'Ethereal Drift',
    description: 'A curated selection of atmospheric textures and dream pop.',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop',
    songs: ['neon-silhouettes', 'velvet-echoes']
  },
  {
    id: 'binary-sunsets',
    title: 'Binary Sunsets',
    description: 'Where technology meets the warmth of the evening sun.',
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    songs: ['digital-heartbeat', 'pine-whispers']
  }
];
