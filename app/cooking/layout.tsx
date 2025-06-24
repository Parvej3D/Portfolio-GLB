import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "3D Outdoor Kitchen Models | Realistic & AR-Ready Visuals – Vertical 3D Tech",
    description: "Premium 3D outdoor kitchen models for eCommerce, AR/VR, and visualization. Realistic, detailed, and royalty-free assets.",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/cooking',
    },
};

export default function CookingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}