import React, { useState } from 'react';

export default function App() {
  // 1. STATE: Keeps track of which screen the user is currently looking at
  const [currentScreen, setCurrentScreen] = useState<'HOME' | 'COOK'>('HOME');

  return (
    // Outer page wrapper - Centers your phone display vertically and horizontally on the screen
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* 2. PHONE EMULATOR: The main box representing our mobile app viewport */}
      <div className="w-full max-w-390px h-720px bg-white rounded-[40px] border-[5px] border-[#1A1C1E] shadow-[8px_8px_0px_0px_#1A1C1E] relative flex flex-col justify-between overflow-hidden">
        
        {/* Device Notch decoration at the top */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1A1C1E] rounded-full z-10" />

        {/* 3. CONTENT CONTAINER: Scrollable page area */}
        <div className="flex-1 overflow-y-auto p-6 pt-10">
          
          {/* SCREEN 1: HOME PAGE */}
          {currentScreen === 'HOME' && (
            <div className="text-center mt-6">
              <span className="text-3xl">🍳</span>
              {/* Using your customized Font-Display ("Space Grotesk") and bold styling */}
              <h1 className="text-2xl font-display font-black text-[#1A1C1E] mt-2 tracking-tight">
                DORM ULAM
              </h1>
              <p className="text-gray-500 font-semibold text-xs mt-1">
                Tipid and Masarap recipes for students!
              </p>

              {/* Sizzling Hotdog Card */}
              <div className="mt-8 bg-[#2EE5FF] border-[3px] border-[#1A1C1E] p-4 rounded-3xl text-left shadow-[4px_4px_0px_0px_#1A1C1E]">
                <h3 className="font-display font-black text-slate-900 text-sm">Sizzling Hotdog</h3>
                <p className="text-[11px] text-slate-800 font-semibold mt-1">Sweet & glazy dorm classic favorite!</p>
              </div>
            </div>
          )}

          {/* SCREEN 2: COOK PAGE */}
          {currentScreen === 'COOK' && (
            <div className="mt-6">
              <h1 className="text-lg font-display font-black text-slate-900 tracking-tight">
                MY PANTRY
              </h1>
              <p className="text-xs text-gray-500 mt-1">Add your available ingredients:</p>
              
              {/* Ingredient list placeholder box */}
              <div className="mt-4 border-2 border-dashed border-[#1A1C1E] rounded-2xl p-6 text-center text-gray-400">
                <p className="text-xs font-bold text-gray-700">🛒 Cart is empty</p>
                <p className="text-[10px] text-gray-400 mt-1">Add items below!</p>
              </div>
            </div>
          )}

        </div>

        {/* 4. FOOTER: Quick-action screen switcher buttons */}
        <div className="bg-[#1A1C1E] p-4 flex justify-around border-t-2 border-white/10">
          <button 
            onClick={() => setCurrentScreen('HOME')}
            className={`text-xs font-black tracking-wider transition-colors ${
              currentScreen === 'HOME' ? 'text-[#FF7A2E]' : 'text-white/40'
            }`}
          >
            HOME
          </button>
          
          <button 
            onClick={() => setCurrentScreen('COOK')}
            className={`text-xs font-black tracking-wider transition-colors ${
              currentScreen === 'COOK' ? 'text-[#2EE5FF]' : 'text-white/40'
            }`}
          >
            COOK
          </button>
        </div>

      </div>

    </div>
  );
}