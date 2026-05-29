import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import profile from "/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* NEW LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - PROFILE + FLOATING CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative">
              {/* Profile Image */}
              <img
                src={profile}
                alt="profile"
                className="w-60 sm:w-72 rounded-2xl shadow-xl"
              />

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 px-4 py-2 rounded-lg text-xs shadow-lg">
                💻 Developer
              </div>

              <div className="absolute -top-6 -right-6 bg-[#111] border border-white/10 px-4 py-2 rounded-lg text-xs shadow-lg">
                🚀 Fresher
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Passionate Software Developer
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-loose text-center md:text-left">
              Hi, I’m Parth, and I am currently pursuing my MCA (Master of
              Computer Applications). I am passionate about computer science and
              web development. As a fresher, I am learning and improving my
              skills every day. I have good knowledge of frontend development
              like HTML, CSS, JavaScript, and React. I enjoy creating responsive
              and user-friendly websites. I have basic knowledge of backend
              technologies, and I am working to improve it.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-loose text-center md:text-left tracking-wide">
              {" "}
              I specialize in building scalable and user-friendly web
              applications with modern technologies. I focus on writing clean,
              efficient, and maintainable code.
            </p>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span className="text-sm">Gandhinagar, India</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
                <FaEnvelope className="text-cyan-400" />
                <span className="text-sm">parthdevaliya.official@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg sm:col-span-2">
                <FaLinkedin className="text-cyan-400" />
                <span className="text-sm">linkedin.com/in/parthdevaliya12</span>
              </div>
            </div>

            {/* Highlight */}
            <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-4 rounded-lg">
              <p className="text-sm sm:text-base">
                🚀 <span className="text-cyan-400 font-semibold">Fresher</span>{" "}
                {/* building modern web applications. */}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
