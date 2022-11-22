import React, { useRef } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

// react icons 
import { ImGithub } from 'react-icons/im';
import { TfiLinkedin } from 'react-icons/tfi';
import { RiInstagramFill } from 'react-icons/ri';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';


export default function MobileMenu({ open, handler }) {
  const router = useRouter();
  const sidebarRef = useRef();


  function sidebarHandler(e) {
    if (e?.target === sidebarRef.current) {
      handler()
    }
  }


  return (
    <div className={`rs-w-full rs-h-screen rs-overflow-hidden rs-bg-black rs-fixed rs-left-0 rs-top-[60px] rs-z-40 lg:rs-hidden ${!open ? ' rs-hidden ' : ''} `} onClick={sidebarHandler} ref={sidebarRef}>
      <div className={` rs-bg-white rs-h-screen rs-flex rs-flex-col rs-justify-between rs-overflow-hidden rs-overflow-y-scroll rs-duration-1000 rs-max-w-[75%] rs-relative `}>
        <div>
          <ul className='rs-flex rs-flex-col'>
            <li>
              <Link href={'/'} className={` rs-inline-block rs-w-full rs-py-3 rs-px-2 rs-text-base rs-uppercase rs-font-medium  rs-transition-all rs-duration-300 hover:rs-bg-secondary  ${router.pathname === '/' ? 'rs-bg-secondary' : ' '}   `}>
                About
              </Link>
            </li>
            <li>
              <Link href={'#portfolio'} className={` rs-inline-block rs-w-full rs-py-3 rs-px-2 rs-text-base rs-uppercase rs-font-medium  rs-transition-all rs-duration-300 hover:rs-bg-secondary  ${router.pathname === '#portfolio' ? 'rs-bg-secondary' : ' '}   `}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href={'#technology'} className={` rs-inline-block rs-w-full rs-py-3 rs-px-2 rs-text-base rs-uppercase rs-font-medium  rs-transition-all rs-duration-300 hover:rs-bg-secondary  ${router.pathname === '#technology' ? 'rs-bg-secondary' : ' '}   `}>
                Technology
              </Link>
            </li>
            <li>
              <Link href={'#contact'} className={` rs-inline-block rs-w-full rs-py-3 rs-px-2 rs-text-base rs-uppercase rs-font-medium  rs-transition-all rs-duration-300 hover:rs-bg-secondary  ${router.pathname === '#contact' ? 'rs-bg-secondary' : ' '}   `}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='rs-py-6 rs-pb-16 rs-px-2'>
          <h6 className='rs-text-base rs-uppercase rs-font-medium rs-mb-2'>Connect With Me:</h6>
          <ul className='rs-flex rs-gap-2'>
            <li>
              <Link href={'https://www.facebook.com/devrashed06'} target='_blank' className='rs-inline-block rs-p-2 rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded   rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90  '>
                <GrFacebookOption className='rs-text-lg' />
              </Link>
            </li>
            <li>
              <Link href={'https://twitter.com/SheikhRashed06'} target='_blank' className='rs-inline-block rs-p-2 rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded   rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90  '>
                <GrTwitter className='rs-text-lg' />
              </Link>
            </li>
            <li>
              <Link href={'https://www.linkedin.com/in/sheikh-rashed'} target='_blank' className='rs-inline-block rs-p-2 rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded   rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90  '>
                <TfiLinkedin className='rs-text-lg' />
              </Link>
            </li>
            <li>
              <Link href={'https://www.instagram.com/sheikh.rashed445'} target='_blank' className='rs-inline-block rs-p-2 rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded   rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90  '>
                <RiInstagramFill className='rs-text-lg' />
              </Link>
            </li>
            <li>
              <Link href={'https://github.com/SheikhRashed'} target='_blank' className='rs-inline-block rs-p-2 rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded   rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90  '>
                <ImGithub className='rs-text-lg' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
