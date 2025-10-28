import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import deved from "/dev-ed-wave.png";
import responsif from "/front-end-programming.png";
import fullstack from "/thorough.png";
import api from "/api-integration.png";
import video1 from '/netflix/video-1.webm'
import video2 from '/netflix/video-2.webm'
import video3 from '/netflix/video-3.webm'
import video4 from '/netflix/video-4.webm'
import ecommerce1 from '/ecommerce/ecommerce-1.webm'
import ecommerce2 from '/ecommerce/ecommerce-2.webm'
import mataAirVideo from '/mataairnusantara/mataairnusantara.webm'


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

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="sm:py-10 py-5 sm:mb-12 mb-6 items-center flex justify-between dark:text-white">
            <h1 className="font-serif font-bold sm:text-2xl text-[10px]">developed by taufiq</h1>
            <ul className="flex sm:gap-8 gap-4 items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer sm:text-2xl text-[14px]"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white sm:px-4 px-2 sm:py-2 py-1 border-none rounded-md sm:text-[16px] text-[10px]"
                  href="#portofolio"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center sm:p-10 p-5 sm:py-10 py-5">
            <h2 className="sm:text-5xl text-[28px] sm:py-2 py-1 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Taufiqurrahman
            </h2>
            <h3 className="sm:text-2xl text-[18px] sm:py-2 py-1 dark:text-white md:text-3xl">
              Fullstack Developer
            </h3>
            <p className="sm:text-md text-[11px] sm:py-5 py-2.5 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A graduate in Computer Science with a strong interest in full-stack web development. Experienced in building projects using the MERN Stack, including CRUD applications and responsive websites. Able to work both independently and in a team, with a fast ability to adapt to new technologies.
            </p>
            <div className="sm:text-5xl text-[24px] flex justify-center sm:gap-4 gap-2 sm:py-3 py-1.5 text-gray-600 dark:text-gray-400">
              <a target="_blank" href="https://github.com/taufiqscript">
                <AiFillGithub className="cursor-pointer" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/taufiq-rahman-98a322356">
                <AiFillLinkedin
                  className="cursor-pointer"
                />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full sm:w-80 w-40 sm:h-80 h-40 relative overflow-hidden sm:mt-20 mt-10 md:h-96 md:w-96">
              <img
                src={deved}
                loading="lazy"
                width={"100%"}
                height={"100%"}
                className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="sm:text-3xl text-[18px] sm:py-1 py-0.5 dark:text-white ">Services I offer</h3>
            <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
              As a <span className="text-teal-500">Fullstack Developer</span>, I focus on building modern, fast, and user-friendly web applications.
              I use the <span className="text-teal-500">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) to create efficient solutions for both the frontend and backend.
            </p>
            <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
              My services include full-stack web development, responsive interface design, and the creation and integration of <span className="text-teal-500">RESTful APIs</span> tailored to your project needs.
            </p>

          </div>
          <div className="sm:flex sm:gap-10 gap-5">
            <div className="text-center shadow-lg sm:p-10 p-5 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src={fullstack}
                loading="lazy"
                className="sm:w-[100px] w-[60px] sm:h-[100px] h-[60px]"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Fullstack Web Development
              </h3>
              <p className="py-2 text-[16px]">
                Building modern web applications using the MERN Stack.
              </p>
              <h4 className="text-[16px] py-4 text-teal-600">Dev Tools I Use</h4>
              <p className="text-[16px] text-gray-800 py-1">React.js</p>
              <p className="text-[16px] text-gray-800 py-1">Node.js</p>
              <p className="text-[16px] text-gray-800 py-1">Express.js</p>
              <p className="text-[16px] text-gray-800 py-1">MongoDB</p>
            </div>
            <div className="text-center shadow-lg sm:p-10 p-5 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src={responsif}
                loading="lazy"
                className="sm:w-[100px] w-[60px] sm:h-[100px] h-[60px]"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend Development & Responsive Design
              </h3>
              <p className="py-2 text-[16px]">
                Designing elegant and responsive user interfaces.
              </p>
              <h4 className="text-[16px] py-4 text-teal-600">Dev Tools I Use</h4>
              <p className="text-[16px] text-gray-800 py-1">Tailwind</p>
              <p className="text-[16px] text-gray-800 py-1">DaisyUI</p>
              <p className="text-[16px] text-gray-800 py-1">HTML</p>
              <p className="text-[16px] text-gray-800 py-1">CSS</p>

            </div>
            <div className="text-center shadow-lg sm:p-10 p-5 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src={api}
                loading="lazy"
                className="sm:w-[100px] w-[65px] sm:h-[100px] h-[65px]"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">API Development & Integration</h3>
              <p className="py-2 text-[16px]">
                Creating and integrating RESTful APIs for dynamic applications.
              </p>
              <h4 className="text-[16px] py-4 text-teal-600">Dev Tools I Use</h4>
              <p className="text-[16px] text-gray-800 py-1">Postman</p>
              <p className="text-[16px] text-gray-800 py-1">Express.js</p>
              <p className="text-[16px] text-gray-800 py-1">MongoDB Atlas</p>
            </div>
          </div>
        </section>
        <section id="portofolio" className="sm:py-10 py-5">
          <h3 className="sm:text-3xl text-[18px] sm:py-1 py-0.5 dark:text-white ">Portofolio</h3>
          <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
            As a <span className="text-teal-500">Fullstack Developer</span> experienced in web development using the <span className="text-teal-500">MERN Stack</span>, I have built various projects focusing on interactive user interfaces and optimal application performance.
          </p>
          <p className="sm:text-[16px] text-[11px] sm:py-2 py-1 sm:leading-8 leading-6 text-gray-800 dark:text-gray-200">
            Some of the projects I’ve worked on include developing React- and Node.js-based applications, integrating APIs, and creating modern, responsive, and user-friendly web designs.
          </p>
          <div className="flex flex-col sm:gap-10 gap-5 sm:py-10 py-5 lg:flex-row lg:flex-wrap">
            <div className="flex sm:gap-4 gap-2 flex-col max-w-5xl">
              <div>
                <h3 className="font-bold sm:text-xl text-[16px] text-black dark:text-white">🎬 Netflix Clone | MERN Stack</h3>
                <p className="dark:text-white sm:text-[16px] text-justify text-[10px]">
                  A full-featured streaming web application inspired by Netflix, developed using the <span className="text-teal-500">MERN Stack</span>.
                  The project includes user authentication, personalized favorites list, and real-time trailer previews.
                  Built with responsive design and optimized performance to deliver an immersive viewing experience.
                  <a
                    href="https://netflix-clone-mern-eta.vercel.app"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-600"
                  > Link Demo</a>
                </p>
              </div>
              <div className="relative sm:w-[1000px] w-[320px] sm:h-[80vh] h-[30vh] overflow-hidden rounded-lg">
                <video
                  ref={videoRefNetflix}
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
            <div className="flex sm:gap-4 gap-2 flex-col max-w-5xl">
              <div>
                <h3 className="font-bold sm:text-xl text-[16px] text-black dark:text-white">🛒 EcoMart | E-commerce Website</h3>
                <p className="dark:text-white sm:text-[16px] text-justify text-[10px]">
                  <span className="text-teal-500">EcoMart</span> is a modern e-commerce web application designed to simulate an online marketplace experience similar to Shopee or Tokopedia.
                  Developed with <span className="text-teal-500">React.js (Vite)</span> on the frontend and <span className="text-teal-500">Express.js + MongoDB</span> on the backend,
                  it features product management, shopping cart functionality, user authentication, and a fully responsive interface optimized for desktop and mobile. 
                  <a
                    href="https://ecommerce-project-client-two.vercel.app/"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-600 sm:text-[16px] text-[8px]"
                  >
                    <span> Link Demo</span>
                  </a>
                </p>
              </div>
              <div className="relative sm:w-[1000px] w-[320px] sm:h-[80vh] h-[30vh] overflow-hidden rounded-lg">
                <video
                  ref={videoRefEcommerce}
                  autoPlay
                  loop
                  muted
                  width={"100%"}
                  height={"100%"}
                  className={`absolute top-0 left-0 object-cover transition-opacity duration-[800ms] w-full h-full ${fadeEcommerce ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source src={ecommerce[contentEcommerceIndex]} type="video/webm" />
                </video>
              </div>
            </div>

            <div className="flex sm:gap-4 gap-2 flex-col max-w-5xl">
              <div>
                <h3 className="font-bold sm:text-xl text-[16px] text-black dark:text-white">🌊 Mata Air Nusantara | Water Drilling Service Website</h3>
                <p className="dark:text-white sm:text-[16px] text-justify text-[10px]">
                  <span className="text-teal-500">Mata Air Nusantara</span> is a professional water drilling service website focused on the Bekasi, Jakarta, and surrounding areas.
                  Built using <sapn className="text-teal-500">React.js</sapn> and <span className="text-teal-500">Framer Motion</span> for smooth animations, this modern landing page is optimized for <span className="text-teal-500">SEO, includes schema.org structured data,</span> and features an <span className="text-teal-500">automated WhatsApp form</span> to make it easier for potential clients to get in touch.
                  Key features include a responsive navigation system, interactive pricing list, customer testimonials, educational blog posts, and seamless integration with Google Maps and WhatsApp API for instant communication.
                  <a
                    href="https://www.mataairnusantara.com/"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-600 sm:text-[16px] text-[8px]"
                  >
                    <span> Link Demo</span>
                  </a>
                </p>
              </div>
              <div className="relative sm:w-[1000px] w-[320px] sm:h-[80vh] h-[30vh] overflow-hidden rounded-lg">
                <video
                  ref={videoRefMataAir}
                  autoPlay
                  loop
                  muted
                  width={"100%"}
                  height={"100%"}
                  className={`absolute top-0 left-0 object-cover w-full h-full`}
                >
                  <source src={mataairnusantara[0]} type="video/webm" />
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