import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router'

// react icons 
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

// components
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const sidebarHandler = () => setOpen(!open);

  return (
    <>
      <header className='rs-sticky rs-bg-primary rs-top-0 rs-left-0 rs-w-full rs-z-50 rs-py-3 md:rs-py-5'>
        <div className='rs-container'>
          <div className='rs-flex rs-justify-between rs-items-center'>
            {/* brand logo */}
            <div>
              <h2 className=' rs-text-3xl rs-uppercase rs-font-bold'>Sheikh <span className='rs-text-white'>Rashed</span></h2>
            </div>
            <div className='md:rs-flex md:rs-gap-1'>
              <ul className=' rs-hidden md:rs-flex rs-gap-1'>
                <li>
                  <Link href={'/'}><span className={`rs-relative rs-inline-block rs-py-2 rs-px-4 rs-bg-transparent hover:rs-bg-dark rs-text-sm rs-uppercase rs-font-medium rs-text-white rs-transition-all rs-duration-300 rs-content-none after:rs-absolute after:rs-top-0 after:rs-left-0 after:rs-w-full after:rs-h-[2px] after:rs-bg-transparent hover:after:rs-bg-white rs-transform rs-scale-100 ${router.pathname === '/' ? ' !rs-bg-dark after:rs-bg-white ' : ''}  `}>About</span></Link>
                </li>
                <li>
                  <Link href={'#projects'}><span className={`rs-relative rs-inline-block rs-py-2 rs-px-4 rs-bg-transparent hover:rs-bg-dark rs-text-sm rs-uppercase rs-font-medium rs-text-white rs-transition-all rs-duration-300 rs-content-none after:rs-absolute after:rs-top-0 after:rs-left-0 after:rs-w-full after:rs-h-[2px] after:rs-bg-transparent hover:after:rs-bg-white rs-transform rs-scale-100 ${router.pathname === '#projects' ? ' !rs-bg-dark after:rs-bg-white ' : ''}  `}>Projects</span></Link>
                </li>
                <li>
                  <Link href={'#technology'}><span className={`rs-relative rs-inline-block rs-py-2 rs-px-4 rs-bg-transparent hover:rs-bg-dark rs-text-sm rs-uppercase rs-font-medium rs-text-white rs-transition-all rs-duration-300 rs-content-none after:rs-absolute after:rs-top-0 after:rs-left-0 after:rs-w-full after:rs-h-[2px] after:rs-bg-transparent hover:after:rs-bg-white rs-transform rs-scale-100 ${router.pathname === '/#technology' ? 'rs-bg-dark after:rs-bg-white' : ''}  `}>Technology</span></Link>
                </li>
                <li>
                  <Link href={'#contact'}><span className={`rs-relative rs-inline-block rs-py-2 rs-px-4 rs-bg-transparent hover:rs-bg-dark rs-text-sm rs-uppercase rs-font-medium rs-text-white rs-transition-all rs-duration-300 rs-content-none after:rs-absolute after:rs-top-0 after:rs-left-0 after:rs-w-full after:rs-h-[2px] after:rs-bg-transparent hover:after:rs-bg-white rs-transform rs-scale-100 ${router.pathname === '#contact' ? ' !rs-bg-dark after:rs-bg-white ' : ''}  `}>Contact</span></Link>
                </li>
              </ul>
              <button className=' md:rs-hidden rs-text-white rs-text-3xl rs-cursor-pointer rs-transform rs-scale-100 rs-duration-300 active:rs-scale-90' onClick={sidebarHandler}>
                {
                  open ?
                    <AiOutlineMenuFold /> :
                    <AiOutlineMenuUnfold />
                }
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} handler={sidebarHandler} />
    </>
  )
}
