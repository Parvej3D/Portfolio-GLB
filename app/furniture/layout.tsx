import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Photorealistic 3D Furniture Models | Interior & AR Ready – Vertical 3D Tech",
    description: "High-quality 3D furniture models for interior design, eCommerce, and AR/VR. Realistic, interactive, and royalty-free.",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/furniture',
    },
};

export default function FurnitureLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}