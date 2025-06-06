"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setMobileOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-5 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="block">
                    <Image
                        src="/Logo-img.png"
                        alt="Vertical 3D Tech Logo"
                        width={250}
                        height={40}
                        className="h-12 w-100% h-auto"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <Link href="tel:+7307005770" className="p-2 rounded-full border border-white hover:border-[#F26226] border transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#F26226" viewBox="0 0 24 24">
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.11-.21c1.21.49 2.53.76 3.89.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 21.53 2.47 13.71 2.47 4a1 1 0 011-1H7a1 1 0 011 1c0 1.36.26 2.68.76 3.89a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
                        </svg>
                    </Link>

                    <Link href="mailto:theverticaltech3@gmail.com" className="p-2 rounded-full border border-white hover:border-[#F26226] border transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#F26226" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                        </svg>
                    </Link>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden flex flex-col space-y-1"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className="w-6 h-0.5" style={{ backgroundColor: "#F26226" }} />
                    <span className="w-6 h-0.5" style={{ backgroundColor: "#F26226" }} />
                    <span className="w-6 h-0.5" style={{ backgroundColor: "#F26226" }} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden px-5 pb-8 text-center">
                    <ul className="space-y-2 text-sm font-medium">
                        <li className={`pb-[10px] ${activeLink === "/watch" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/watch")}
                        >
                            <Link href="/watch">Watch</Link></li>
                        <li className={`pb-[10px] ${activeLink === "/bag" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/bag")}
                        >
                            <Link href="/bag">Bag</Link></li>
                        <li className={`pb-[10px] ${activeLink === "/clothing" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/clothing")}
                        >
                            <Link href="/clothing">Clothing</Link></li>
                        <li className={`pb-[10px] ${activeLink === "/eyewear" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/eyewear")}
                        >
                            <Link href="/eyewear">Eyewear</Link></li>
                        <li className={`pb-[10px] ${activeLink === "/accessories" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/accessories")}
                        >
                            <Link href="/accessories">Accessories</Link></li>
                        <li className={`pb-[10px] ${activeLink === "/furniture" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/furniture")}
                        >
                            <Link href="/furniture">Furniture</Link></li>
                        <li className={`pb-[10px] ${activeLink === "/cooking" ? "text-[#F26226]" : "text-black"
                            }`}
                            style={{ borderBottom: "1px solid #F26226" }}
                            onClick={() => handleLinkClick("/cooking")}
                        >
                            <Link href="/cooking">Cooking</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
