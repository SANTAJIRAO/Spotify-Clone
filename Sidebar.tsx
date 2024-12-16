import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="text-white mb-8">
        <h1 className="text-2xl font-bold mb-8">Spotify</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <Home size={24} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <Search size={24} />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white">
            <Library size={24} />
            <span>Your Library</span>
          </a>
        </nav>
      </div>
      
      <div className="mt-8">
        <div className="flex flex-col space-y-4">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Plus className="p-1 bg-gray-300 text-black rounded-sm" size={24} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Heart className="p-1 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-sm" size={24} />
            <span>Liked Songs</span>
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="text-sm text-gray-400">
            {['Workout Mix', 'Chill Vibes', 'Road Trip', 'Party Hits'].map((playlist) => (
              <div key={playlist} className="py-2 hover:text-white cursor-pointer">
                {playlist}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;