import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard() {
  return (
    <Link href={`#`} target="_blank">
      <div className=' group rs-relative rs-overflow-hidden rs-border rs-border-gray-300 rs-bg-white rs-transition-all rs-duration-300 hover:rs-shadow-lg'>
        <div className='rs-relative rs-w-full rs-h-[280px] rs-overflow-hidden'>
          <Image
            src={`https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80`} className=' !rs-w-full !rs-h-full rs-object-cover ' alt='project title' layout='fill' />
        </div>
        <div className=' rs-p-3 '>
          <span className=' rs-inline-block rs-uppercase rs-text-sm  rs-font-semibold rs-bg-secondary rs-px-3 rs-py-1 rs-tracking-[2px] rs-mb-2 '>MERN</span>
          <h6 className='rs-capitalize rs-text-2xl  '>Project Title Goes Here</h6>
        </div>
      </div>
    </Link>
  )
}
