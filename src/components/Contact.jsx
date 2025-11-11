import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto bg-[#FFECEC] rounded-lg p-10 md:p-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div data-reveal="left">
            <div className="flex items-center gap-3 mb-4">
              <img src="/public/assets/images/icon-5.svg" alt="icon" className="w-12" />
              <h2 className="text-3xl font-bold text-gray-800">Let’s Collaborate!</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether it’s design, ideas, or a new challenge<br />
              I’m always open to creating something inspiring together.
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">📧 Email:</span>{" "}
                <a href="mailto:putrighina87@gmail.com" className="text-gray-700 hover:text-pink-700 transition">
                  putrighina87@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">📸 Instagram:</span>{" "}
                <a href="https://instagram.com/Ginarezi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-700 transition">
                  @Ginarezi
                </a>
              </p>
              <p>
                <span className="font-medium">🌐 Website:</span>{" "}
                <a href="https://ginarezi.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-700 transition">
                  ginarezi.com
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} action="https://formspree.io/f/xrbrgqpn" method="POST" className="space-y-5" data-reveal="right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400" type="text" name="name" placeholder="Your Name *" required />
              <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400" type="email" name="email" placeholder="Your Email *" required />
            </div>

            <textarea className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400" name="message" placeholder="Write your message *" required rows="6"></textarea>

            <button type="submit" className="px-8 py-3 rounded-full border border-pink-500 text-pink-600 font-medium hover:bg-pink-500 hover:text-white transition">
              Send Message
            </button>

            {status === "SUCCESS" && <p className="text-green-600 font-medium mt-3">✅ Message sent successfully!</p>}
            {status === "ERROR" && <p className="text-red-600 font-medium mt-3">❌ Oops! Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
