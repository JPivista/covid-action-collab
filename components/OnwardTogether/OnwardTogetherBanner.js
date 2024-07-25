'use client'
import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useEffect, useState } from 'react';






const OnwardTogetherBanner = () => {

  const [isMobile, setIsMobile] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };


  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== 'undefined') {
      // Initial check on component mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const backgroundStyles = {
    height: isMobile ? '300px' : '100vh',
    width: '100%',
    backgroundSize: isMobile ? 'cover' : 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: isMobile ? 'center center' : 'initial',
    backgroundImage: isMobile
      ? "url('/onward_banner.png')"
      : "url('/onward_banner.png')",
  };


  return (
    <>
      <div className='p-0'>

        <div className="py-4 ps-lg-5 ps-2 " >
          <Link href="/" className="text-decoration-none">
            <Image src="/covid_logo.png" alt="logo" width={150} className='ps-lg-2' />
          </Link>
        </div>


        {/* banner image */}


          <div style={backgroundStyles} className='container0nward d-flex align-content-center'>

          </div>
    


      <div className='container0nward bg-black d-flex justify-content-center align-content-center py-3'>
       
          <Image src="/onward_together.png" alt="onward together" className='p-5 onwardImage' />
   
      </div>
      </div>


    </>
  )
}

export default OnwardTogetherBanner
