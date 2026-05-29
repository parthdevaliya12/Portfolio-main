import { motion } from "framer-motion";
import { BiMoney } from "react-icons/bi";
import { BsMarkerTip } from "react-icons/bs";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
  FaShoppingCart,
  FaChartLine,
  FaHome,
  FaWallet,
} from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { SiReact } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Online AirConditner Shopping System (E-Commerce)",
      desc: "This project includes product listing, customer management, cart system, and admin panel to manage products and orders.",
      tech: ["Bootstrap", "PHP", "MySQL"],
      icon: <FaShoppingCart />,
      bg: "from-cyan-500/20 to-blue-500/20",
      github: "https://github.com/parthdevaliya12/AirWell-AC-PHP",
      live: "",
    },
    {
      title: "Online Television Shopping System (E-Commerce)",
      desc: "This project allows users to browse TVs, view product details, add items to cart, and place orders.It also includes an Admin Panel to manage products, categories, and orders.",
      tech: ["Bootstrap", "Django", "SQLite"],
      icon: <FaShoppingCart />,
      bg: "from-purple-500/20 to-pink-500/20",
      github: "https://github.com/parthdevaliya12/TeleMart-TV-Django",
      live: "",
    },
    {
      title: "Real Estate Booking Platform (Airbnb Clone)",
      desc: "Esvio is a modern, responsive property listing and booking web application built using the MERN Stack.Users can list properties, browse listings, book properties, manage bookings, and update or delete their own listings",
      tech: ["React", "Node", "MongoDB"],
      icon: <FaHome />,
      bg: "from-yellow-500/20 to-blue-500/20",
      github: "https://github.com/parthdevaliya12/Airbnb-Clone",
      live: "https://esvio.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Some of my recent work and real-world projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10"
            >
              {/* Card */}
              <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                {/* ICON BACKGROUND */}
                <div
                  className={`h-40 flex items-center justify-center bg-gradient-to-br ${project.bg}`}
                >
                  <div className="text-5xl text-cyan-400 group-hover:scale-110 transition">
                    {project.icon}
                  </div>

                  {/* Action Icons */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="p-2 bg-black/60 rounded-lg hover:bg-cyan-500 transition">
                      <FaGithub
                        onClick={() => window.open(project.github, "_blank")}
                      />
                    </button>
                    <button className="p-2 bg-black/60 rounded-lg hover:bg-cyan-500 transition">
                      <FaExternalLinkAlt
                        onClick={() => window.open(project.live, "_blank")}
                      />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-400/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
