import React,{useEffect} from 'react';
import Layout from '../components/Layout';
import projectsData from './../resources/projects';
import AOS from 'aos'
AOS.init(
  {
    duration:1000
  }
);

export default function Projects() {
  
  useEffect(() => {
    window.scrollTo(0,0) 
  }, []);
  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ygiuluqn.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <p className='text-xl font-semibold text-center'>Good ideas are not adopted automatically.They must be driven into practice with courageous patience</p>
        <h1 className='text-4xl text-center font-bold mt-5' data-aos='slide-up'>Because</h1>
        </div>
        <div className='font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full
        md:mx-5'>
<h1 className='text-8xl md:text-3xl' data-aos='slide-left'>THE GAME IS...</h1>
<h1 className='text-8xl md:text-3xl' data-aos='slide-right'>CONSISTANCY</h1>
        </div>

      </div>
      <div className='grid grid-cols-2 mt-20 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5'>
        {
          projectsData.slice(0,2).map((project)=> {

            return(
              <div>
                <h1 className="mb-5 font-bold text-2xl underline">{project.no}.{project.title}</h1>
                <div className='relative marker:p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                  
                  <img src={project.image} className='img-h text-center rounded-tr-3xl rounded-bl-3xl' alt="" />
                  <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0
                  bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                    <h1 className='text-2xl font-semibold text-white'>{project.title}</h1>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"  className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>DEMO</a>
                    </div>
                </div>
                </div>
            )
          })
        }

        </div>
        
        <div className="grid grid-cols-2 mt-10 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5"><h1 className="text-2xl font-bold underline">3.Uber-Eats Clone Demo App</h1></div>
        <div className='grid grid-cols-3 mt-8 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5 border-gray-400 relative marker:p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl p-2'>
        
        {
          projectsData.slice(2,5).map((project)=> {

            return(
              <div>
                <h1 className="mb-5 font-bold text-2xl underline">{project.title}</h1>
                <div className='relative marker:p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                  
                  <img src={project.image} className='img-h text-center rounded-tr-3xl rounded-bl-3xl' alt="" />
                  <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0
                  bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                    <h1 className='text-2xl font-semibold text-white'>{project.title}</h1>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"  className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>DEMO</a>
                    </div>
                </div>
                </div>
            )
          })
        }

        </div>

        <div className='grid grid-cols-2 mt-20 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5'>
        {
          projectsData.slice(5,projectsData.length).map((project)=> {

            return(
              <div>
                <h1 className="mb-5 font-bold text-2xl underline">{project.no}.{project.title}</h1>
                <div className='relative marker:p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                  
                  <img src={project.image} className='img-h text-center rounded-tr-3xl rounded-bl-3xl' alt="" />
                  <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0
                  bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                    <h1 className='text-2xl font-semibold text-white'>{project.title}</h1>
                    {/* <p className='text-1xl text-white'>{project.description}</p> */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer"  className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>DEMO</a>
                    </div>
                </div>
                </div>
            )
          })
        }

        </div>

    </Layout>
  );
}