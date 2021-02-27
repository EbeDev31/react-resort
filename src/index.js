import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Rooms from './pages/rooms'
import SingleRoom from './pages/singleRoom'
import './App.css'
import RoomProvider, { RoomContext } from './context'
import Error from './components/Error';
import UserList from './UwTest/UserList'



export const Playg = () => {
    const contexta = useContext(RoomContext)
    console.log('mahh?', contexta)

    // const [state, setState] = useState({
    //     name: '',
    //     pass: ''
    // })
    // useEffect(()=>{
    //   findFeaturedRooms()
    // })

    const findFeaturedRooms = () => {
        console.log('amen', contexta)
        // const featuredRooms =state.roomsData.filter(room=>room.featured===true);
        // return featuredRooms;
    }
    return (


        <div>
            <form>
                <input name='name' />
                <input name='pass' />
                {findFeaturedRooms()}
            </form>
        </div>
    )
}

const App = () => {
    return (
        <RoomProvider>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/rooms' component={Rooms}></Route>
                    <Route exact path='/singleRoom/:name' component={SingleRoom}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </Router>
        </RoomProvider>
    )
}
ReactDOM.render(<App />, document.getElementById("App"))