import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import About2 from './About2';

const About = () => {
  
  return (
    <>
    <h1>About page</h1>
    <Link to='about1'>About 1</Link>
    <Link to='about2'>About 2</Link>
    <Outlet/>
    <About2 name={"hira aziz"}/>
    </>
  )
}

export default About