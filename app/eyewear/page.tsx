'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import MyModelViewer from '../components/MyModelViewer';

export default function ShoesPage() {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  const modelPaths = [
    '/models/cordelia-bronze-oversized-sunglasses.glb',
    '/models/black.glb',
    '/models/Orange_Goggle_2k.glb',
    '/models/clear_lenses_red_border_2k.glb',
    '/models/milky_tort.glb',
    '/models/brown tort.glb',
    '/models/sunglasses (2).glb',
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, modelPaths.length));
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative text-white py-[40px]">
        <div className="overlay-bg absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold">Eyewear</h1>
        </div>
      </section>

      <div className="flex">
        <Sidebar />

        <section className="flex-1 px-4" style={{ padding: '20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modelPaths.slice(0, visibleCount).map((src, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center rounded-md border border-[#ededed]" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                <MyModelViewer
                  src={src}
                  alt={`3D Shoe Model ${index + 1}`}
                  auto-rotate
                  camera-controls
                  ar
                  shadow-intensity="1"
                  style={{ width: '100%', height: '70vh', backgroundColor: '#fff', borderRadius: '8px' }}
                />
                <div className="w-full mt-2 p-4 text-center flex justify-between items-center rounded-none" style={{ borderTop: '1px solid rgb(237, 237, 237)' }}>
                  <p className="font-semibold">Eyewear Demo {index + 1}</p>
                  <p className="text-sm text-gray-500">05-26-2025</p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < modelPaths.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-orange-600 transition cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
