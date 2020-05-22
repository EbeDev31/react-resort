import React, {useContext} from 'react'
import { RoomContext } from '../context';


 const Home = () => {
     const context = useContext(RoomContext)
     console.log('context data is a',context)
    return (
        <div>
            Hello From home
        </div>
    )
};
export default Home
