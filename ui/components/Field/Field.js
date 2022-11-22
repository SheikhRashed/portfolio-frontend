import React from 'react'

export default function Field({ input, textarea, type = "text", placeholder }) {
  return (
    <>

      {
        input &&
        <div className='rs-relative rs-overflow-hidden'>
          <input type={type} placeholder={placeholder} className="rs-w-full rs-py-2 rs-px-4 rs-bg-white placeholder:rs-text-base placeholder:rs-text-gray-500 placeholder:rs-uppercase rs-text-md focus:rs-outline-none rs-transition-all rs-duration-300 rs-border-2 rs-border-transparent focus:rs-border-primary " />
        </div>
      }
      {
        textarea &&
        <div className='rs-relative rs-h-[180px]'>
          <textarea type={type} placeholder={placeholder} className="rs-w-full rs-h-full rs-resize-none rs-py-2 rs-px-4 placeholder:rs-text-base placeholder:rs-text-gray-500 placeholder:rs-uppercase rs-text-md focus:rs-outline-none rs-transition-all rs-duration-300 rs-border-2 rs-border-transparent focus:rs-border-primary " />
        </div>
      }
    </>
  )
}
