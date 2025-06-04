   import React, { useRef, useEffect } from 'react';
   import '@google/model-viewer';

   const MyModelViewer = ({ src, alt, ...props }) => {
     const modelViewerRef = useRef(null);

     useEffect(() => {
       const modelViewer = modelViewerRef.current;

       if (modelViewer) {
           modelViewer.addEventListener('load', () => {
           // Optional: Perform actions after the model loads
             console.log('Model loaded successfully');
           });
       }
     }, []);

     return (
       <model-viewer
         ref={modelViewerRef}
         src={src}
         alt={alt}
         {...props}
       >
       </model-viewer>
     );
   };

   export default MyModelViewer;