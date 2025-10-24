import React from 'react';
import { Trophy, Users, Medal } from 'lucide-react';
import { futsalTeam } from '../mock';

export const Futsal = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 animate-scale-up" />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">تیم فوتسال لیسه فراسو</h1>
          <p className="text-xl text-green-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {futsalTeam.achievements}
          </p>
        </div>
      </div>

      {/* Team Photo */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img
                src={futsalTeam.teamImage}
                alt="تیم فوتسال"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coach & Players */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Coach */}
            <div className="mb-12 text-center">
              <div className="inline-block px-6 py-3 bg-green-600 text-white rounded-full mb-4">
                <Users className="w-5 h-5 inline-block ml-2" />
                <span className="font-bold">{futsalTeam.coach}</span>
              </div>
            </div>

            {/* Players List */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
                <Medal className="w-8 h-8 text-amber-500" />
                بازیکنان تیم
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {futsalTeam.players.map((player) => (
                  <div
                    key={player.number}
                    className="flex items-center gap-4 p-4 bg-gradient-to-l from-green-50 to-white rounded-xl border-r-4 border-green-500 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl">
                      {player.number}
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Banner */}
      <div className="py-16 bg-gradient-to-br from-amber-500 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">افتخارات ورزشی</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">1</div>
                <div className="text-lg">قهرمانی لیگ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">3</div>
                <div className="text-lg">جام‌های قهرمانی</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">15</div>
                <div className="text-lg">بازیکن برتر</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};