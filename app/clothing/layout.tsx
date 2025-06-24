import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Realistic 3D Clothing Models | Apparel for AR, VR & eCommerce – Vertical 3D Tech",
    description: "High-quality 3D clothing models for fashion, AR/VR, try-ons, and retail. Interactive, detailed, and royalty-free.",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/clothing',
    },
};

export default function ClothingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}