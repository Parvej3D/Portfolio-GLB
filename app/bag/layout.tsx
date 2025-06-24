import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Photorealistic 3D Bag Models | eCommerce & AR Ready – Vertical 3D Tech",
    description: "High-quality 3D bag models for eCommerce, demos, and AR/VR. Realistic, interactive, and royalty-free",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/bag',
    },
};

export default function BagLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}