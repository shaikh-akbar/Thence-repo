import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import successlogo from '../../assets/successlogo.png';
import './Success.css';
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

       
        if (countdown === 0) {
            clearInterval(timer);
            navigate('/home');
        }

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <div>
            <div className="logo">
                <img src={logo} alt='not found!' />
            </div>
            <div className="form-success">
                <div className="success">
                    <img src={successlogo} alt='not found' loading='lazy'/>
                    <h6>Success Submitted</h6>
                    <h2>Congratulations</h2>
                    <p>Your Request has Been Submitted Successfully to us. we<br /> will validate Your Information And Reach Out To Your <br /> Shortly With Updates</p>
                </div>
                <div className="success-footer">
                    <p>Redirected To HomePage in <span>{countdown} Seconds</span></p>
                </div>
            </div>
        </div>
    );
}

export default Success;
