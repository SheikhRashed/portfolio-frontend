import React from 'react'

export default function Footer() {
  return (
    <footer className='rs-relative rs-overflow-hidden rs-py-3 rs-bg-primary '>
      <div className="rs-container">
        <p className='rs-text-center rs-text-white rs-capitalize '>
          &copy; {new Date().getFullYear()}  All Rights Reserved - <b>SheikhRashed</b>
        </p>
      </div>
    </footer>
  )
}
