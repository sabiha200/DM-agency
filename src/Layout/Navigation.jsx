import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/Logo.png'

const Navigation = () => {
  return (
    <div className='w-full bg-brand'>
      <div className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-10" />
        </Link>

        {/* Navigation Links */}
        <ul className='flex justify-center space-x-6 text-white'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Service</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">Price</Link>
          </li>
          <li>
            <Link to="/">Vlog</Link>
          </li>
        </ul>

        <div>
            <button className='text-white  border border'>
                contact us
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
