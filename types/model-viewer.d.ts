// types/model-viewer.d.ts
import React from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      autoRotate?: boolean | string;
      cameraControls?: boolean | string;
      ar?: boolean | string;
      poster?: string;
      shadowIntensity?: number | string;
      exposure?: number | string;
      environmentImage?: string;
      [key: string]: any;
    };
  }
}


