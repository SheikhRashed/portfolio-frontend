import React from 'react';

// components
import FeatureCard from '../../FeatureCard/FeatureCard'

export default function Features() {
  return (
    <div className=' rs-py-16 lg:rs-py-0 rs-pb-8'>
      <div className="rs-container">
        <div className='rs-grid sm:rs-grid-cols-2 lg:rs-grid-cols-4 rs-gap-4 lg:-rs-mt-20'>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  )
}
