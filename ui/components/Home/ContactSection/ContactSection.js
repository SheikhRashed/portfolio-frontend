import React from 'react'

// react icons 
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { RiInstagramFill, RiSendPlaneFill } from 'react-icons/ri';


// components 
import Field from '../../Field/Field';
import Button from '../../Button/Button';
import LocationCard from '../../LocationCard/LocationCard';
import { TfiLinkedin } from 'react-icons/tfi';
import { ImGithub } from 'react-icons/im';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className='rs-py-16 rs-pb-16 lg:rs-pb-32 rs-bg-secondary' id='contact'>
      <div className="rs-container">
        <div className='rs-text-center rs-mb-8 lg:rs-mb-12'>
          <h2 className='rs-text-3xl lg:rs-text-4xl rs-uppercase rs-font-bold rs-text-primary rs-mb-2 lg:rs-mb-3'>Contact With Me</h2>
          <p className=' rs-max-w-xl rs-mx-auto rs-text-sm rs-text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat alias quidem, maxime deleniti quis ipsam eligendi in quod iusto nobis, facilis fugiat consequatur minima excepturi ullam cumque eius? Ducimus.
          </p>
        </div>
        <div className='rs-grid lg:rs-grid-cols-2 rs-gap-6 lg:rs-max-w-6xl rs-mx-auto '>
          <div>
            <form action="#">
              <div className='  rs-space-y-[12px]'>
                <Field input placeholder={'Name'} />
                <Field input placeholder={'email'} type='email' />
                <Field textarea placeholder={'message'} type='email' />
                <Button icon={<RiSendPlaneFill />} label='Send' />
              </div>
            </form>
          </div>
          <div className='rs-flex rs-flex-col rs-gap-3'>
            <div className='rs-bg-white rs-p-3 rs-flex rs-items-center rs-justify-between rs-border rs-border-gray-300 rs-order-2 lg:rs-order-none '>
              <h6 className=' rs-hidden  lg:rs-inline-block  rs-text-base rs-whitespace-nowrap rs-uppercase rs-font-medium '>you can follow me :</h6>
              <ul className='rs-flex rs-justify-center lg:rs-justify-end rs-w-full rs-gap-4 lg:rs-gap-2'>
                <li>
                  <Link href={'https://www.facebook.com/devrashed06'} target="_blank" className='rs-flex rs-items-center rs-justify-center rs-w-[36px] rs-h-[36px] rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90'>
                    <GrFacebookOption className='rs-text-lg' />
                  </Link>
                </li>
                <li>
                  <Link href={'https://twitter.com/SheikhRashed06'} target="_blank" className='rs-flex rs-items-center rs-justify-center rs-w-[36px] rs-h-[36px] rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90'>
                    <GrTwitter className='rs-text-lg' />
                  </Link>
                </li>
                <li>
                  <Link href={'https://www.linkedin.com/in/sheikh-rashed'} target="_blank" className='rs-flex rs-items-center rs-justify-center rs-w-[36px] rs-h-[36px] rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90'>
                    <TfiLinkedin className='rs-text-lg' />
                  </Link>
                </li>
                <li>
                  <Link href={'https://www.instagram.com/sheikh.rashed445/'} target="_blank" className='rs-flex rs-items-center rs-justify-center rs-w-[36px] rs-h-[36px] rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90'>
                    <RiInstagramFill className='rs-text-lg' />
                  </Link>
                </li>
                <li>
                  <Link href={'https://github.com/SheikhRashed'} target="_blank" className='rs-flex rs-items-center rs-justify-center rs-w-[36px] rs-h-[36px] rs-bg-primary rs-relative  rs-overflow-hidden rs-rounded rs-text-white  rs-transform  rs-duration-300 rs-scale-100 active:rs-scale-90'>
                    <ImGithub className='rs-text-lg' />
                  </Link>
                </li>
              </ul>
            </div>
            <div className=' rs-order-1 lg:rs-order-none'>
              <LocationCard />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
