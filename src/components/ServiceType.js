import React from 'react'

const ServiceType = ({details}) => {
    const {icon, serviceType,about} = details
    return (
        <div className='service'>
            <span> {icon}</span> 
            <h5 className='service-type'>{serviceType||'ServiceType'}</h5>
            <p>{about}</p>
            
        </div>
    )
}

export default ServiceType
