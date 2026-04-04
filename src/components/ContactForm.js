import "./ContactForm.css"
import { FaMapMarker } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
export default function ContactForm(){
    return(
          <div>
            <h1 className="text-center mt-5 mb-5">Contact Form</h1>

<div className="container my-5">
    <div className="row">
    <div className="col-12 col-md-6 col-lg-3 ">
       <div className="d-flex justify-content-center my-4">
         <div className="round-contact">
            <FaMapMarker  />
        </div>
       </div>
        <div className="text-center">
            <b>Address:</b> 198 West 21th Street, Suite 721 New York NY 10016
        </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3 ">
       <div className="d-flex justify-content-center my-4">
         <div className="round-contact">
            <FaPhoneAlt />
        </div>
       </div>
        <div className="text-center">
            <b>Phone:</b><button className="text-success border-0 bg-white ms-2 ">+ 1235 2355 98</button>
        </div>
    </div>
     <div className="col-12 col-md-6 col-lg-3 ">
       <div className="d-flex justify-content-center my-4">
         <div className="round-contact">
            <RiTelegram2Fill />
        </div>
       </div>
        <div className="text-center">
            <b>Email:</b><button className="text-success border-0 bg-white ms-2">info@mail.com</button>
        </div>
    </div>
     <div className="col-12 col-md-6 col-lg-3 ">
       <div className="d-flex justify-content-center my-4">
         <div className="round-contact">
         <TbWorld />
        </div>
       </div>
        <div className="text-center">
            <b>Website:</b> <button className="text-success border-0 bg-white ms-2">@site.com</button>
        </div>
    </div>
</div>
</div>

        </div>
    ) 
    
}