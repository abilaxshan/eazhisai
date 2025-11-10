import React from 'react';

export default function Announcement() {
  return (
    <div className="bg-gray-900 text-gray-100 text-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zM2 8h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"/></svg>
            <span>eazhisai@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/></svg>
            <span>+94 70 5738946</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6v1h-2V8a4 4 0 10-8 0v1H4V8a6 6 0 016-6z"/></svg>
            <span>மலைமகள் வீதி, கல்முனை
, உப்புவெளி</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-gray-300 hover:text-white">facebook</a>
          <a href="#" className="text-gray-300 hover:text-white">x</a>
          <a href="#" className="text-gray-300 hover:text-white">instagram</a>
          <a href="#" className="text-gray-300 hover:text-white">linkedin</a>
        </div>
      </div>
    </div>
  );
}
