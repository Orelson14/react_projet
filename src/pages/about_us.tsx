import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import About from "../components/contenants/about_us/About";
import Logos from "../components/contenants/logos/logos";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AboutUs: React.FC = () => {
    
    return (
        <div className="App">
                      <header 
                 style={{
                    backgroundImage: `url("./Gimage.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "black",
                  }}>
                    
                    <div className='tout'>
                        <div className='wrapper' >
                            <a href="/"><img src="logo.png" alt="Logo" className='logo'/>
                            </a>
                            <nav className='navbar navbar-nav ' >
                                <ul >
                                    <li className="nav-item"><a className="nav-link" href="/AboutUs" style={{color:"white "}}>About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Living" style={{color:"white "}}>Living Room</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Kitchen" style={{color:"white "}}>Kitchen</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Outdoor" style={{color:"white "}}>Outdoors</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Contact" style={{color:"white "}}>Contact</a></li>
                                </ul>
                            </nav>
                            <div className='contenant' style={{textAlign:"center"}}>
                            <p style={{fontSize:"40px", paddingLeft:"5px", fontWeight:"bold"}}>Know more</p>
                                <h1>About Us</h1>
                                
                                </div>
                        </div>
                </div>
            </header>
            <About/>
            <Logos/>
            <Footer />
      </div>
    )




}




export default AboutUs;