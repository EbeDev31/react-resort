import React, { useContext } from 'react'
import Title from './Title';
import context from '../context';
import RoomCard from './RoomCard';

const FeaturedRooms = ({ rooms }) => {
    const roomContext = useContext(context)
    return (
        <div>
            <Title title={'Featured Rooms'} />
            <div className='featured-rooms-center'>
                {
                    rooms ? rooms.map((room, index) => <RoomCard key={index} room={room} />) :
                        <h1>NO FEATURED ROOMS</h1>
                }
            </div>
        </div>
    )
}

export default FeaturedRooms
