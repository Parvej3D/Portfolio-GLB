'use client';

import React, { useEffect, useState } from 'react';
import MyModelViewer from './components/MyModelViewer';

export default function ShoesPage() {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  const models = [
    {
      src: '/models/sandal_glb.glb',
      name: 'Shoes Demo 1',
      date: '2025-05-20',
    },
    {
      src: '/models/nikeshoes.glb',
      name: 'Shoes Demo 2',
      date: '2025-05-21',
    },
    {
      src: '/models/femletes_shoes.glb',
      name: 'Shoes Demo 3',
      date: '2025-05-22',
    },
    {
      src: '/models/green shoe.glb',
      name: 'Shoes Demo 4',
      date: '2025-05-23',
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, models.length));
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative text-white py-[40px]">
        <div className="overlay-bg absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold">Shoes</h1>
        </div>
      </section>

      <div className="flex">
        <aside className="bg-gray-100 p-6 hidden lg:block side-bar">
          <h4 className="text-lg font-semibold mb-4">3D Assets</h4>
          <ul className="space-y-4">
            {[
              { href: '/', src: '/shoes.png', alt: 'Shoes', label: 'Shoes' },
              { href: '/watch', src: '/wristwatch.png', alt: 'Watch', label: 'Watch' },
              { href: '/bag', src: '/bag.png', alt: 'Bag', label: 'Bag' },
              { href: '/clothing', src: '/clothing.png', alt: 'Clothing', label: 'Clothing' },
              { href: '/eyewear', src: '/sunglasses.png', alt: 'Eyewear', label: 'Eyewear' },
              { href: '/accessories', src: '/accessories.png', alt: 'Accessories', label: 'Accessories' },
              { href: '/furniture', src: '/wired-outline-1608-sofa-hover-pinch (1).png', alt: 'Furniture', label: 'Furniture' },
              { href: '/cooking', src: '/grill.png', alt: 'Cooking', label: 'Outdoor Kitchen' },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex items-center space-x-2 hover:text-blue-600">
                  <img src={item.src} alt={item.alt} className="w-7 h-7" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex-1 px-4" style={{ padding: '20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {models.slice(0, visibleCount).map((model, index) => (
              <div key={index} 
              className="bg-white flex flex-col items-center rounded-md border border-[#ededed]" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <MyModelViewer
                  src={model.src}
                  alt={model.name}
                  auto-rotate
                  camera-controls
                  ar
                  shadow-intensity="1"
                  style={{ width: '100%', height: '70vh', backgroundColor: '#fff', borderRadius: '8px' }}
                />
                <div
                  className="w-full mt-2 p-4 text-center flex justify-between items-center rounded-none"
                  style={{ borderTop: '1px solid rgb(237, 237, 237)' }}
                >
                  <p className="font-semibold">{model.name}</p>
                  <p className="text-sm text-gray-500">{model.date}</p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < models.length && (
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
