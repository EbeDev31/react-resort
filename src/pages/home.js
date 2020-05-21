import React, {useContext} from 'react'
import { RoomContext } from '../context';


 const Home = () => {
     const context = useContext(RoomContext)
     console.log('contrext data is ',context)
    return (
        <div>
            Hello From home
        </div>
    )
};
export default Home
