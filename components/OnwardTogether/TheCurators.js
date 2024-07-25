"use client";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TheCurators = () => {
  return (
    <>
      <div className="container0nward bg-black px-5 mb-4 pb-4">
        <Row className="text-white text-center pt-2">
          <p className="bg-lato-bold font30px p-0 m-0">The Curators</p>
        </Row>
        <Row
          className="mt-3 d-flex flex-column flex-lg-row"
          style={{
            border: "2px solid",
            borderColor: "#3C3E3E",
            borderRadius: "10px",
          }}
        >
          <Col style={{ color: "#61AA99" }}>
            <p className="bg-lato-regular font20px p-0 mb-0 mt-2">
              <b> Chandrika Grover </b>
            </p>
            <p
              className="bg-lato-regular text-white p-0 mb-2"
              style={{ fontSize: "16px" }}
            >
              Cultural Strategist, <br />
              Exhibit curation for Onward Together
            </p>
          </Col>
         
          <Col style={{ color: "#61AA99" }}>
            <p className="bg-lato-regular font20px p-0 mb-0 mt-2">
              <b> Kristine Michael </b>
            </p>
            <p
              className="bg-lato-regular text-white p-0 mb-2"
              style={{ fontSize: "16px" }}
            >
              Curatorial Advisor,
              <br /> Visual curation for Onward Together
            </p>
          </Col>
          <Col style={{ color: "#61AA99" }}>
            <p className="bg-lato-regular font20px p-0 mb-0 mt-2">
              <b> Damini Ralleigh </b>
            </p>
            <p
              className="bg-lato-regular text-white p-0 mb-2"
              style={{ fontSize: "16px" }}
            >
              Journalist, <br /> Crafted the stories for Onward Together
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TheCurators;
