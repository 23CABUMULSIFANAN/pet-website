import { FaPhoneAlt } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


export default function Nav(){
  return(
    <nav className="navigation">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-12 col-md-6 d-flex gap-2 align-items-center">
            <FaPhoneAlt />
            <p className="mb-0">+00 1234 567</p>

            <RiTelegram2Fill />
            <p className="mb-0">sifana@gmail.com</p>
          </div>

          <div className="col-12 col-md-6 ">
            <ul className="d-flex gap-4 align-items-center justify-content-md-end justify-content-center mt-2 mb-2 ">
                <li className="font"><FaFacebookF /></li>
                <li className="font"><FaTwitter /></li>
                <li className="font"><FaInstagram /></li>
                <li className="font"><TbWorld /></li>
            </ul>
           
          </div>

        </div>
      </div>
    </nav>
  )
}