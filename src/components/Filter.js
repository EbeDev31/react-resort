import React, { useContext } from 'react'
import { RoomContext } from '../context'

const Filter = () => {
    const context = useContext(RoomContext);
    const { roomTypes, type, allCapacity, capacity, price, minPrice,
        maxPrice, minSize, maxSize, handleOnChange, filterRooms
    } = context

    console.log(100,"100",minPrice,maxPrice)
    const roomTypeOptions = [
        <option key='all'>All</option>,
        roomTypes.map((type, index) => <option key={index}>{type}</option>)
    ]
    const roomCapacityOptions = allCapacity.map((capacity, index) => <option key={index}>{capacity}</option>)

    return (
        <div>
            <form>
                <label htmlFor='type'>Room Type</label>
                <select
                    name='type'
                    id='type'
                    value={type}
                    onChange={(e) => { handleOnChange(e) }}>
                    {roomTypeOptions}
                </select>

                <label htmlFor='capacity'>Guests</label>
                <select
                    name='capacity'
                    id='capacity'
                    value={capacity}
                    onChange={(e) => { handleOnChange(e) }}>
                    {roomCapacityOptions}
                </select>

                <label htmlFor='price'>Price</label>
                <input
                    type='range'
                    name='price'
                    id='price'
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    step={50}
                    onChange={(e) => { handleOnChange(e) }} />
                <span>{price}</span>

                <label htmlFor='size'>Room size</label>
                <input
                    type='number'
                    name='size'
                    id='size'
                    min={minSize}
                    max={maxSize}
                    value={minSize}
                    step={50}
                    onChange={(e) => { handleOnChange(e) }} />
                <input
                    type='number'
                    name='size'
                    id='size'
                    min={minSize}
                    max={maxSize}
                    step={50}
                    onChange={(e) => { handleOnChange(e) }} />

                <label htmlFor='breakfast'>Breakfast</label>
                <input
                    type='checkbox'
                    name='breakfast'
                    id='breakfast'
                    onChange={(e) => { handleOnChange(e) }} />

                <label htmlFor='pet'>Pet</label>
                <input
                    type='checkbox'
                    name='pet'
                    id='pet'
                    onChange={(e) => { handleOnChange(e) }} />
            </form>
        </div>
    )
}

export default Filter