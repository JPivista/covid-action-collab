"use client";

import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import Contact from './Contact'

const ContactUs = () => {

  return (
    <>
      <div
        className="container0nward text-white text-center py-4 px-lg-4"
        style={{ backgroundColor: "#61AA99" }}
      >
        <div>
          <p className="bg-lato-bold font30px p-0 mb-2 mt-2">Contact Us</p>
          <p
            className="bg-lato-regular text-white p-0 mb-2"
            style={{ fontSize: "20px" }}
          >
            Please fill in this form so that we can get to know you better and
            make an impact together!
          </p>
        </div>

     <Contact/>

        <hr />
        <div className="gap-3">
          <Col className="gap-3">
            <Link href="https://covidactioncollab.org/" target="_blank">
              <Image src="/share.png" className="mx-2" />
            </Link>
            <Link href="https://twitter.com/CovActionCollab" target="_blank">
              <Image src="/twitter.png" className="mx-2" />
            </Link>
            <Link href="https://www.linkedin.com/showcase/community-action-collab/" target="_blank">
              <Image src="/linledin.png" className="mx-2" />
            </Link>
          </Col>
        </div>
      </div>
      <div className="container0nward bg-black py-3 ">
        <Col className="ms-lg-5 text-center  d-flex flex-column flex-lg-row justify-content-center align-content-center align-items-center">
          {/* <Link href="https://www.linkedin.com/showcase/community-action-collab/"> */}
            <Image src="/usaid copy.png" className="mx-3 mt-2" />
          {/* </Link> */}
        
          {/* <Link href="https://www.linkedin.com/showcase/community-action-collab/"> */}
            <Image src="/skill.png" className="mx-3 mt-3" />
          {/* </Link> */}
       
          {/* <Link href="https://www.linkedin.com/showcase/community-action-collab/"> */}
            <Image src="/cms copy.png" className="mx-3 mt-3" />
          {/* </Link> */}
       
          {/* <Link href="https://www.linkedin.com/showcase/community-action-collab/"> */}
            <Image src="/covid.png" className="mx-3 mt-3" />
          {/* </Link> */}
       
          {/* <Link href="https://www.linkedin.com/showcase/community-action-collab/"> */}
            <Image src="/community.png" className="mx-3 mt-3" />
          {/* </Link> */}
        </Col>
      </div>
    </>
  );
};

export default ContactUs;
