import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "High-Quality 3D Watch Models | Realistic Product Visuals – Vertical 3D Tech",
    description: "Premium 3D watch models for eCommerce, AR/VR, and showcases. Realistic, interactive, and royalty-free assets.",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/watch',
    },
};

export default function WatchLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}