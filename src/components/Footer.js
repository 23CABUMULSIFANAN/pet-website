import "./Footer.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "./images/image_1.webp"
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import Image2 from "./images/gallery-2.jpg"
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
export default function Footer(){
    return(
        <div className="foot">
            <div className="row">
                <div className=" col-12 col-md-6 col-lg-3">
                    <h3 className="pet-h3">Pet sitting</h3>
                    <hr></hr>
                    <p className="pet-p">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="d-flex gap-3">
                        <div className="round-app">
                            <FaTwitter />

                        </div>
                        
                        <div className="round-app">
                            <FaFacebookF />

                        </div>
                        <div className="round-app">
                           <FaInstagram />

                        </div>
                        
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                     <h3 className="pet-h3">latest News</h3>
                    <hr></hr>
                     <div className="d-flex gap-3">
                        <img src={Image} alt="dog" className="foot-img"></img>
                    <div>
                        <a href="/" className="anchor">Even all the powerful pointing has no powerfull control about</a>
                      
                         
                    <a href="/">
                        <p className="pt-2"><SlCalender />April,25,2035</p>
                    </a>
                      
                      <div className="d-flex gap-1 align-items-center">
                        
                        <a href="/"><p className="pt-2"><CiUser />Admin</p></a>
                       
                        <a href="/"><p className="pt-2"><FiMessageCircle />19</p></a>
                        
                      </div>

                    </div>
                    </div>
                    <div className="d-flex gap-3">
                        <img src={Image2} alt="dog" className="foot-img"></img>
                    <div>
                        <a href="/" className="anchor">Even all the powerful pointing has no powerfull control about</a>
                      
                         
                    <a href="/">
                        <p className="pt-2"><SlCalender />April,25,2035</p>
                    </a>
                      
                      <div className="d-flex gap-1 align-items-center">
                        
                        <a href="/"><p className="pt-2"><CiUser />Admin</p></a>
                       
                        <a href="/"><p className="pt-2"><FiMessageCircle />19</p></a>
                        
                      </div>

                    </div>
                    </div>
                    
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                     <h3 className="pet-h3">Quick Links</h3>
                    <hr></hr>
                    <div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Works</a></li>
                            <li><a href="/">Blogs</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <h3 className="pet-h3">Have a Question?</h3>
                    <hr></hr>
                    <p id="map"><FaMap />203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <a href="/"><p><FaPhoneAlt /> +1234 567 890</p></a>
                    <a href="/"><p><BiLogoTelegram />info@yourdomain.com</p></a>
                </div>
                 
            </div>
<footer className="footerelement">Copyright ©2026 All rights reserved</footer>
        </div>
    )
}