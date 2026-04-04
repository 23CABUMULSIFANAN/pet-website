import { FaPaw } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


export default function Nav1(){
    return(
 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container p-3">

    
                    <div className="d-flex gap-2">
                        <FaPaw className="logo-icon"/>
                     <h3  className="logo">Pet sitting</h3>
                    </div>

                    
          

    <button
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon me-2 "></span>
      <span className="menu">Menu</span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto gap-5">
        <li className="nav-item"><NavLink to={"/"} className="nav-link">HOME</NavLink></li>
        <li className="nav-item"><NavLink to={"/about"} className="nav-link">ABOUT</NavLink></li>
        <li className="nav-item"><NavLink to={"/services"} className="nav-link">SERVICES</NavLink></li>
        <li className="nav-item"><NavLink to={"/gallery"} className="nav-link">GALLERY</NavLink></li>
        <li className="nav-item"><NavLink to={"/pricing"} className="nav-link">PRICING</NavLink></li>
        <li className="nav-item"><NavLink to={"/contact"} className="nav-link">CONTACT</NavLink></li>
       
        
      </ul>
    </div>

  </div>
</nav>
    )
}