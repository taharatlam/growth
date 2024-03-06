'use client'
import InnerHeader from '@/components/InnerHeader'
import Image from 'next/image'
import Link from 'next/link'
import careerImg from '/src/assets/images/career-banner.jpg';
import React, { useState, useCallback, useEffect  } from 'react'

import upIcon from '/src/assets/images/upload.svg'
import removeIcon from '/src/assets/images/cross.svg'

import api from '@/helpers/ApibaseUrl';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const InnerJob = ({params}) => {

    const [careerData, setCareerData] = useState(null)
    console.log('slug', params);
    const fetchCareerData = useCallback(async () => {
        try {
          const response = await api.get(`/job?slug=${params.job}`);
          setCareerData(response.data);
        } catch (error) {
          console.error('Error fetching blog data:', error);
        }
      }, [params.id]); // Dependency array includes params.id
    
      useEffect(() => {
        fetchCareerData();
      }, [fetchCareerData]);

    const [file,setFile] = useState(null)

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        resume: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email Address is required'),
        phone: Yup.string().required('Phone Number is required'),
        message: Yup.string().required('Message is required'),
        resume: Yup.mixed()
            .test('fileSize', 'File size must be 1MB or less', (value) => {
                if (!value) return true; // No file provided, skip validation
                return value.size <= 1024 * 1024; // 1MB
            })
            .test('fileType', 'File must be in PDF format', (value) => {
                if (!value) return true; // No file provided, skip validation
                return value.type === 'application/pdf';
            }),
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

    return (
        <div>
            <InnerHeader title={careerData?.role} image={careerImg} />
            <section className="job-con-sec sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {
                                careerData && (
                                    <div dangerouslySetInnerHTML={{ __html: careerData.content }} />
                                )
                            }
                        </div>
                        <div className="col-lg-6 col-12">
                            <form onSubmit={formik.handleSubmit} className="con-form">
                                <div className="row">
                                    <div className="col-12 mb-5">
                                        <h3 className="sec-head white text-center ">
                                            Apply Now
                                        </h3>
                                    </div>
                                </div>
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
                                        <label htmlFor="resume" className="label-text">Resume (PDF, max 1MB)</label>
                                        <div className="inp-grp">
                                            <div className="up-wrap">
                                                <input
                                                    type="file"
                                                    id="resume"
                                                    name="resume"
                                                    accept=".pdf"
                                                    onChange={(event) => {
                                                        formik.setFieldValue('resume', event.currentTarget.files[0]);
                                                        setFile(event.currentTarget.files[0]);
                                                    }}
                                                />
                                                <label htmlFor="resume">
                                                    <span>{file ? file.name : 'Upload Resume'}</span>
                                                    {
                                                        !file ?
                                                        <Image src={upIcon} alt="" />
                                                        :
                                                        <button className='remove-btn' onClick={()=>{formik.setFieldValue('resume', '');setFile(null)}}>
                                                            <Image src={removeIcon} alt="" />
                                                        </button>
                                                    }
                                                </label>
                                            </div>
                                        </div>
                                            {formik.touched.resume && formik.errors.resume && <div>{formik.errors.resume}</div>}
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
        </div>
    )
}

export default InnerJob