'use client';

import React, { useEffect, useState } from 'react';

const About = () => {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  const modelPaths = [
    '/models/love_joy_bed.glb',
    '/models/nike_shoes_2.glb',
    '/models/shoes_04.glb',
    '/models/beach_chair_02.glb',
    '/models/brunie_love_seat_sofa.glb',
    '/models/desk.glb',
    '/models/havana.glb',
    '/models/lumara_sofa.glb',
    '/models/magnus.glb',
    '/models/wall_mount_white.glb',
    '/models/wall_mount.glb'
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 2, modelPaths.length));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {modelPaths.slice(0, visibleCount).map((src, index) => (
          // <model-viewer
          //   key={index}
          //   src={src}
          //   alt={`3D model ${index + 1}`}
          //   auto-rotate
          //   camera-controls
          //   ar
          //   style={{ width: '100%', height: '400px', backgroundColor: '#f0f0f0' }}
          // ></model-viewer>
        ))}
      </div>

      {visibleCount < modelPaths.length && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default About;

