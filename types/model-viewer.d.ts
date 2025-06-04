<<<<<<< HEAD
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any;
  }
}




=======
// types/model-viewer.d.ts
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'ar'?: boolean | string;
        'poster'?: string;
        'shadow-intensity'?: number | string;
        'exposure'?: number | string;
        'camera-orbit'?: string;
        style?: React.CSSProperties;
      };
    }
  }
}
>>>>>>> d9a31ad2066a292fdc76e41de32010f7cb7ea351
