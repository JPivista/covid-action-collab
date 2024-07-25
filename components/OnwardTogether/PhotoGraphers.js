'use client'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'



const PhotoGraphers = () => {
  return (
    <>
      <div
        className='container0nward text-white mt-5 text-center py-4 px-lg-4'
        style={{ backgroundColor: "#61AA99" }}
       
      >
        <Col className='' >
          <h3 className='bg-lato-bold font30px'>
            The Photographers
          </h3>
        </Col>
        <Col>
          <p className='font20px lato-regular '>
            Meet the two photographers, who helped us capture the stories of resilience we witnessed during this journey.
          </p>
        </Col>

        <Col className='photographersBorder'
        //  style={{marginTop:"150px" , 
        //  border: "2px solid white"
        //  }}
        >
          <Col className=''>
            <Row className='d-flex flex-md-row flex-column mx-0' style={{marginTop:"-170px"}}>
              <Col className='p-4'>
                <div>
                  <Image src="/sathish.png" alt="" />
                </div>
                <p className='pt-3 font30px bg-lato-bold'>
                  Satish VM
                </p>
                <p>
                  Satish VM began his career making advertising and commercial films in 2000s, shifting gears to documentary filmmaking and portrait and street photography. Kamerakirriks (Camera Mischief), his production company handles photos, video and audio productions across all industry sectors. His personal goal is to tell as many stories of the vulnerable as he can in his lifetime, and for the last three years, he has been documenting narratives of the collaborative, its partners and the beneficiaries with COVIDActionCollab.
                </p>
              </Col>
              
              <Col className='p-4' 
              // style={{borderLeft: " 1px solid white", height:"250px"}} 
              >
                <Image src="/nages.png" alt="" />
                <p className='pt-3 bg-lato-bold font30px '>
                  Jaisingh Nageswaran
                </p>
                <p >
                  Jaisingh is a self-taught photographer from Madurai, Tamil Nadu. Born to working-class parents, he was taught by his grandmother at home. Jaisingh’s practice revolves around documenting the socially vulnerable communities and the issues of rural life. He is an active member of an artist collective, 13Jara and also works as a photographer doing stills for films. In 2021, he became a Magnum Foundation Photography and Social Justice Fellow. For COVIDActionCollab, Jaisingh has travelled extensively to capture souls through the art of photography from the field all over the country over the last few weeks.
                </p>
              </Col>
            </Row>
          </Col>
        </Col>
      </div>
    </>
  )
}

export default PhotoGraphers
