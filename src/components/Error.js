import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
const Error = () => {
    const banner={
        title:'404', 
        message:'Page not found'}
  return (
    <Hero banner={banner}>
        <Link to="/" className="btn-primary">
          return home
        </Link>
    </Hero>
  );
};

export default Error;
