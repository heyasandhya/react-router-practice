import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-12"
                alt="Logo"
              />
              <span className="text-white text-xl font-bold">
                Sandhya.dev
              </span>
            </Link>

            <p className="mt-4 text-sm text-gray-400">
              Building modern web experiences with React, AI, and full-stack
              development.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="text-white font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h2 className="text-white font-semibold mb-4">Connect</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/heyasandhya"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER / CTA */}
          <div>
            <h2 className="text-white font-semibold mb-4">
              Stay Updated
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Get updates about new projects and features.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-sm focus:outline-none"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 rounded-r-lg text-white text-sm">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 <span className="text-white font-medium">Sandhya Singh</span>. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4 mt-4 md:mt-0">

            <a href="#" className="hover:text-orange-400 transition">
              🌐
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              🐦
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              💼
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}