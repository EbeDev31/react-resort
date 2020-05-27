import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Rooms from './pages/rooms'
import SingleRoom from './pages/singleRoom'
import './App.css'
import RoomProvider from './context'
import Error from './components/Error'

const App = () => {
    return (
        <Router>
            <RoomProvider>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/rooms' component={Rooms}></Route>
                <Route exact path='/singleRoom/:name' component={SingleRoom}></Route>
                <Route component={Error}></Route>
            </Switch>
            </RoomProvider>
        </Router>
    )
}
ReactDOM.render(<App />, document.getElementById("App"))