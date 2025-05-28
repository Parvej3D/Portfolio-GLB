// model-viewer.d.ts
import React from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'auto-rotate'?: boolean;
      'camera-controls'?: boolean;
      ar?: boolean;
      poster?: string;
      style?: React.CSSProperties;
      [key: string]: any;
    };
  }
}
