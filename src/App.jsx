import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m Vansh 👋
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Computer Science Student | Full-Stack & AI Enthusiast
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a Computer Science student who enjoys building clean,
            functional web applications and exploring AI-driven systems.
            I like understanding how things work — from frontend UI to
            backend logic.
          </p>
        </div>
      </section>
      {/* PROJECTS */}
<section
  id="projects"
  className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6"
>
  <div className="max-w-3xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Projects
    </h2>

    <p className="text-gray-400 text-lg mb-8">
      I’m currently working on projects and will be adding them here soon.
    </p>

    <div className="bg-gray-800 rounded-lg p-8">
      <p className="text-xl font-semibold">🚧 Coming Soon</p>
      <p className="text-gray-400 mt-2">
        Full-stack and AI-based projects in progress.
      </p>
    </div>
  </div>
</section>
{/* CONTACT */}
<section
  id="contact"
  className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6"
>
  <div className="max-w-xl w-full text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Contact Me
    </h2>

    <p className="text-gray-400 mb-8">
      Feel free to reach out for opportunities, collaborations,
      or just to say hi 👋
    </p>

    <div className="space-y-4">
      {/* EMAIL */}
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kakkarvansh2005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
>
  <FaEnvelope className="text-xl text-white" />
  <div className="text-left">
        <p className="text-gray-400 text-sm">Email</p>
        <p className="font-semibold text-white">
          kakkarvansh2005@gmail.com
        </p>
        </div>
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/vanshk2005"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
      >
        <FaGithub className="text-xl text-white" />
        <div className="text-left">
        <p className="text-gray-400 text-sm">GitHub</p>
        <p className="font-semibold text-white">
          github.com/vanshk2005
        </p>
        </div>
      </a>

      {/* LINKEDIN */}
      <a
        href="https://linkedin.com/in/vansh-kakkar-69a394344"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
      >
        <FaLinkedin className="text-xl text-white" />
        <div className="text-left">
        <p className="text-gray-400 text-sm">LinkedIn</p>
        <p className="font-semibold text-white">
          linkedin.com/in/vansh-kakkar-69a394344
        </p>
        </div>
      </a>
    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="bg-gray-900 text-gray-400 text-center py-6">
  <p>
    © {new Date().getFullYear()} Vansh. All rights reserved.
  </p>
</footer>

    </>
  );
}

export default App;
