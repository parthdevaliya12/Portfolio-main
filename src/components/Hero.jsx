import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("parthdevaliya.official@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-16 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <span className="inline-block mb-4 px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-400">
            🚀 Available for Work
          </span>

          {/* Heading */}
          <h1 className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Parth Devaliya
            </span>
          </h1>

          {/* Typing */}
          <p className="mt-3 text-xs sm:text-sm md:text-base font-mono text-cyan-300">
            &gt;{" "}
            <ReactTyped
              strings={["Full Stack Developer", "Web Enthusiast", "Programmer"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            I build scalable, high-performance applications using React,
            Node.js, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold"
            >
              Let’s Connect →
            </button>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/20 text-sm"
            >
              {copied ? "Copied ✓" : "Copy Email"}
            </button>

            <a
              href="/PARTH_DEVALIYA-RESUME.pdf"
              download
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-cyan-400/30 text-cyan-400 text-sm text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-8 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ rotate: 2, scale: 1.03 }}
            className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md"
          >
            {/* 🔥 Glow Background */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-2xl opacity-50"></div>

            {/* 🔥 Code Card */}
            <div className="relative bg-[#0d1117] rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-xl backdrop-blur-lg">
              {/* Top dots */}
              <div className="flex gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>

              {/* Animated Code */}
              <pre className="text-[10px] sm:text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">dev</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {"\n  "}
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-orange-400">"Parth"</span>,
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {"\n  "}
                    <span className="text-green-400">role</span>:{" "}
                    <span className="text-orange-400">"Full Stack"</span>,
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    {"\n  "}
                    <span className="text-green-400">stack</span>:{" "}
                    <span className="text-yellow-400">[</span>
                    <span className="text-orange-400">"React"</span>,
                    <span className="text-orange-400">"Node"</span>,
                    <span className="text-orange-400">"Tailwind"</span>,
                    <span className="text-orange-400">"PHP"</span>,
                    <span className="text-orange-400">"MySQL"</span>
                    <span className="text-yellow-400">]</span>,
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    {"\n  "}
                    <span className="text-green-400">available</span>:{" "}
                    <span className="text-purple-400">true</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    {"\n"}
                    <span className="text-yellow-400">{"};"}</span>
                  </motion.div>
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollDown}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 bg-white/10 rounded-full animate-bounce"
      >
        <FaArrowDown />
      </button>
    </section>
  );
}
