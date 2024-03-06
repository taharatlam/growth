'use client'
import React from 'react'
import InnerHeader from '@/components/InnerHeader'
import careerImg from '../../assets/images/contact-banner.jpg';
import Image from 'next/image';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Link from 'next/link';

import phoneIcon from '../../assets/images/phone-icon.svg';
import mailIcon from '../../assets/images/mail-icon.svg';
import locIcon from '../../assets/images/loc-icon.svg';
import locIcon2 from '../../assets/images/loc2.svg';


const ContactUs = () => {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email Address is required'),
        phone: Yup.string().required('Phone Number is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
    });

    const onSubmit = (values, { resetForm }) => {
        // You can handle form submission logic here
        console.log('Form submitted:', values);
        // Reset the form after successful submission
        resetForm();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const data = [
        "Delhi",
        "Maharashtra",
        "Bengaluru",
        "Haryana",
        "West Bangal",
        "Gujarat",
        "Uttar Pradesh",
        "Singapore"
    ]

    return (
        <>
            <InnerHeader title={'Get in Touch with Us for Expert Assistance'} image={careerImg} para={'Reach Out to Our Team for Personalised Support and Solutions.'} />
            <section className="sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <p className="para text-center">
                                No question is too big or small for our team of experts. Whether you&lsquo;re a seasoned investor or just starting out, we&lsquo;re here to provide the guidance and support you need to make informed decisions and build a secure financial future. Contact us now to get started.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="con-sec sec pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={formik.handleSubmit} autocomplete="off" className="con-form">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="name" className="label-text">
                                                Full Name
                                            </label>
                                            <div className="inp-grp">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            {formik.touched.name && formik.errors.name && (
                                                <div className="error-text">{formik.errors.name}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="email" className="label-text">
                                                Email Address
                                            </label>
                                            <div className="inp-grp">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="error-text">{formik.errors.email}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="label-text">
                                                Phone Number
                                            </label>
                                            <div className="inp-grp">
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    value={formik.values.phone}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            {formik.touched.phone && formik.errors.phone && (
                                                <div className="error-text">{formik.errors.phone}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="subject" className="label-text">
                                                Subject
                                            </label>
                                            <div className="inp-grp">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formik.values.subject}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            {formik.touched.subject && formik.errors.subject && (
                                                <div className="error-text">{formik.errors.subject}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <div className="form-group">
                                            <label htmlFor="message" className="label-text">
                                                Message
                                            </label>
                                            <div className="inp-grp">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows="3"
                                                    value={formik.values.message}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                ></textarea>
                                            </div>
                                            {formik.touched.message && formik.errors.message && (
                                                <div className="error-text">{formik.errors.message}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="main-btn center white">
                                            <span>Send</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="loc-sec">
                <div className="container">
                    <div className="row">
                        <div className="loc-container">
                            <Link href={'tel:91123455632'} className="loc">
                                <Image src={phoneIcon} alt="" />
                                <span>+91 12345 5632</span>
                            </Link>
                            <Link href={'mailto:info@algoquant.com'} className="loc">
                                <Image src={mailIcon} alt="" />
                                <span>info@algoquant.com</span>
                            </Link>
                            <Link href="https://maps.app.goo.gl/aqNJwAVSE2iFaYRz5?g_st=iw" className="loc">
                                <Image src={locIcon} alt="" />
                                <span>
                                    4/11, Asaf Ali Rd, Chatta lal Miya, Chandni Mahal, Chandni Chowk, New Delhi, Delhi, 110002
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec our-pres-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="sec-head">Our <span>Prescence</span></h3>
                        </div>
                        <div className="col-12">
                            <div className="co-container">
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div className='co-wrap' key={index}>
                                                <Image src={locIcon2} alt="" />
                                                <span>{item}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs