import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import AOS from 'aos'
AOS.init(
  {
    duration: 1000
  }
);
export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className='h-screen bg-theme'>

          <div className='grid md:grid-cols-1 grid-cols-2 mx-10 z-10 bg-theme h-screen items-center border-4 md:border-0 border-white transform rotate-12 md:rotate-0'>
            <div className='h-1/2'>
              <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_lcsx30ez.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

            <div className='font-bold text-white md:px-1 border-l-2 border-white' data-aos='slide-down'>
              <h1 className='text-7xl md:text-4xl mx-3 md:mx-2 md:py-1  border-b-2 border-white py-3' data-aos='slide-right'>Hii , I am <b className='text-yellow-500'>DEEPA</b></h1>

              <h1 className='text-4xl md:text-2xl md:mx-2 md:py-1 mx-4 py-2' data-aos='slide-left'> MERN Stack <b className='text-red-500'>Developer</b></h1>
            </div>

          </div>
        </div>
        {/* Technologies */}
        <div className='mt-20'>
          <h1 className='text-4xl text-blue-800 font-bold text-center my-8' data-aos='slide-up'>Technologies I USE</h1>
          <div className='grid grid-cols-4 md:grid-cols-1'>

            <FaReact size={180} color='#61DBFB' className='w-full text-center mt-20' />
            <SiRedux size={180} color='#764abc' className='w-full text-center mt-20 animate-bounce' />
            <SiMongodb size={180} color='#589636' className='w-full text-center mt-20 animate-bounce' />
            <FaNodeJs size={180} color='#3C873A' className='w-full text-center mt-20' />
            <FaBootstrap size={180} color='blue' className='w-full text-center mt-20 animate-bounce' />
            <FaJsSquare size={180} color='green' className='w-full text-center mt-20' />
            <FaHtml5 size={180} color='orange' className='w-full text-center mt-20' />
            <FaCss3 size={180} color='blue' className='w-full text-center mt-20 animate-bounce' />

          </div>
        </div>
        {/* Javascript Buff */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='text-white font-bold text-4xl py-5'>Yes You Are Right...I am Javascript Buff</h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_sSF6EG.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10 text-justify'>
              Javascript is one of the most top-ranked programming languages
              because of its ubiquitous use on all platforms and mass adoption.
              Main Use Cases: Web Development.
            </p>
          </div>
        </div>
        {/* Dev stack section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-red-500'>
            <h1 className='text-white font-bold text-4xl py-5'>My Dev Stack</h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_dlw10cqe.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-1 p-5'>
              <div className='text-left md:text-center md:my-2'>
                <h1 className='text-xl font-bold'>Front End</h1>
                <hr />
                <p className='font-semibold my-2'>HTML5/CSS3</p>
                <p className='font-semibold my-2'>React</p>
                <p className='font-semibold my-2'>Javascript</p>
                <p className='font-semibold my-2'>Jquery</p>
                <p className='font-semibold my-2'>Redux</p>

              </div>
              <div className='text-center md:text-center md:my-3'>
                <h1 className='text-xl font-bold'>UI / UX</h1>
                <hr />

                <p className='font-semibold my-2'>Bootstrap</p>
                <p className='font-semibold my-2'>Tailwind</p>
                <p className='font-semibold my-2'>Ant Design</p>
                <p className='font-semibold my-2'>Material UI</p>
                <p className='font-semibold my-2'>Semantic UI</p>

              </div>
              <div className='text-right md:text-center md:my-3'>
                <h1 className='text-xl font-bold'>Backend and DB</h1>
                <hr />
                <p className='font-semibold my-2'>Node JS</p>
                <p className='font-semibold my-2'>Express JS</p>
                <p className='font-semibold my-2'>Mongo DB</p>


              </div>

            </div>
          </div>
        </div>
        {/* Dev Info */}

        <div className='text-4xl text-gray-500 text-center'>
          <h1>Who is Deepa ?</h1>
          <div className='h-screen relative text-gray-800'>
            <div className='h-full'>
              <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_dcatp5cr.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>

              <h1 className='text-2xl font-bold'>Hi , Hello , Namaste...
                <hr />
                <pre className='text-xl my-5 md:text-sm font-mont font-semibold'>
                  {JSON.stringify(
                    {
                      name: 'Deepa.J',
                      age: null,
                      gender: 'Female',
                      country: 'India'
                    }, null, 2)
                  }
                </pre>
              </h1>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
