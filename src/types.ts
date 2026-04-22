export interface Song {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  albumId: string;
  coverUrl: string;
  audioUrl?: string;
  duration: string;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
  popularSongs: string[];
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  songs: string[];
}
