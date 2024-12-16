import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=150&h=150&fit=crop"
            alt="Album Cover"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="text-sm font-semibold">Summer Nights</h4>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-md w-full">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
              <Play size={24} fill="black" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={20} />
            </button>
          </div>
          
          <div className="w-full flex items-center space-x-2 mt-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Volume2 size={20} />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="w-2/3 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;