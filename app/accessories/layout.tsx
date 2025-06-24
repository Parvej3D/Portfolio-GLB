import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "3D Clothing Accessories Models | Gloves, Socks, Hats & More – Vertical 3D Tech",
    description: "Realistic 3D clothing accessories for AR/VR, eCommerce, and demos. Royalty-free, detailed, and ready to use.",
    alternates: {
        canonical: 'https://portfolio-glb.vercel.app/accessories',
    },
};

export default function AccessoriesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
