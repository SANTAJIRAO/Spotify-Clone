import React from 'react';
import { Play, Heart } from 'lucide-react';

const MainContent = () => {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "The biggest hits right now",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop"
    },
    {
      title: "Deep Focus",
      description: "Keep calm and focus with this music",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black text-white p-8 overflow-auto">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Good afternoon</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Heart size={24} />
          </button>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Made for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.title}
              className="bg-gray-900 bg-opacity-60 p-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              <div className="relative group">
                <img 
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-105">
                  <Play fill="white" size={24} />
                </button>
              </div>
              <h3 className="font-semibold mb-1">{playlist.title}</h3>
              <p className="text-sm text-gray-400">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-900 bg-opacity-60 p-3 rounded-lg hover:bg-gray-800 transition duration-300">
              <img 
                src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=150&h=150&fit=crop`}
                alt="Album cover"
                className="w-full aspect-square object-cover rounded-md mb-3"
              />
              <p className="text-sm font-medium truncate">Daily Mix {i + 1}</p>
              <p className="text-xs text-gray-400">Mix of songs you love</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;