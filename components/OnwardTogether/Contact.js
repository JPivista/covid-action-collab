// components/ContactForm.js
'use client'
import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container,Form } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'


const ContactForm = () => {
    
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        city: '',
        country: '',
    });
    const isBlank = (str) => {
        return !str.trim();
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        setLoader(false);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // if (isBlank(formData.firstName)) {
        //     setError('Please enter your name.');
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (isBlank(formData.phone)) {
        //     setError('Please enter your phone number.');
        //     setIsSubmitting(false);
        //     return;
        // }
       

        // if (isBlank(formData.businessEmail)) {
        //     setError('Please enter a valid Email.');
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (isBlank(formData.message)) {
        //     setError('Please enter a message.');
        //     setIsSubmitting(false);
        //     return;
        // }

        try {
            const response = await axios.post(
                `https://beta.covidactioncollab.org/wp-json/contact-form-7/v1/contact-forms/8/feedback`,
                formData,
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data.status);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                //setError('An error occurred. Please try again.');
                const fieldErrors = {};
                const { status, invalid_fields } = response.data;
                invalid_fields.forEach((field) => {
                    fieldErrors[field.field] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
<div className="form-bg">

  {formVisible ? (    
 
 <Form  className="mt-3 fs-5" onSubmit={handleSubmit} encType='multipart/form-data'>
          <Row className="mb-3 fs-1 d-flex flex-lg-row flex-column p-2 p-lg-0">
            <Col className="mb-2">
              <Form.Control
                type="text"
                placeholder="*Name"
                name="name"
                className={`form-control ${errors && errors.name ? 'is-invalid' : ''}`}
                id="name"
                value={formData.name}
                onChange={handleChange}
                style={{ fontSize: "16px" }}
              />
            </Col>
            <Col className="mb-2">
              <Form.Control
                type="email"
                placeholder="*Email"
                name="email"
                    className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                style={{ fontSize: "16px" }}
              />
            </Col>
            <Col className="mb-2">
              <Form.Control
                type="text"
                placeholder="*Organization"
                name="organization"
                className={`form-control ${errors && errors.organization ? 'is-invalid' : ''}`}
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                style={{ fontSize: "16px" }}
              />
            </Col>
            <Col className="mb-2">
              <Form.Control
                type="text"
                placeholder="*City"
                name="city"
                className={`form-control ${errors && errors.city ? 'is-invalid' : ''}`}
                id="city"
                value={formData.city}
                onChange={handleChange}
                style={{ fontSize: "16px" }}
              />
            </Col>
            <Col className="mb-2">
              <Form.Control
                type="text"
                placeholder="*Country"
                name="country"
                className={`form-control ${errors && errors.country ? 'is-invalid' : ''}`}
                id="country"
                value={formData.country}
                onChange={handleChange}
                style={{ fontSize: "16px" }}
              />
            </Col>
          </Row>
          <Row><Col sm={12}>
<button type="submit" className="btn btn-form text-white px-2 p-1" disabled={isSubmitting}
style={{border:"1px solid white"}}
>
Submit 
                            { isSubmitting &&
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="3"
                                    animationDuration="1"
                                    width="20"
                                    visible={true}
                                />
                            }
</button>
                   
                    </Col></Row>

          {error && <p className="error">{error}</p>}          
</Form>
)  :(
<Container className="mt-5 main-color">
<h3 className="fs-4">Thank you.</h3>
<h3 className="fs-4">We will get in touch with you as soon as possible.</h3>            
</Container>


)

  }         
</div>
    );
};

export default ContactForm;
