import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import deved from "/dev-ed-wave.png";
import video1 from '/netflix/video-1.webm'
import video2 from '/netflix/video-2.webm'
import video3 from '/netflix/video-3.webm'
import video4 from '/netflix/video-4.webm'
import ecommerce1 from '/ecommerce/ecommerce-1.webm'
import ecommerce2 from '/ecommerce/ecommerce-2.webm'
import mataAirVideo from '/mataairnusantara/mataairnusantara.webm'
import { motion } from "framer-motion";
import { LIST_SERVICES } from "./constans/listServices";


const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const videos = [video1, video2, video3, video4]
  const ecommerce = [ecommerce1, ecommerce2]
  const mataairnusantara = [mataAirVideo]
  const [contentIndex, setContentIndex] = useState(0)
  const [contentEcommerceIndex, setContentEcommerceIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [fadeEcommerce, setFadeEcommerce] = useState(true)
  const videoRefNetflix = useRef(null)
  const videoRefEcommerce = useRef(null)
  const videoRefMataAir = useRef(null)

  useEffect(() => {
    if (videoRefNetflix.current) {
      videoRefNetflix.current.load()
      videoRefNetflix.current.play()
    }
  }, [contentIndex])

  useEffect(() => {
    if (videoRefEcommerce.current) {
      videoRefEcommerce.current.load()
      videoRefEcommerce.current.play()
    }
  }, [contentEcommerceIndex])

  useEffect(() => {
    if (videoRefMataAir.current) {
      videoRefMataAir.current.load()
      videoRefMataAir.current.play()
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setContentIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1)
        setFade(true)
      }, 800)
    }, 19000)

    return () => clearInterval(interval)
  }, [videos.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeEcommerce(false)

      setTimeout(() => {
        setContentEcommerceIndex((prevIndex) =>
          prevIndex === ecommerce.length - 1 ? 0 : prevIndex + 1)
        setFadeEcommerce(true)
      }, 800)
    }, 14000)

    return () => clearInterval(interval)
  }, [ecommerce.length])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white dark:bg-gray-900 px-6 sm:px-10 md:px-20 lg:px-40 transition-colors duration-500">

        <nav className="py-6 sm:py-10 items-center flex justify-between dark:text-white">
          <h1 className="font-serif font-bold sm:text-2xl text-sm tracking-wide">developed by taufiq</h1>
            <ul className="flex sm:gap-8 gap-4 items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer sm:text-2xl text-lg hover:text-teal-400 transition"
                />
              </li>
              <li>
                <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white sm:px-4 px-3 sm:py-2 py-1 rounded-md sm:text-sm text-xs hover:shadow-lg transition"
                  href="#portofolio"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sm:p-10 p-5 sm:py-10 py-5">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 sm:text-6xl text-3xl font-extrabold mb-2">
              Taufiqurrahman
            </h2>
            <h3 className="sm:text-2xl text-lg dark:text-white mb-4 font-medium">
              Fullstack Developer
            </h3>
            <p className="sm:text-lg text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:max-w-xl mx-auto">
              A graduate in Computer Science with a strong interest in full-stack web development. Experienced in building projects using the MERN Stack, including CRUD applications and responsive websites. Able to work both independently and in a team, with a fast ability to adapt to new technologies.
            </p>
            <div className="text-2xl flex justify-center gap-4 mb-6 text-gray-600 dark:text-gray-400">
              <a target="_blank" href="https://github.com/taufiqscript">
                <AiFillGithub className="hover:text-teal-500 transition" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/taufiq-rahman-98a322356">
                <AiFillLinkedin
                  className="hover:text-teal-500 transition"
                />
              </a>
            </div>
            <a href="#portofolio" className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-lg text-sm sm:text-base hover:scale-105 transition-transform shadow-md">
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto bg-gradient-to-b from-teal-500 rounded-full sm:w-80 w-40 sm:h-80 h-40 relative overflow-hidden sm:mt-16 mt-10 shadow-lg">
            <img
              src={deved}
              alt="Profile"
              loading="lazy"
              width={"100%"}
              height={"100%"}
              className="object-cover w-full h-full" />
          </motion.div>
        </section>

        <section className="py-10">
          <motion.h3
            initial='hidden'
            variants={fadeInUp}
            whileInView='show'
            viewport={{ once: true }}
            className="sm:text-3xl text-2xl font-semibold text-center mb-6 dark:text-white ">
            Services I offer
          </motion.h3>
            <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
              As a <span className="text-teal-500">Fullstack Developer</span>, I focus on building modern, fast, and user-friendly web applications.
              I use the <span className="text-teal-500">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) to create efficient solutions for both the frontend and backend.
            </p>
            <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
              My services include full-stack web development, responsive interface design, and the creation and integration of <span className="text-teal-500">RESTful APIs</span> tailored to your project needs.
            </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {LIST_SERVICES.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 text-center shadow-lg p-6 sm:p-10 rounded-2xl flex-1 transition-all">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-16 sm:w-20 mx-auto"
                />
                <h3 className="text-lg font-semibold pt-6 pb-2 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {s.desc}
                </p>
                <h4 className="text-[16px] py-4 text-teal-600">Dev Tools I Use</h4>
                {s.tools.map((tool, idx) => (
                  <p key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                    {tool}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="portofolio" className="py-10">
          <h3 className="sm:text-3xl text-2xl font-semibold mb-6 dark:text-white ">Portofolio</h3>
          <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
            As a <span className="text-teal-500">Fullstack Developer</span> experienced in web development using the <span className="text-teal-500">MERN Stack</span>, I have built various projects focusing on interactive user interfaces and optimal application performance.
          </p>
          <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
            Some of the projects I’ve worked on include developing React- and Node.js-based applications, integrating APIs, and creating modern, responsive, and user-friendly web designs.
          </p>

          <div className="flex flex-col gap-12">
            {[
              {
                title: "🎬 Netflix Clone | MERN Stack",
                desc: " A full-featured streaming web application inspired by Netflix, developed using the MERN Stack. The project includes user authentication, personalized favorites list, and real - time trailer previews. Built with responsive design and optimized performance to deliver an immersive viewing experience.",
                link: "https://netflix-clone-mern-eta.vercel.app",
                videoRef: videoRefNetflix,
                src: videos[contentIndex],
                fade: fade,
                type: "video/mp4"
              },
              {
                title: "🛒 EcoMart | E-commerce Website",
                desc: "EcoMart is a modern e-commerce web application designed to simulate an online marketplace experience similar to Shopee or Tokopedia. Developed with React.js(Vite) on the frontend and Express.js + MongoDB on the backend, it features product management, shopping cart functionality, user authentication, and a fully responsive interface optimized for desktop and mobile.",
                link: "https://ecommerce-project-client-two.vercel.app/",
                videoRef: videoRefEcommerce,
                src: ecommerce[contentEcommerceIndex],
                fade: fadeEcommerce,
                type: "video/webm"
              },
              {
                title: "🌊 Mata Air Nusantara | Water Drilling Service Website",
                desc: "Mata Air Nusantara</span> is a professional water drilling service website focused on the Bekasi, Jakarta, and surrounding areas. Built using React.js and Framer Motion for smooth animations, this modern landing page is optimized for SEO, includes schema.org structured data, and features an automated WhatsApp form to make it easier for potential clients to get in touch. Key features include a responsive navigation system, interactive pricing list, customer testimonials, educational blog posts, and seamless integration with Google Maps and WhatsApp API for instant communication.",
                link: "https://www.mataairnusantara.com/",
                videoRef: videoRefMataAir,
                src: mataairnusantara[0],
                fade: true,
                type: "video/webm"
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                className="flex gap-4 flex-col">
                <h3 className="font-bold sm:text-2xl text-xl text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="dark:text-gray-300 text-gray-700 sm:text-base text-justify text-sm">
                  {p.desc}
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-teal-400 hover:text-teal-600 ml-1"
                  >
                    [Demo]
                  </a>
                </p>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <video
                    ref={p.videoRef}
                    autoPlay
                    loop
                    muted
                    className={`object-cover w-full h-[30vh] sm:h-[70vh] transition-opacity duration-700 ${p.fade ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <source src={p.src} type={p.type} />
                  </video>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center">
                    <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                    <a href={p.link} target="_blank" className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md text-sm transition">
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}         
          </div>
        </section>

        <footer className="text-center py-6 mt-10 border-t border-gray-700/30 text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Taufiqurrahman - All Rights Reserved
        </footer>

      </main>
    </div>
  )
}

export default App