import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full pt-40 pb-3' >
        <div className='w-full max-w-[1320px] mx-auto'>
            <ul className='w-full flex justify-between'>
                <li className='flex flex-col gap-3'>
                    <Link to='/'>HOME</Link>
                    <Link to='/'>HOME</Link>
                    <Link to='/'>HOME</Link>
                    <Link to='/'>HOME</Link>
                    <Link to='/'>HOME</Link>
                </li>
                <li  className='flex flex-col gap-3'>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                      <address>
                        Lorem ipsum dolor sit.
                    </address>
                </li>
                <li  className='flex flex-col gap-3'>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                      <address>
                        Lorem ipsum dolor sit.
                    </address>
                </li>
                <li  className='flex flex-col gap-3'>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                    <address>
                        Lorem ipsum dolor sit.
                    </address>
                      <address>
                        Lorem ipsum dolor sit.
                    </address>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;