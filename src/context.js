import React, {useContext, createContext} from 'react'

export const RoomContext = createContext()
const RoomProvider = (props) => {
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
    return (
        <RoomContext.Provider value={{...themes}}>
          {props.children}
        </RoomContext.Provider>
    )
}
export default RoomProvider