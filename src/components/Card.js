import Dog from "./images/Dog.webp"
import { FaUserDoctor } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
export default function Card(){
    return(
        <div>
             <section className="ask">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-12 col-md-5 ">
                                        <img src={Dog} className="dog-img img-fluid" alt="doggy"></img>
                                    </div>
                                    <div className="col-12 col-md-7 ">
                                        <div className="row">
                                            <div className="col-12"><h2 className="question">Why choose us?</h2></div>
                                            <div className="col-12 col-md-6">
                                                <div className="details d-flex">
                                                    <div className="rounds">
                                                        <FaUserDoctor className="doctor" />
                                                    </div>
                                                    <div className="pe-md-4">
            
                                                        <h4 className="care">Care Advices</h4>
                                                        <p style={{ color: "grey" }}>Far far away, behind the word mountains, far from the countries.</p>
            
                                                    </div>
            
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="details d-flex">
                                                    <div className="rounds">
                                                        <RiCustomerService2Fill className="doctor" />
                                                    </div>
                                                    <div>
            
                                                        <h4 className="care">Customer support</h4>
                                                        <p style={{ color: "grey" }}>Far far away, behind the word mountains, far from the countries.</p>
            
                                                    </div>
            
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="details d-flex">
                                                    <div className="rounds">
                                                        <FaAmbulance className="doctor" />
            
                                                    </div>
                                                    <div>
            
                                                        <h4 className="care">Emergency support</h4>
                                                        <p style={{ color: "grey" }}>Far far away, behind the word mountains, far from the countries.</p>
            
                                                    </div>
            
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="details d-flex">
                                                    <div className="rounds">
                                                        <FaHandsHelping className="doctor" />
                                                    </div>
                                                    <div>
            
                                                        <h4 className="care">Doctor support</h4>
                                                        <p style={{ color: "grey" }}>Far far away, behind the word mountains, far from the countries.</p>
            
                                                    </div>
            
                                                </div>
                                            </div>
            
            
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </section>
            <section className="count my-5">
                <div className="container-fluid counting">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3"> 
                            <h1 className="count1">50</h1>
                            <p className="profession">Customer</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h1 className="count1">8,500</h1>
                            <p className="profession">Professionals</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h1 className="count1">20</h1>
                            <p className="profession">Products</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h1 className="count1">50</h1>
                            <p className="profession">Pets Hosted</p>
                        </div>
                    </div>


                </div>

            </section>
        </div>
    )
}