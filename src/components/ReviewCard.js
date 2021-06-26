import React, { useState } from 'react'
import './ReviewCard.scss';

function ReviewCard() {
    return (
        <>
            <div className="review-card">
                <img className="quote-image" src={"./images/icon-quotes.svg"} alt="quote icon"></img>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="profile-container">
                    <img src={"./images/avatar-testimonial.jpg"} alt="person"></img>
                    <div className="profile-text">
                        <span>Kyle Burton</span><br/>Founder and CEO, Huddle
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewCard
