import { useEffect, useRef, useState } from "react";
import "./App.css";
import img1 from "./assets/img.jpg";
import img2 from "./assets/proj.jpg";
import img3 from "./assets/123.png";
import { MdHome } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clone1 from "./assets/clone1.jpeg"
import clone2 from "./assets/clone2.png"
import clone3 from "./assets/clone3.png"
import clone4 from "./assets/clone4.png"
import clone5 from "./assets/clone5.png"


function App() {
  const [count, setCount] = useState(0);

  const education = [
    {
      year: "2025",
      title: "B.Tech in Computer Science – 68%",
      institute: "Joginpally B.R. Engineering College, Hyderabad, India",
    },
    {
      year: "2021",
      title: "Intermediate (MPC) – 89%",
      institute: "Sri Chaitanya Junior College, Hyderabad, India",
    },
    {
      year: "2019",
      title: "Secondary School Certificate (10th Grade) – 79%",
      institute: "Gowtham Model School, Hyderabad, India",
    },
  ];

const sliderRef = useRef(null);
  let currentIndex = 0;
  const totalSlides = 5; // we have 5 images

  const showSlide = (index) => {
    if (!sliderRef.current) return;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className=" h-20 flex  bg-[black] relative border-[red]">
        <div className=" w-[300px] text-[white]  ">
          <h1 className="ml-[180px] mt-[15px] text-3xl font-sans "><MdHome  className="h-[50px] w-[50px] text-[yellow]"/></h1>
        </div>
        <div className=" flex text-[white] ">
          <ol className=" flex justify-center items-center gap-[50px] absolute left-[700px] top-[25px] font-bold text-grey-500">
            <li className="hover:text-[#FFFF00]"><a  href="#about">About</a></li>
            <li className="hover:text-[#FFFF00]"><a href="#project ">Projects</a></li>
            <li className="hover:text-[#FFFF00]"><a href="#skills">Skills</a></li>
            <li className="hover:text-[#FFFF00]"><a href="#education">Education</a></li>
            <li className="hover:text-[#FFFF00]"><a href="#contact">Contact</a></li>
          </ol>
        </div>
      </nav>
      <section id="about" className="h-160 bg-[#1C1501] relative">
        <div className="absolute left-[280px] top-[150px]">
          <h1  className="text-[white]">Welcome to my portfolio website!</h1>
          <h1 className="text-4xl font-bold text-white first-letter:text-[yellow]">
            Hey <span className="text-[yellow]">F</span>olks,
          </h1>{" "}
          <br />
          <h1 className="text-4xl font-bold text-white animate-bounce">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm
            Thanush <span className="text-[yellow]">: ) </span>
            <br />
            <h1 className="text-[yellow]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Stack Developer.....!
            </h1>
          </h1>
          <br />
          <h1 className="text-[grey]">
            "Transforming ideas into full-fledged applications drives me. With a{" "}
            <br /> strong foundation in Java full stack development."
          </h1>
        </div>

        <div>
          <img
            src={img1}
            alt=""
            className="h-[400px] w-[400px] rounded-full absolute left-[900px] top-[100px] rounded-full w-60 h-60 object-cover shadow-[0_0_25px_rgba(234,179,8,0.7)] hover:shadow-[0_0_50px_rgba(234,179,8,1)] transition-all duration-500"
          />
        </div>
      </section>

      <section id="project" className="h-170 bg-[#1C1501] relative scroll-smooth">
        <div>
          <h1 className="text-3xl text-[yellow] absolute left-[300px] top-[50px] animate-bounce">
            "Projects I have developed showcasing expertise in full stack
            development."
          </h1>
          <div className="absolute left-[250px] top-[180px]">
            <img
              src={img2}
              alt=""
              className="h-[400px] w-[390px] object-cover hover:animate-[ping_1s_ease-in]"
            />{" "}
            <br />
            <h1 className="text-[white]">
              "A machine learning model designed to analyze medical <br />
              and lifestyle data to predict the risk of heart stroke. This{" "}
              <br /> project empowers early detection, enabling preventive{" "}
              <br /> healthcare decisions with greater accuracy."
            </h1>
          </div>
          <div className="absolute left-[800px] top-[180px]">
            <img
              src={img3}
              alt=""
              className="h-[400px] w-[580px] hover:animate-[ping_1s_ease-in]"
            />{" "}
            <br />
            <h1 className="text-[white]">
              "An intuitive e-commerce shopping platform built for seamless
              online purchasing. <br />
              It features product browsing, secure checkout, and user-friendly
              navigation. <br /> Designed to enhance customer experience with
              responsive and modern UI."
            </h1>
          </div>
        </div>
      </section>
      <section className="h-[640px] flex items-center justify-center bg-[#1C1501] relative "> 
        <h1 className="text-3xl text-[yellow] absolute left-[650px] top-[50px] animate-bounce "> Cloned Websites</h1>
        <div>
           <div className="w-full flex flex-col items-center py-10">
      <div className="relative w-[700px] h-[400px] overflow-hidden rounded-2xl shadow-xl bg-white">
        
        {/* Slides container */}
        <div
          ref={sliderRef}
          className="flex w-full h-full transition-transform duration-500"
        >
          <img src={clone1} alt="slide1" className="w-full h-full object-contain flex-shrink-0" />
          <img src={clone2} alt="slide2" className="w-full h-full object-contain flex-shrink-0" />
          <img src={clone3} alt="slide3" className="w-full h-full object-contain flex-shrink-0" />
          <img src={clone4} alt="slide4" className="w-full h-full object-contain flex-shrink-0" />
          <img src={clone5} alt="slide5" className="w-full h-full object-contain flex-shrink-0" />
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
        </div>
      </section>
      <section id="skills" className="h-280 bg-[#1C1501] relative">
        <div>
          <h1 className="text-[yellow] text-3xl absolute left-[670px] top-[180px]  animate-bounce">
            "Skills That Power My Development Journey"
          </h1>
          <h1 className="text-[350px] text-yellow-400 absolute left-[170px] top-[20px] animate-pulse ">
            ⬤
          </h1>
          <p className="absolute left-[205px] top-[250px] text-[white] text-xl font-bold ">
            Programming Languages:{" "}
            <h1 className="text-2xl font-bold ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Core Java,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SQL.
            </h1>{" "}
          </p>

          <h1 className="text-[350px] text-yellow-400 absolute left-[350px] top-[200px]  ">
            ⬤
          </h1>
          <p className="absolute left-[425px] top-[400px] text-[white] text-xl font-bold ">
            Web Technologies:{" "}
            <h1 className="text-2xl font-bold">
              {" "}
              HTML, <br /> CSS, <br /> JavaScript, <br /> Bootstrap, <br />{" "}
              React.js
            </h1>{" "}
          </p>

          <h1 className="text-[350px] text-yellow-400 absolute left-[520px] top-[380px] animate-pulse ">
            ⬤
          </h1>
          <p className="absolute left-[605px] top-[590px] text-[white] text-xl font-bold ">
            Tools & Platforms:{" "}
            <h1 className="text-2xl font-bold">
              Git, <br /> GitHub, <br /> Figma
            </h1>{" "}
          </p>

          <h1 className="text-[350px] text-yellow-400 absolute left-[690px] top-[560px] ">
            ⬤
          </h1>
          <p className="absolute left-[755px] top-[790px] text-[white] text-xl font-bold ">
            Productivity Tools:{" "}
            <h1 className="text-2xl font-bold">
              MS Word, <br /> MS Excel{" "}
            </h1>{" "}
          </p>
        </div>
        <div className="h-[135px] w-[220px] bg-gray-400 absolute left-[1220px] top-[400px]">
          <h1 className=" font-bold ">"Social & Professional Links"</h1>
          <div className="absolute left-[30px] top-[50px] animate-pulse font-bold">
            <a href="https://github.com/Thanush-dot">Git-Hub-Link</a> <br />
            <a href="https://www.linkedin.com/in/thanush-reddy-99ba5a275/">
              linkedIn-Link
            </a>{" "}
            <br />
            <a href="https://www.instagram.com/_thanushreddy_/">
              Instagram-Link
            </a>
          </div>
        </div>
      </section>


<section className="bg-[#1C1501] py-12 px-6 md:px-20 " id="education">
      <h2 className="text-3xl font-bold mb-10 text-center text-[yellow] animate-bounce">Education</h2>
      <div className="relative border-l-4 border-gray-300 ml-6">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Year Circle */}
            <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-gray-700 text-[yellow] rounded-full font-bold">
              {edu.year}
            </span>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{edu.institute}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

     <section className="bg-black text-white py-12 px-6 md:px-20 " id="contact">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left side: Map + Info */}
        <div>
          {/* Google Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.9868188906667!2d78.42445301533718!3d17.365001497542547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb964deb243a07%3A0x7779874a2a0213a0!2sAttapur%2C%20Gumma%20Konda%20Colony%2C%20Hyderabad%2C%20Telangana%20500030!5e0!3m2!1sen!2sin!4v1756303310463!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 rounded-lg p-6 mt-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Say hello</h3>
            <p className="mb-1">8247649677</p>
            <p className="mb-4">hello@company.co</p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-yellow-400">🌐</a>
              <a href="#" className="hover:text-yellow-400">📷</a>
              <a href="#" className="hover:text-yellow-400">🎥</a>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Interested to work together? <br /> Let’s talk
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 bg-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
            >
              Send Button
            </button>
          </form>
        </div>
      </div>

      
    </section>
      
      <footer className="h-[200px] relative bg-[black]">
        <div className="absolute left-[520px] top-[50px] text-[white]">
          Copyright © 2019 Company Name . All rights reserved
          <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Designed by Thanush
        </div>
      </footer>
    </>
  );
}

export default App;

