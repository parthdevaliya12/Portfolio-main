import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("parthdevaliya.official@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white px-4 sm:px-8 lg:px-16 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-cyan-400"
        >
          PD.
        </motion.h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
          Crafting modern, scalable and visually stunning web experiences.
        </p>

        {/* Email Copy */}
        <div className="mt-6">
          <button
            onClick={copyEmail}
            className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:bg-cyan-500/20 transition"
          >
            {copied ? "Email Copied ✓" : "Copy Email"}
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8 text-lg">
          {[
            {
              icon: FaGithub,
              link: "https://github.com/parthdevaliya12",
            },
            {
              icon: FaLinkedin,
              link: "https://linkedin.com/in/parthdevaliya12",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 
        hover:bg-cyan-500/20 transition shadow-md hover:shadow-cyan-500/20"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-3">
          <p>© {new Date().getFullYear()} Parth Devaliya</p>
          <p>Built with React & Tailwind</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 p-3 bg-cyan-500 text-black rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
