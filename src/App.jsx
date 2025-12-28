import AnimatedBackground from "./components/AnimatedBackground";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { fadeUp } from "./animations/scrollVariants";

function App() {
  return (
    <>
    <AnimatedBackground />
      <Navbar />

      {/* HOME */}
<motion.section
  id="home"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="min-h-screen pt-28 bg-white dark:bg-gray-900 flex items-center justify-center"
>
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Hi, I’m{" "}
        <span className="text-purple-600 dark:text-pink-500">
          Vansh Kakkar
        </span>
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
        Computer Science Student | Full-Stack & AI Enthusiast
      </p>
      {/* CTA BUTTONS */}
<div className="mt-6 flex flex-wrap gap-4">

  {/* View Projects */}
  <a
    href="#projects"
    className="
      button-animate px-6 py-2 rounded-lg font-semibold
      border border-gray-900 text-gray-900
      hover:bg-gray-900 hover:text-white
      dark:border-white dark:text-white
      dark:hover:bg-white dark:hover:text-gray-900
      transition
    "
  >
    View Projects
  </a>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download="Vansh_Kakkar_Resume.pdf"
    className="
      button-animate px-6 py-2 rounded-lg font-semibold text-white
      bg-gradient-to-r from-blue-500 to-indigo-500
      hover:from-indigo-500 hover:to-blue-500
      dark:from-purple-500 dark:to-pink-500
      dark:hover:from-pink-500 dark:hover:to-purple-500
      transition-all duration-300
    "
  >
    Download Resume
  </a>

  {/* Hire Me */}
  <a
    href="#contact"
    className="
      button-animate px-6 py-2 rounded-lg font-semibold text-white
      bg-gradient-to-r from-green-500 to-emerald-500
      hover:from-emerald-500 hover:to-green-500
      transition-all duration-300
    "
  >
    Hire Me
  </a>

</div>


      {/* INTRO CARD */}
<motion.div
  className="
    mt-8 w-[320px] rounded-2xl p-6
    bg-gradient-to-br from-pink-500 to-purple-600
    text-white shadow-xl cursor-pointer
  "
  whileHover={{
    scale: 1.06,
    y: -10,
    boxShadow: "0px 30px 90px rgba(236,72,153,0.5)",
  }}
  whileTap={{ scale: 0.98 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
  }}
>
  <p className="text-sm leading-relaxed">
    Passionate about building modern web applications and learning
    advanced frontend & AI systems. I enjoy turning ideas into clean,
    functional, and interactive experiences.
  </p>

  {/* BOUNCING DOTS */}
  <div className="flex gap-2 mt-4">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-3 h-3 bg-white rounded-full"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
</motion.div>

    </motion.div>

    {/* PROFILE CARD — REVEAL ON FOCUS */}
<div className="hidden md:block">
  <motion.div
    className="
      relative w-[300px] h-[420px]
      rounded-[160px] overflow-hidden
      cursor-pointer
      shadow-xl
    "
    initial="rest"
    whileHover="hover"
    whileTap="hover"
    animate="rest"
  >
    {/* IMAGE */}
    <motion.img
      src="/profile.png"
      alt="Vansh"
      className="w-full h-full object-cover"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.08 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />

    {/* DARK OVERLAY */}
    <motion.div
      className="
        absolute inset-0
        bg-black/60
        backdrop-blur-[2px]
        flex flex-col justify-center items-center
        text-white text-center px-6
      "
      variants={{
        rest: { opacity: 0 },
        hover: { opacity: 1 },
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        variants={{
          rest: { y: 20, opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 0.1 }}
      >
        Beyond the Code
      </motion.h2>

      <motion.div
        className="space-y-2 text-sm"
        variants={{
          rest: { y: 20, opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 0.2 }}
      >
        <p>🏋️ Gym & Powerlifting</p>
        <p>🏊 Swimming</p>
        <p>🏍️ Long rides</p>
        <p>🎮 PC gaming</p>
      </motion.div>

      <motion.p
        className="mt-4 text-xs text-gray-300"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ delay: 0.35 }}
      >
        Balance creates consistency.
      </motion.p>
    </motion.div>
  </motion.div>
</div>

</div>

</motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
       viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-start justify-center pt-32
        bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white "
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
      About Me
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-5">
      I’m a Computer Science student with a strong interest in building
      scalable, performance-focused web applications. I enjoy understanding
      how systems work end-to-end — from the user interface to the logic
      that powers it behind the scenes.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
      My approach to development emphasizes clean structure, clarity in
      design, and thoughtful problem-solving. I prefer building solutions
      that are simple on the surface but robust underneath.
    </p>
{/* ANIMATED DIVIDER */}
    <motion.div
      className="mx-auto h-[3px] w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      animate={{ width: ["40%", "100%", "40%"] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    <p className="mt-6 text-gray-400 text-sm max-w-2xl mx-auto">
      I continuously work on improving my skills through hands-on projects,
      experimentation with modern tools, and learning how real-world systems
      are designed and optimized.
    </p>

        </div>
      </motion.section>

      {/* PROJECTS */}
<motion.section
  id="projects"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="min-h-screen flex items-start justify-center pt-32
  bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
>
  <div className="max-w-5xl w-full text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Projects
    </h2>

    <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
      A selection of projects showcasing my skills in frontend development,
      animations, and modern UI design.
    </p>

    {/* PROJECT CARDS */}
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* PORTFOLIO PROJECT */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="
          bg-gray-100 dark:bg-gray-800
          rounded-2xl p-6
          border border-gray-200 dark:border-gray-700
          shadow-lg text-left
        "
      >
        <h3 className="text-xl font-bold mb-2">
          Personal Portfolio Website
        </h3>

        <p className="text-gray-700 dark:text-gray-400 mb-4">
          A modern, animated portfolio built with React, Tailwind CSS,
          and Framer Motion. Features dark/light mode, scroll animations,
          and responsive design.
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm rounded-full bg-purple-600/10 text-purple-600 dark:text-purple-400">
            React
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-purple-600/10 text-purple-600 dark:text-purple-400">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-purple-600/10 text-purple-600 dark:text-purple-400">
            Framer Motion
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-purple-600/10 text-purple-600 dark:text-purple-400">
            Netlify
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4">
          <a
            href="https://vanshk2005-portfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2 rounded-lg
              bg-purple-600 text-white font-semibold
              hover:bg-purple-500 transition
            "
          >
            Live
          </a>

          <a
            href="https://github.com/vanshk2005/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2 rounded-lg
              border border-purple-600 text-purple-600
              hover:bg-purple-600 hover:text-white
              transition
            "
          >
            Code
          </a>
        </div>
      </motion.div>

      {/* PLACEHOLDER FOR NEXT PROJECT */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="
          bg-gray-100 dark:bg-gray-800
          rounded-2xl p-6
          border border-dashed border-gray-300 dark:border-gray-700
          text-left flex items-center justify-center
        "
      >
        <p className="text-gray-500 dark:text-gray-400">
          🚧 Next project coming soon
        </p>
      </motion.div>

    </div>
  </div>
</motion.section>


      {/* CONTACT */}
<motion.section
  id="contact"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="min-h-screen flex items-start justify-center pt-24
  bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
>
  <div className="max-w-lg w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
      Contact Me
    </h2>
    <div className="flex justify-center gap-6 mb-6">
  <motion.a
    href="https://github.com/vanshk2005"
    target="_blank"
    whileHover={{ scale: 1.2, y: -4 }}
    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-purple-500"
  >
    <FaGithub />
  </motion.a>

  <motion.a
    href="https://linkedin.com/in/vansh-kakkar-69a394344"
    target="_blank"
    whileHover={{ scale: 1.2, y: -4 }}
    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-500"
  >
    <FaLinkedin />
  </motion.a>

  <motion.a
    href="https://www.instagram.com/_vanshkakkar._?igsh=MWhrMGRjdXNseTFhYw%3D%3D&utm_source=qr"
    target="_blank"
    whileHover={{ scale: 1.2, y: -4 }}
    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-pink-500"
  >
    <FaInstagram />
  </motion.a>
</div>


    <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
      Have an opportunity or just want to say hi?  
      Drop a message below 👇
    </p>

    <motion.form
      action="https://formspree.io/f/mdangyol"
      method="POST"
      className="space-y-4"
      whileHover={{ scale: 1.01 }}
    >
      {/* NAME */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="
          w-full p-3 rounded-lg
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-purple-500
        "
      />

      {/* EMAIL */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="
          w-full p-3 rounded-lg
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-purple-500
        "
      />

      {/* MESSAGE */}
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        className="
          w-full p-3 rounded-lg
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-purple-500
        "
      />

      {/* SUBMIT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="
          w-full py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-purple-500 to-pink-500
          hover:from-pink-500 hover:to-purple-500
          transition-all duration-300
        "
      >
        Send Message 🚀
      </motion.button>
    </motion.form>
  </div>
</motion.section>


      {/* FOOTER */}
      <footer className="bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-center py-6">
        <p>
          © {new Date().getFullYear()} Vansh. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;

