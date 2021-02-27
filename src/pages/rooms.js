import React, { useContext } from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Title from '../components/Title';
import DisplayedRooms from '../components/DisplayedRooms';

const Rooms = () => {
  
    const banner = {
        title: 'Our Rooms',
        buttonName: 'return home'
    };
    return (
        <div>
            <section>
                <Hero banner={banner} />
            </section>
            <section className='filter-section'>
                <Title title='Search Rooms'/>
                <Filter/>
                <DisplayedRooms/>
            </section>
        </div>
    )
};
export default Rooms
