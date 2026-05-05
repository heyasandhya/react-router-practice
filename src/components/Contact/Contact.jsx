import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Form Data:", formData);
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", tel: "" });

      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">

        {/* LEFT PANEL */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl text-white overflow-hidden">
          
          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/30 blur-3xl"></div>

          <h1 className="text-4xl font-bold mb-3">Get in touch</h1>
          <p className="text-gray-300 mb-6">
            Let’s build something amazing together
          </p>

          <div className="space-y-5 text-gray-300 text-lg">

            {/* Address */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
              <span>Acme Inc, Street, State</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L9.21 10.79a16 16 0 0 0 4 4l1.62-1.15a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 2Z"/>
              </svg>
              <span>+44 1234567890</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              <span>info@acme.org</span>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-white shadow-2xl flex flex-col gap-5"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Form
          </h2>

          {/* NAME */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-600 
              peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
              Full Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-600 
              peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
              Email Address
            </label>
          </div>

          {/* PHONE */}
          <div className="relative">
            <input
              type="tel"
              name="tel"
              placeholder=" "
              value={formData.tel}
              onChange={handleChange}
              required
              className="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-600 
              peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
              Phone Number
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold 
            hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 
            transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-600 text-sm animate-pulse">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}