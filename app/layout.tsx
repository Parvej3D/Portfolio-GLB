import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "High-Quality 3D Model Asset Creation | Portfolio – Vertical 3D Tech",
  description: "Explore our portfolio of custom-created, high-quality 3D models for e-commerce, AR/VR, and product visualization.",
  alternates: {
    canonical: 'https://portfolio-glb.vercel.app/',
  },
};




<link rel="canonical" href="https://vertical3dtech.com/your-page-slug" />

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f5f5]`}>
         <Header />
        {children}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-gray-100 text-sm border-t border-b" style={{ borderColor: '#F26226' }}>
          <div className="container mx-auto flex flex-wrap gap-12 justify-between px-5 py-[50px] bg-[#f5f5f5]">
            <div className="max-w-md">
              <div className="w-full">
                <a href="/" className="block">
                  <Image className="h-12 w-auto" src="/Logo-img.png" alt="Company Logo" width={500} height={53} priority />
                </a>
              </div>
              <p className="mt-4">
                Vertical 3D Tech – your creative partner in the eCommerce sector. We provide expert 3D modeling and rendering, animations, print-ready designs, and immersive augmented reality solutions to elevate your online presence.
              </p>
            </div>

            <div>
              <h3 className="text-base mb-5">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg width="16" height="16" fill="#F26226" className="mt-1" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                  <span>
                    3rd Floor, Plot No. F-88,<br />
                    Phase 7, Mohali, Punjab<br />
                    160055
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <a href="mailto:rajanthakur1948@gmail.com" className="hover:text-[#F26226] flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#F26226">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                    </svg>
                    rajanthakur1948@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="tel:+7307005770" className="hover:text-[#F26226] flex items-start gap-2">
                    <svg width="16" height="16" fill="#F26226" viewBox="0 0 512 512">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                    </svg>
                    +91 7307 005 770
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base mb-5">Follow us</h3>
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.facebook.com/vertical3dtech" className="group flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-[#F26226] transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="#F26226"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.1 288l14.2-92.7h-88.9V127.6c0-25.4 12.4-50.1 52.2-50.1h40.4V6.3S261.5 0 225.4 0c-73.4 0-121.5 44.4-121.5 124.7V195H22.9V288h81V512h100.2V288z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/vertical3dtech/" className="group hover:text-[#F26226] transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600 group-hover:text-[#F26226] transition-colors" fill="#F26226"
                      viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/vertical3dtech/" className="group hover:text-[#F26226] transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-600 group-hover:text-[#F26226] transition-colors" fill="#F26226"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9V448zM53.9 108.1C24.2 108.1 0 83.8 0 54.2S24.2 0 53.9 0s53.9 24.2 53.9 54.2-24.2 53.9-53.9 53.9zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.7V148.9h89V184h1.3c12.4-23.6 42.5-48.3 87.5-48.3 93.6 0 110.8 61.6 110.8 141.7V448z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@vertical3DTech" className="group hover:text-[#F26226] transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-600 group-hover:text-[#F26226] transition-colors" fill="#F26226"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-24-24.9-42.6-48.8-48.9C458.7 64 288 64 288 64S117.3 64 75.1 75.2C51.2 81.5 32.6 100.1 26.3 124.1 16 167.5 16 256 16 256s0 88.5 10.3 131.9c6.3 24 24.9 42.6 48.8 48.9C117.3 448 288 448 288 448s170.7 0 212.9-11.2c23.9-6.3 42.5-24.9 48.8-48.9C560 344.5 560 256 560 256s0-88.5-10.3-131.9zM232 336V176l142 80-142 80z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* Copyright Section */}
        <footer>
          <div className="text-center py-4 px-5 bg-[#f5f5f5]">
            <p className="text-sm m-0">
              © 2021 - {new Date().getFullYear()}
              <a href="https://vertical3dtech.com/" className="hover:text-[#F26226] ml-1">Vertical 3D Tech</a> | All Rights Reserved
            </p>
          </div>
        </footer>
        {/* Copyright Section */}
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      </body>
    </html >
  );
}
