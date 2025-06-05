import React, { useRef, useEffect } from 'react';

const MyModelViewer = ({ src, alt, ...props }) => {
  const modelViewerRef = useRef(null);
  
  return (
    <model-viewer
      ref={modelViewerRef}
      src={src}
      alt={alt}
      ar
      auto-rotate
      camera-controls
      {...props}
    />
  );
};

export default MyModelViewer;
