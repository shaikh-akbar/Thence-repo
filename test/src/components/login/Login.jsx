import React from 'react';
import logo from '../../assets/logo.png';
import { IoMdClose } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import './Login.css'
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

function Login() {
    const navigate = useNavigate()
    const initialValues = {
        name: '',
        email: '',
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        toast.success('LoggedIn  successfully!');
        setSubmitting(false);
        navigate('/success')
    };

    return (
        <div>
            <div className="login-header">
                <div className="logo">
                    <img src={logo} alt='not found!'/>
                </div>
                <div className="cancel-btn">
                    <IoMdClose className='cancel'/>
                </div>
            </div>
            <div className="registration">
                <div className="registration-title">
                    <h3 className='h3-title'>Registration Form</h3>
                    <h1 className='h2-title'>Start Your Success<br/> &nbsp; &nbsp; Journey here!</h1>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, values }) => (
                        <Form>
                            <div className='form'>
                                <label htmlFor="name"></label>
                                <Field type="text" id="name" name="name" placeholder='Enter Your Name' className='input-field' />
                                <ErrorMessage name="name" component="div" className="error-message" />
                                <label htmlFor="email"></label>
                                <Field type="email" id="email" name="email" placeholder='Enter Your Email' className='input-field' />
                                <ErrorMessage name="email" component="div" className="error-message" />
                                <button type="submit" className={`btn-submit ${values.name || values.email ? 'valid' : 'disable'}`} disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
