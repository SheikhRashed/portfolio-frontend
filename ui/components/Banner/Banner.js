import React from 'react'
import Image from 'next/image'

// react icons 
import { TfiDownload } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';

// components
import Button from '../Button/Button'

export default function Banner() {
  return (
    <section className='rs-relative rs-py-12 lg:rs-py-20 rs-pb-16 lg:rs-pb-48 rs-bg-white'>
      <div className="rs-container">
        <div className='xl:rs-max-w-7xl xl:rs-mx-auto rs-flex rs-flex-col lg:rs-flex-row rs-items-start lg:rs-items-center rs-justify-center rs-gap-6'>
          <div className=' rs-relative rs-z-10 rs-w-full md:rs-w-[400px] rs-h-[280px] md:rs-h-[360px]  bg-white rs-content-none after:rs-w-full after:rs-h-full after:rs-bg-primary after:rs-absolute after:rs-z-[-1] after:rs-left-[-10px] lg:after:rs-left-[-20px] after:rs-bottom-[-12px] lg:after:rs-bottom-[-20px]'>
            <Image src={'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} className='!rs-w-full !rs-h-full rs-object-cover' alt='title' layout='fill' />
          </div>
          <div>
            <div className=' rs-mb-2 md:rs-mb-3'>
              <span className='rs-inline-block rs-text-[12px] rs-leading-[24px] rs-uppercase rs-font-semibold rs-text-gray-600 rs-mb-1'>Front End Developer</span>
              <h1 className=' rs-text-3xl lg:rs-text-5xl rs-font-bold rs-text-primary rs-uppercase'>Sheikh Rashed</h1>
            </div>
            <p className=' rs-max-w-full md:rs-max-w-xl rs-text-sm sm:rs-text-[16px] sm:rs-leading-[26px]  rs-text-gray-700 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis doloremque accusamus reiciendis iusto aspernatur expedita ducimus laboriosam officia, eligendi praesentium magnam et incidunt, quibusdam pariatur vero. Inventore, quia culpa!
            </p>
            <ul className='rs-flex rs-items-center rs-gap-2 rs-mt-6'>
              <li>
                <Button linkable={'/resume.pdf'} icon={<TfiDownload />} label='Get Resume' />
              </li>
              <li>
                <Button linkable={'tel:+8801740740445'} icon={<IoCallOutline />} label='Call Me' target='_self' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
