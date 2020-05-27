import React from 'react';
import Banner from './Banner'

const Hero = ({banner}) => {
    return (
        <div className={'defaultHero'}>
            {banner?<Banner banner={banner}/>:<></>}
        </div>
    )
}

export default Hero
