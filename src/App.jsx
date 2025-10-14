import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import deved from "/dev-ed-wave.png";
import responsif from "/front-end-programming.png";
import fullstack from "/thorough.png";
import api from "/api-integration.png";
import video1 from '/video-1.mp4'
import video2 from '/video-2.mp4'
import video3 from '/video-3.mp4'
import video4 from '/video-4.mp4'
import ecommerce1 from '/ecommerce/ecommerce-1.mp4'
import ecommerce2 from '/ecommerce/ecommerce-2.mp4'


const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const videos = [video1, video2, video3, video4]
  const ecommerce = [ecommerce1, ecommerce2]
  const [contentIndex, setContentIndex] = useState(0)
  const [contentEcommerceIndex, setContentEcommerceIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [fadeEcommerce, setFadeEcommerce] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [contentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setContentIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1)
        setFade(true)
      }, 800)
    }, 15000)

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-serif font-bold text-2xl">developed by taufiq</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Taufiqurrahman
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Fullstack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A graduate in Computer Science with a strong interest in full-stack web development. Experienced in building projects using the MERN Stack, including CRUD applications and responsive websites. Able to work both independently and in a team, with a fast ability to adapt to new technologies.
            </p>
            <div className="text-5xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/taufiqscript">
                <AiFillGithub className="cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/taufiq-rahman-98a322356">
                <AiFillLinkedin
                  className="cursor-pointer"
                />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img
                src={deved}
                width={"100%"}
                height={"100%"}
                className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a <span className="text-teal-500">Fullstack Developer</span>, I focus on building modern, fast, and user-friendly web applications.
              I use the <span className="text-teal-500">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) to create efficient solutions for both the frontend and backend.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My services include full-stack web development, responsive interface design, and the creation and integration of <span className="text-teal-500">RESTful APIs</span> tailored to your project needs.
            </p>

          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={fullstack} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Fullstack Web Development
              </h3>
              <p className="py-2">
                Building modern web applications using the MERN Stack.
              </p>
              <h4 className="py-4 text-teal-600">Dev Tools I Use</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express.js</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={responsif} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Frontend Development & Responsive Design
              </h3>
              <p className="py-2">
                Designing elegant and responsive user interfaces.
              </p>
              <h4 className="py-4 text-teal-600">Dev Tools I Use</h4>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">DaisyUI</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={api} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">API Development & Integration</h3>
              <p className="py-2">
                Creating and integrating RESTful APIs for dynamic applications.
              </p>
              <h4 className="py-4 text-teal-600">Dev Tools I Use</h4>
              <p className="text-gray-800 py-1">Postman</p>
              <p className="text-gray-800 py-1">Express.js</p>
              <p className="text-gray-800 py-1">MongoDB Atlas</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            As a <span className="text-teal-500">Fullstack Developer</span> experienced in web development using the <span className="text-teal-500">MERN Stack</span>, I have built various projects focusing on interactive user interfaces and optimal application performance.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Some of the projects I’ve worked on include developing React- and Node.js-based applications, integrating APIs, and creating modern, responsive, and user-friendly web designs.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex gap-4 flex-col max-w-5xl">
              <div>
                <h3 className="font-bold text-xl text-black dark:text-white">Netflix Clone | MERN Stack</h3>
                <p className="dark:text-white">
                  A streaming web application replicating core Netflix features, complete with user authentication, favorites list, and trailer previews.
                  <a
                    href="https://netflix-clone-mern-eta.vercel.app"
                    className="text-blue-400 hover:text-blue-600"
                  > Link Demo</a>
                </p>
              </div>
              <div className="relative w-[880px] h-[80vh] overflow-hidden rounded-lg">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  width={"100%"}
                  height={"100%"}
                  className={`absolute top-0 left-0 object-cover transition-opacity duration-[800ms] w-full h-full ${fade ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source src={videos[contentIndex]} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex gap-4 flex-col max-w-5xl">
              <div>
                <h3 className="font-bold text-xl text-black dark:text-white">EcoMart | E-commerce Website</h3>
                <p className="dark:text-white">
                  EcoMart is a modern e-commerce application built with React.js (Vite) on the frontend and Express.js with MongoDB on the backend.
                  This project is designed to simulate an online shopping experience similar to major marketplaces such as Shopee or Tokopedia.
                </p>
                <a
                  href="https://ecommerce-project-client-two.vercel.app/"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Link Demo
                </a>
              </div>
              <div className="relative w-[880px] h-[80vh] overflow-hidden rounded-lg">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  width={"100%"}
                  height={"100%"}
                  className={`absolute top-0 left-0 object-cover transition-opacity duration-[800ms] w-full h-full ${fadeEcommerce ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source src={ecommerce[contentEcommerceIndex]} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App