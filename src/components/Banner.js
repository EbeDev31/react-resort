import React from 'react'
import { Link } from 'react-router-dom'


const Banner = ({ banner }) => {
    const { title, message, buttonName } = banner;
    return (
        <div className='banner'>
            <h1>{title || "Please Add A Title"}</h1>
            <div className='underliner'></div>
            <p>{message || ""}</p>
            {buttonName?<a className='btn-primary' href='./rooms'>{buttonName}</a>:<></>}
        </div>
    )
}

export default Banner
