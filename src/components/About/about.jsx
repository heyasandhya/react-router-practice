import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* TEXT CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Crafting Scalable & Modern{" "}
              <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              I specialize in building high-performance, scalable, and user-centric web
              applications using modern technologies like React. My focus is on writing
              clean, maintainable code while delivering seamless user experiences.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed">
              From intuitive UI design to optimized application performance, I ensure every
              product is crafted with precision, consistency, and attention to detail.
            </p>

            <button className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-300/40 transition duration-300">
              View Projects
            </button>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-orange-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <img
              src="https://media.istockphoto.com/id/1070519266/vector/discussion-and-communication-in-the-office.jpg?s=612x612&w=0&k=20&c=IkTrf2AMUQhV6BctkCyHqjymmS8LSwI6tAcb94xEdNI="
              alt="Team working"
              className="relative rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}