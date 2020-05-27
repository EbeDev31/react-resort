import React from 'react'
import { Link } from 'react-router-dom'

const RoomCard = ({ room }) => {
    return (
        <div className='room'>
            <div className='img-container'>
                <img src={room.images[0]} alt={'single-room'} />
                <div className='price-top' >
                    <h6 className='price'>{room.price}</h6>
                    <p>per night</p>
                </div>
                <Link className='btn-primary room-link' to={`./singleRoom/${room.name}`}>Feature</Link>
            </div>
            <p className='room-info'>{room.name}</p>
        </div>
    )
}

export default RoomCard
