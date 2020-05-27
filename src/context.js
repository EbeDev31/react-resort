import React, { createContext} from 'react';
import data from './data'

export const RoomContext = createContext()

const RoomProvider = (props) => {
  const roomsData =  data.map(dat=>{
    const id = dat.sys.id
      let tempImages=dat.fields.images.map(img=>img.fields.file.url)
      const tempFields = {...dat.fields,images:tempImages,id}
      return tempFields
    })

    const findFeaturedRooms=()=>{
      const featuredRooms =roomsData.filter(room=>room.featured===true);
      return featuredRooms;
    }

    const filterRooms=()=>{
      //to be implmented
    }

    const state={
      rooms:roomsData,
      featuredRooms:findFeaturedRooms(),
      filteredRooms:[]
    }
  
    return (
        <RoomContext.Provider value={{state,filterRooms}}>
          {props.children}
        </RoomContext.Provider>
    )
}
export default RoomProvider