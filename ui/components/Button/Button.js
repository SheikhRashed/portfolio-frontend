import Link from 'next/link'
import React from 'react'

export default function Button({ label = "label", icon, type = 'button', linkable, target = '_blank' }) {
  return (
    <>
      {
        !linkable ?
          <button type={type} className={` rs-relative rs-flex rs-items-center rs-justify-center rs-overflow-hidden  rs-rounded-sm rs-gap-2 rs-transition-all rs-duration-200 rs-bg-dark hover:rs-bg-black rs-transform rs-scale-100 active:rs-scale-95   rs-text-white rs-px-3 rs-py-2 rs-text-sm rs-uppercase rs-tracking-wide rs-text-center`}>
            {
              icon &&
              <span>
                {icon}
              </span>
            }
            {
              label
            }
          </button> :
          <Link href={linkable} target={target} className={` rs-relative rs-flex rs-items-center rs-justify-center rs-overflow-hidden  rs-rounded-sm rs-gap-2 rs-transition-all rs-duration-200 rs-bg-dark hover:rs-bg-black rs-transform rs-scale-100 active:rs-scale-95   rs-text-white rs-px-3 rs-py-2 rs-text-sm rs-uppercase rs-tracking-wide rs-text-center`}>
            {
              icon &&
              <span>
                {icon}
              </span>
            }
            {
              label
            }
          </Link>
      }
    </>
  )
}
