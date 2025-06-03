'use client';

import React, { useEffect, useState } from 'react';

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
      src: '/models/nike_shoes_2.glb',
      name: 'Shoes Demo 2',
      date: '2025-05-21',
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
              <div key={index} className="bg-white shadow flex flex-col items-center">
                <model-viewer
                  src={model.src}
                  alt={model.name}
                  auto-rotate
                  camera-controls
                  ar
                  style={{ width: '100%', height: '400px', backgroundColor: '#fff' }}
                ></model-viewer>
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
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
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
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

