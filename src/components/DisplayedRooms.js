import React,{useContext} from 'react';
import RoomCard from '../components/RoomCard';
import { RoomContext } from '../context'

const DisplayedRooms = () => {
    const context = useContext(RoomContext);
    const { displayedRooms } = context;
    console.log("dispRooms",displayedRooms)
    return (
        <div className='roomslist-center'>
            {displayedRooms.map((room, index) => <RoomCard key={index} room={room} />)}
        </div>
    )
}

export default DisplayedRooms
