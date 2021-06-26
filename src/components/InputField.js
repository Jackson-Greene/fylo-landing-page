import React, { useState } from 'react'
import './InputField.scss';

function InputField() {
    return (
        <>
            <div className="input-field">
                <input type="text" placeholder="Enter your email..."></input>
            </div>
        </>
    );
}

export default InputField
