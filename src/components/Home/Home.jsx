import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">

      <aside className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white rounded-xl sm:mx-16 mx-2 py-16 shadow-lg">

        <div className="max-w-7xl px-6 mx-auto flex flex-col md:flex-row items-center gap-10">

          <div className="max-w-xl text-center md:text-left space-y-6">

            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
              Crafting Modern{" "}
              <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h2>

            <p className="text-gray-600">
              I build scalable and high-performance web applications using React.
            </p>

            <Link
              to="/"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg"
            >
              Explore →
            </Link>

          </div>

          <img
            className="w-72 rounded-xl shadow-lg"
            src="https://cdn.displate.com/artwork/270x380/2024-09-18/8f7f25b0-3c1a-42b8-87b7-2704d25f791a.jpg"
            alt="dev"
          />

        </div>
      </aside>

    </div>
  );
}