import React from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import FilteredRoom from '../components/FilteredRooms';

 const Rooms = () => {
    return (
        <div>
            <section>
                <Hero/>
            </section>
            <section>
                Search Rooms
                <Filter/>
                <FilteredRoom/>

            </section>
        </div>
    )
};
export default Rooms
