import React from 'react';
import './Button.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Button = ({ text }) => {
    return (
        <div className="topbar__add">
            <button className="button_add"><AiOutlinePlusCircle /> {text}</button>
        </div>
    )
}

export default Button;