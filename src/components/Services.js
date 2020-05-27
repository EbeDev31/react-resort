import React from 'react';
import Title from './Title';
import ServiceType from './ServiceType';


const Services = ({services}) => {
    
    return (
        <div>
            <Title title='services'/>
            <div className='services-center'>
                {
                  services.map((service,index) =><ServiceType key={index} details={service}/>)
                }
            </div>
        </div>
    )
}

export default Services