import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "High-Quality 3D Eyewear Models | Virtual Try-On Ready – Vertical 3D Tech",
    description: "Photorealistic 3D eyewear models for AR try-ons, eCommerce, and showcases. Realistic, interactive, and royalty-free assets.",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/eyewear',
    },
};

export default function EyewearLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}