import React from 'react';
import { Link } from 'react-router-dom'
import { FaMailBulk } from 'react-icons/fa'
export default function Footer() {
  const menuItems = [
    {
      title: 'Contact',
      key: '/contact'
    }
  ]
  return (
    <>
      <div className='h-44 md:h-24 mt-cls'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a2a2a" fill-opacity="1" d="M0,64L0,0L288,0L288,160L576,160L576,256L864,256L864,32L1152,32L1152,192L1440,192L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path></svg>
      </div>
      <div className='bg-theme w-screen flex justify-center'>
        <div className='md:w-full w-1/2'>
          <div className='p-10 font-mont text-center'>
            <p className='text-gray-50 pb-5'>Designed and Developed By</p>
            <div className='h-1 border-2 border-gray-50 border-dotted'>

            </div>
            <div className='flex text-white w-full justify-between py-3'>
              {/* <FaGithub />
              <FaLinkedin /> */}
              {menuItems.map((item) => (
                <Link to={`${item.key}`} className='txtalign-blk'><FaMailBulk /></Link>
              ))}

            </div>
            <div className='h-1 border-2 border-gray-50 border-dotted'>

            </div>
            <p className='text-gray-50 my-2'>Deepa.B</p>
          </div>
        </div>
      </div>
    </>
  );
}
