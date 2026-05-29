import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    formData.append("access_key", "07ca9c25-2c1a-4b42-9d25-b4a3f5ffa5fb");

    formData.append("subject", "New Contact from Portfolio 🚀");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      e.target.reset();
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
      overflow-x-hidden
      py-14 sm:py-16 md:py-20
      px-4 sm:px-6 md:px-10 lg:px-16
      bg-[#0a0a0a]
      text-white
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <div
            className="
            w-20 h-[3px]
            bg-gradient-to-r
            from-cyan-400 to-blue-500
            mx-auto mt-3 rounded-full
            "
          ></div>

          <p
            className="
            text-gray-400
            mt-4
            text-sm sm:text-base
            max-w-xl
            mx-auto
            px-2
            "
          >
            Let’s build something amazing together 🚀
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6 lg:gap-8
          items-start
          "
        >
          {/* LEFT INFO CARDS */}
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-1
            gap-4
            w-full
            "
          >
            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "parthdevaliya.official@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "India",
              },
              {
                icon: <FaLinkedin />,
                title: "LinkedIn",
                value: "linkedin.com/in/parthdevaliya12",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.2,
                }}
                whileHover={{ y: -5 }}
                className="
                flex items-center gap-4
                p-4 sm:p-5
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-lg
                min-h-[110px]
                overflow-hidden
                "
              >
                {/* ICON */}
                <div
                  className="
                  flex-shrink-0
                  p-3
                  bg-cyan-500/20
                  rounded-xl
                  text-cyan-400
                  text-lg
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <p
                    className="
                    text-xs
                    text-gray-400
                    mb-1
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                    text-sm sm:text-base
                    break-all
                    text-white
                    leading-relaxed
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="
            xl:col-span-2
            w-full
            max-w-full
            overflow-hidden
            bg-[#111]
            p-5 sm:p-6 md:p-8
            rounded-2xl
            border border-white/10
            shadow-xl
            space-y-5
            "
          >
            <h3
              className="
              text-xl sm:text-2xl
              font-semibold
              "
            >
              Send Message
            </h3>

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Your Name</label>

              <input
                type="text"
                name="name"
                required
                className="
                w-full
                max-w-full
                min-w-0
                px-4 py-3
                text-sm sm:text-base
                text-white
                bg-white/5
                border border-white/10
                rounded-xl
                outline-none
                focus:border-cyan-400
                overflow-hidden
                "
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Your Email</label>

              <input
                type="email"
                name="email"
                required
                className="
                w-full
                max-w-full
                min-w-0
                px-4 py-3
                text-sm sm:text-base
                text-white
                bg-white/5
                border border-white/10
                rounded-xl
                outline-none
                focus:border-cyan-400
                overflow-hidden
                "
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Your Message</label>

              <textarea
                name="message"
                rows="5"
                required
                className="
                w-full
                max-w-full
                min-w-0
                px-4 py-3
                text-sm sm:text-base
                text-white
                bg-white/5
                border border-white/10
                rounded-xl
                outline-none
                focus:border-cyan-400
                resize-none
                overflow-hidden
                "
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="
              w-full
              py-3.5
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-black
              font-semibold
              text-sm sm:text-base
              shadow-lg
              shadow-cyan-500/20
              "
            >
              {loading ? "Sending..." : "Send Message →"}
            </motion.button>

            {/* SUCCESS */}
            {success && (
              <p
                className="
                text-green-400
                text-sm
                text-center
                "
              >
                ✅ Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
