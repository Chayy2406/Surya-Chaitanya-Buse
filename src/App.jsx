import React, { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import CustomCursor from './CustomCursor';

function App() {
  const [text, setText] = useState('');
  const fullText = 'Surya Chaitanya Buse';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black">
      <CustomCursor />
      {/* First Section */}
      <div className="min-h-screen p-8 flex flex-col text-white">
        <AnimatedBackground />
        <div className="relative z-10">
          {/* Top section */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-4xl fancy-font hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer">
              CHAY
            </h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/chay2406/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300"
              >
                <img 
                  src="/in.png" 
                  alt="LinkedIn" 
                  className="w-10 h-10 object-contain"
                />
              </a>
              <a 
                href="https://github.com/Chayy2406" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300"
              >
                <img 
                  src="/github.png" 
                  alt="GitHub" 
                  className="w-10 h-10 object-contain"
                />
              </a>
              <a 
                href="mailto:chaitanyasurya24@gmail.com" 
                className="hover:scale-110 transition-all duration-300"
              >
                <img 
                  src="/gmail.png" 
                  alt="Gmail" 
                  className="w-10 h-10 object-contain"
                />
              </a>
            </div>
          </div>

          {/* University info */}
          <div className="text-right mb-16">
            <p className="text-sm hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer">
              ARIZONA STATE UNIVERSTY, 2026
            </p>
          </div>

          {/* Main content */}
          <div className="flex-grow flex flex-col justify-center mt-52">
            <div className="overflow-hidden">
              <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] leading-tight font-bold mb-4 typing-animation hover:text-black hover:bg-white transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer w-full md:w-3/4">
                {text}
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-2xl text-gray-300 opacity-0 animate-[fadeIn_1s_ease-in_forwards_3.5s] mt-4">
              <span className="hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer">
                UI/UX Designer
              </span>
              {" | "}
              <span className="hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer">
                Full-Stack Developer
              </span>
              {" | "}
              <span className="hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer">
                AI & Machine Learning Enthusiast
              </span>
            </h2>

            {/* Tagline */}
            <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-in_forwards_4.5s]">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#33ff77]/50 hover:shadow-[0_0_30px_rgba(51,255,119,0.2)] cursor-default">
                <div className="overflow-hidden">
                  <p className="text-2xl md:text-3xl text-[#33ff77] writing-animation" style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '0.5px', fontWeight: 300 }}>
                    Crafting Seamless WEB EXPERIENCES & SMARTER MACHINES
                  </p>
                </div>
                <div className="overflow-hidden mt-2">
                  <p className="text-xl md:text-2xl text-gray-400 writing-animation" style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '1px', fontWeight: 300, animationDelay: '4s' }}>
                    – One Line of Code at a Time –
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          {/* Bottom section */}
<div className="flex justify-between items-center mt-16">
  <p className="text-xl opacity-0 animate-[fadeIn_1s_ease-in_forwards_4s] hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 inline-block hover:px-2 hover:border-2 hover:border-white cursor-pointer">
    Based in Tempe, AZ
  </p>
  <a 
    href="https://drive.google.com/file/d/1g8qKuT0AWuTir32hPSIwbxhS_QMoKc1h/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-xl opacity-0 animate-[fadeIn_1s_ease-in_forwards_4s] resume-btn px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-[#33ff77]/20 cursor-pointer"
  >
    Download Resume
  </a>
</div>


        </div>
      </div>

      {/* Bio Section */}
      <div className="min-h-screen p-8 relative">
        <AnimatedBackground />
        <div className="relative z-10 flex text-white">
          {/* Bio content */}
          <div className="w-[50%] pr-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#33ff77] tracking-wider">
              BIO
            </h2>
            <div className="w-full h-px bg-[#33ff77] mb-8 opacity-50"></div>
            <p className="text-lg md:text-xl leading-relaxed opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
              B.S. in Computer Science student at Arizona State University, specializing in Full Stack Development, Web Design, Database Management, and Machine Learning. I am passionate about using my technical skills to solve real-world problems and create innovative solutions. With proficiency in programming languages such as Python, Java, and JavaScript, and expertise in web development and machine learning, I am eager to apply my knowledge to impactful projects. I am also actively involved in leadership roles, contributing to community building and event management.
            </p>
            <div className="mt-48 relative select-none">
              {/* Base text */}
              <p 
                className="text-5xl md:text-6xl lg:text-7xl relative text-white"
                style={{ 
                  fontFamily: 'Impact',
                  animation: 'glitch-color 4s infinite step-end'
                }}
              >
                print("Hello World");
              </p>
              
              {/* Blue glitch layer */}
              <p 
                className="text-5xl md:text-6xl lg:text-7xl absolute top-0 left-0 text-[#00bfff] opacity-75 mix-blend-screen" 
                style={{ 
                  fontFamily: 'Impact',
                  animation: 'glitch 4.5s infinite step-end',
                  textShadow: '2px 0 #00bfff'
                }}
              >
                print("Hello World");
              </p>
              
              {/* Pink glitch layer */}
              <p 
                className="text-5xl md:text-6xl lg:text-7xl absolute top-0 left-0 text-[#ff1493] opacity-75 mix-blend-screen"
                style={{ 
                  fontFamily: 'Impact',
                  animation: 'glitch 4.1s infinite step-end',
                  textShadow: '-2px 0 #ff1493'
                }}
              >
                print("Hello World");
              </p>
              
              {/* Cyan glitch layer */}
              <p 
                className="text-5xl md:text-6xl lg:text-7xl absolute top-0 left-0 text-[#00ffff] opacity-75 mix-blend-screen"
                style={{ 
                  fontFamily: 'Impact',
                  animation: 'glitch 4.3s infinite step-end',
                  textShadow: '1px 0 #00ffff'
                }}
              >
                print("Hello World");
              </p>
              
              {/* Magenta glitch layer */}
              <p 
                className="text-5xl md:text-6xl lg:text-7xl absolute top-0 left-0 text-[#ff00ff] opacity-75 mix-blend-screen"
                style={{ 
                  fontFamily: 'Impact',
                  animation: 'glitch 4.7s infinite step-end',
                  textShadow: '-1px 0 #ff00ff'
                }}
              >
                print("Hello World");
              </p>
            </div>
          </div>

          {/* Space for logos */}
          <div className="w-[50%] flex flex-col items-center justify-center space-y-12">
            {/* First row of logos */}
            <div className="flex space-x-12">
              <img 
                src="/python-removebg-preview.png" 
                alt="Python Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <img 
                src="/SQL-removebg-preview.png" 
                alt="SQL Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <img 
                src="/c++-removebg-preview.png" 
                alt="C++ Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <img 
                src="/jabva-removebg-preview.png" 
                alt="Java Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            
            {/* Second row of logos */}
            <div className="flex space-x-16">
              <img 
                src="/download-removebg-preview.png" 
                alt="JavaScript Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <img 
                src="/nodejs-removebg-preview.png" 
                alt="Node.js Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <img 
                src="/nextjs.png" 
                alt="Next.js Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>

            {/* Third row of logos */}
            <div className="flex items-center justify-center space-x-8">
              <img 
                src="/figma-removebg-preview.png" 
                alt="Figma Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail-removebg-preview.png" 
                alt="JavaScript Logo" 
                className="w-20 h-20 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/ts-removebg-preview.png" 
                alt="TypeScript Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/angular-removebg-preview.png" 
                alt="Angular Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
            </div>

            {/* Fourth row of logos */}
            <div className="flex items-center justify-center space-x-8">
              <img 
                src="/git-removebg-preview.png" 
                alt="Git Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/tensorflow-icon-955x1024-hd4xzbqj.png" 
                alt="TensorFlow Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/flutter-removebg-preview.png" 
                alt="Flutter Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
            </div>

            {/* Fifth row of logos */}
            <div className="flex items-center justify-center space-x-8">
              <img 
                src="/linux-removebg-preview.png" 
                alt="Linux Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/django-removebg-preview.png" 
                alt="Django Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
              <img 
                src="/bootstrap-removebg-preview.png" 
                alt="Bootstrap Logo" 
                className="w-36 h-36 object-contain hover:scale-110 transition-all duration-300 cursor-pointer self-center"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Projects Section */}
      {/* Projects Section */}
<div className="min-h-screen p-8 relative">
  <AnimatedBackground />
  <div className="relative z-10 text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#33ff77] tracking-wider">
      PROJECTS
    </h2>
    <div className="w-full h-px bg-[#33ff77] mb-8 opacity-50"></div>
    
    {/* Project Card */}
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(51,255,119,0.2)] mb-16">
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/Wanderlust.jpg" 
            alt="Wanderlust Project" 
            className="w-full h-[300px] object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        {/* Description section */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-4 text-[#33ff77]">Wanderlust</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            An immersive front-end website featuring stunning parallax effects that take visitors on a virtual journey to Earth's most breathtaking destinations. Built with modern web technologies to create an interactive and engaging user experience, this project showcases the perfect blend of design and functionality.
          </p>
          <div className="mt-6 flex space-x-4">
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">HTML5</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">CSS3</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">JavaScript</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Parallax.js</span>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <span className="text-[#33ff77]">Key Features:</span> Parallax Scrolling, Interactive UI, Responsive Design, Dynamic Content Loading
          </div>
        </div>
      </div>
    </div>

    {/* Farmbot Project Card */}
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(51,255,119,0.2)] mb-16">
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/farmbot.jpg" 
            alt="Farmbot Project" 
            className="w-full h-[300px] object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        {/* Description section */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-4 text-[#33ff77]">Farmbot - EPICS ASU</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            As part of the EPICS program at ASU, our team developed an innovative farmbot to assist farmers in Suriname, South Africa. I specialized in developing the weed detection algorithm, a crucial component that enables the rover to identify and help eliminate unwanted vegetation. This project combines agricultural technology with machine learning to create practical solutions for farming communities.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Machine Learning</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Computer Vision</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Python</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">OpenCV</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">TensorFlow</span>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <span className="text-[#33ff77]">Key Features:</span> Real-time Weed Detection, Image Processing, Neural Network Training, Autonomous Navigation, Environmental Analysis
          </div>
        </div>
      </div>
    </div> 

    {/* TikTok Tech Jam Project Card */}
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(51,255,119,0.2)]">
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/tikt.jpg" 
            alt="TikTok Tech Jam Project" 
            className="w-full h-[300px] object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        {/* Description section */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-4 text-[#33ff77]">TikTok Speech-to-Text Assistant</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Developed during the TikTok Tech Jam Hackathon, this innovative project focuses on improving customer management through speech-to-text conversion. The program features advanced functionalities including speech recognition, text summarization using DistilBART, profanity filtering, and intelligent response recommendations, making customer interactions more efficient and manageable.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Python</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">NLP</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Speech Recognition</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">Transformers</span>
            <span className="text-sm bg-[#33ff77]/20 text-[#33ff77] px-3 py-1 rounded-full">RegEx</span>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <span className="text-[#33ff77]">Key Features:</span> Speech-to-Text Conversion, Text Summarization, Profanity Filtering, Context-Aware Responses
          </div>
          </div>
        </div>
      </div> 




  </div>
</div>


    </div>
  );
}

export default App;