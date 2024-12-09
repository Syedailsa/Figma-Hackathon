'use client';

import React from "react";

export default function Footer() {
  return (
    <footer className="md:bg-white p-6">
      {/* Logo and Vision Section */}
      <div className="mb-8">
        <img src="/Logo.png" alt="MORENT" className="h-8 w-auto mb-3" />
        <p className="text-[#90A3BF] text-sm leading-relaxed">
          Our vision is to provide convenience<br />
          and help increase your sales business.
        </p>
      </div>

      {/* About Section */}
      <div className="about-section mb-8">
        <h2 className="text-[#1A202C] font-semibold text-base mb-4">About</h2>
        <nav className="space-y-3">
          <a href="#" className="block text-[#90A3BF] text-sm">How it works</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Featured</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Partnership</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Bussiness Relation</a>
        </nav>
      </div>

      {/* Community Section */}
      <div className="community-section mb-8">
        <h2 className="text-[#1A202C] font-semibold text-base mb-4">Community</h2>
        <nav className="space-y-3">
          <a href="#" className="block text-[#90A3BF] text-sm">Events</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Blog</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Podcast</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Invite a friend</a>
        </nav>
      </div>

      {/* Socials Section */}
      <div className="social-section mb-8">
        <h2 className="text-[#1A202C] font-semibold text-base mb-4">Socials</h2>
        <nav className="space-y-3">
          <a href="#" className="block text-[#90A3BF] text-sm">Discord</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Instagram</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Twitter</a>
          <a href="#" className="block text-[#90A3BF] text-sm">Facebook</a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 border-t border-[#C3D4E966]">
        <p className="text-[#1A202C] text-xs mb-3">©2022 MORENT. All rights reserved</p>
        <div className="flex gap-6">
          <a href="#" className="text-[#1A202C] text-xs">Privacy & Policy</a>
          <a href="#" className="text-[#1A202C] text-xs">Terms & Condition</a>
        </div>
      </div>

      {/* Responsive Layout */}
      <style jsx>{`
        footer {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          footer {
            padding: 2rem 5rem;
            grid-template-columns: repeat(4, 1fr);
          }

          footer > div:not(:last-child) {
            margin-bottom: 0;
          }

          footer > div:last-child {
            grid-column: 1 / -1;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }

        @media (max-width: 767px) {
          footer {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr)
            gap: 1rem;
          }

          .about-section {
            grid-column: 1 / 2;
            grid-row: 2
          }

          .social-section {
            grid-column: 2 / 3;
            grid-row: 2
          }

          .community-section {
            grid-column: 1 / 3;
            grid-row: 3
          }
        }
      `}</style>
    </footer>
  );
}

