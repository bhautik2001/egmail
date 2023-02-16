import React from 'react'
import About from './about';
import Client from './Client';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './header';
import Vegetable from './Vegetable';


function Main() {
  return (
    <div className="main-layout">
    {/* <div className="loader_bg">
      <div className="loader"><img src="images/loading.gif" alt="#" /></div>
    </div>  */}
        <Navbar></Navbar>
        <About></About>
        <Vegetable></Vegetable>
        <Client></Client>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Main
