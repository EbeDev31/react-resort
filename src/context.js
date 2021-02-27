import React, { createContext, useState, useEffect } from 'react';
import data from './data'

export const RoomContext = createContext()

const RoomProvider = (props) => {

  const roomsData = data.map(dat => {
    const id = dat.sys.id
    let tempImages = dat.fields.images.map(img => img.fields.file.url)
    const tempFields = { ...dat.fields, images: tempImages, id }
    return tempFields
  })
  const [state, setState] = useState({
    rooms: roomsData,
    featuredRooms: [],
    filteredRooms: roomsData,
    displayedRooms: roomsData,
    type: 'All',
    roomTypes: [],
    allCapacity:[],
    capacity:1,
    price:0,
    minPrice: 0,
    maxPrice:0,
    minSize:0,
    maxSize:0,

    // roomSize:getRoomsSize()
  })

  const findFeaturedRooms = () => {
    const featuredRooms = roomsData.filter(room => room.featured === true);
    // setState({...state,featuredRooms})
    return featuredRooms;
  }
  
  const getRoomTypes = () => {
    const roomTypes= [...new Set(roomsData.map(room => room.type))];
    // setState({...state,roomTypes})
    return roomTypes;
  }
  const getRoomsCapacity = () => {
    const allCapacity= [...new Set(roomsData.map(room => room.capacity))];
    // setState({...state,allCapacity})
    return allCapacity;
  }
  const getMinPrice = () => {
    const minPrice= Math.min(...[...new Set(roomsData.map(room => room.price))]) ;
    // setState({...state,minPrice})
    return minPrice;
  }
  const getMaxPrice = () => {
    const maxPrice= Math.max(...[...new Set(roomsData.map(room => room.price))]) ;
    // setState({...state,maxPrice})
    return maxPrice;
  }
  const getMinRoomSize = () => {
    console.log("minSize")
    const minSize= Math.min(...[...new Set(roomsData.map(room => room.size))]) ;
    // setState({...state,minSize})
    return minSize;
  }
  const getMaxRoomSize = () => {
    console.log("maxSize")
    const maxSize= Math.max(...[...new Set(roomsData.map(room => room.size))]) ;
    // setState({...state,maxSize})
    return maxSize;
  }
  
  const loadData=()=>{
    const featuredRooms= findFeaturedRooms();
    const roomTypes= getRoomTypes();
    const allCapacity= getRoomsCapacity();
    const minPrice= getMinPrice();
    const maxPrice= getMaxPrice();
    const minSize= getMinRoomSize();
    const maxSize=getMaxRoomSize();
    setState({...state, featuredRooms,roomTypes,allCapacity,minPrice,maxPrice, minSize,maxSize})

  }
  
  
  useEffect(()=>{
   loadData()
  },[])
  
  const filterRooms = (event) => {
    //to be implmented
     const type = event.target.value
     const newDisplay = roomsData.filter(room=>room.type===type);
    //  setState({...state, displayedRooms:newDisplay})
     console.log(newDisplay)

  }
    const handleOnChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setState({...state, [name]: value });
    }
  return (
    <RoomContext.Provider value={ {...state, filterRooms, handleOnChange} }>
      {props.children}
    </RoomContext.Provider>
  )
}
export default RoomProvider