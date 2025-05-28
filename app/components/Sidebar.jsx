import React from "react";

export default function Sidebar() {
  const navItems = [
    { href: "/", src: "/shoes.png", alt: "Shoes", label: "Shoes" },
    { href: "/watch", src: "/wristwatch.png", alt: "Watch", label: "Watch" },
    { href: "/bag", src: "/bag.png", alt: "Bag", label: "Bag" },
    { href: "/clothing", src: "/clothing.png", alt: "Clothing", label: "Clothing" },
    { href: "/eyewear", src: "/sunglasses.png", alt: "Eyewear", label: "Eyewear" },
    { href: "/accessories", src: "/accessories.png", alt: "Accessories", label: "Accessories" },
    { href: "/furniture", src: "/wired-outline-1608-sofa-hover-pinch (1).png", alt: "Furniture", label: "Furniture" },
    { href: "/cooking", src: "/grill.png", alt: "Cooking", label: "Outdoor Kitchen" },
  ];

  return (
    <aside className="bg-gray-100 p-6 hidden lg:block side-bar">
      <h4 className="text-lg font-semibold mb-4">3D Assets</h4>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="flex items-center space-x-2 hover:text-blue-600">
              <img src={item.src} alt={item.alt} className="w-7 h-7" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
