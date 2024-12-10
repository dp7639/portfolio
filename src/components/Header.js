import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
export default function Header() {

  const [showMenu, setshowMenu] = useState('md:hidden')
  const menuItems = [
    {
      title: 'Home',
      key: '/'
    },
    {
      title: 'Projects',
      key: '/projects'
    },
    {
      title: 'Contact',
      key: '/contact'
    }
  ]

  const path = window.location.pathname
  return (
    <div className='text-white font-mont fixed top-0 left-0 right-0 z-50'>
      <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu === '' && 'md:flex-col'}`}>


        <div className='flex justify-between w-full items-center'>
         <Link to='/'> <h1 className='text-4xl font-semibold hover:text-yellow-500 cursor-pointer'>Deepa</h1></Link>
         

          <FaBars onClick={() => {
            if (showMenu === 'md:hidden') {
              setshowMenu('')
            }
            else {
              setshowMenu('md:hidden')
            }

          }} className='lg:hidden xl:hidden 2xl:hidden md:flex items-center cursor-pointer' />
        </div>

        <div className='flex md:hidden'>
          {menuItems.map((item) => {
            return (
              <li className={`list-none mx-5 px-5 ${item.key === path && 'bg-white text-black rounded-md'}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}

        </div>

        <div className={`mt-5 md:flex flex-col items-start w-full lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
          {menuItems.map((item) => {
            return (
              <li className={`list-none mt-5 px-3 ${item.key === path && 'bg-white text-black rounded-md'}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}

        </div>


      </div>


    </div>
  );
}
