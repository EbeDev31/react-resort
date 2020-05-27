import React from 'react'

const Title = ({title}) => {
    return (
        <div className='section-title'>
            <h4>{title|| 'Insert A title'}</h4>
            <div className='underliner'></div>
        </div>
    )
}

export default Title
