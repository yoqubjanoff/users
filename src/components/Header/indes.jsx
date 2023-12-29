import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'

const Header = () => {
  return (
    <header className='w-full pt-4 pb-4 border-b border-solid border-[#080]'>
        <div className=" w-full max-w-[1320px] mx-auto px-1 py-1">
        <div className="wrapper flex items-center justify-between">
            <Link to='/'>
                <img className='w-34 h-32' src={logo} alt="" />
            </Link>
            <nav className='w-full max-w-[520px] flex items-center justify-between'>
                <Link to='/'>HOME
                </Link> 
                <Link to='/'>ABOUT
                </Link>
                <Link to='/'>BLOG
                </Link>
                <Link to='/'>CONTACT
                </Link>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header