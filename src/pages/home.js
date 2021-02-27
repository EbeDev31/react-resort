import React, { useContext } from 'react'
import { RoomContext } from '../context';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";


const Home = () => {
    const context = useContext(RoomContext)
    const { featuredRooms } = context;
    console.log('context data is a', context)
    const banner = {
        title: 'Luxurious Rooms',
        message: 'Deluxe Rooms Starting at £299',
        buttonName: 'OUR ROOMS'
    };
    const services = [
        {
            icon: <FaCocktail />,
            serviceType: "Free Cocktails",
            about:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaHiking />,
            serviceType: "Endless Hiking",
            about:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaShuttleVan />,
            serviceType: "Free Shuttle",
            about:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
            icon: <FaBeer />,
            serviceType: "Strongest Beer",
            about:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
    ];
    
    return (
        <div>
            <section className='hero'><Hero banner={banner} /></section>
            <section className='services'><Services services={services} /></section>
            <section className='featured-rooms'><FeaturedRooms rooms={featuredRooms} /></section>
        </div>
    )
};
export default Home
