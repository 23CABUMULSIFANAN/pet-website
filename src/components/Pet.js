import { FaArrowRight } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";
import { FaScissors } from "react-icons/fa6";
export default function Pet(){
    return(
        <div >
            <div className="pet container">
                            <div className="row mt-5">
                                <div className="col-12 col-md-4">
                                    <div className="box" id="box-for">
                                        <div className="round">
                                            <FaDog className="dog" />
            
                                        </div>
                                        <h3 className="box-content">Dog Walking</h3>
                                        <p className="box-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                                        <div className="round1" id="round-for">
                                            <FaArrowRight className="arrow" />
            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="box2">
                                        <div className="round">
                                            <GiDogBowl className="dog" />
            
                                        </div>
                                        <h3 className="box-content">Pet Daycare</h3>
                                        <p className="box-para1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                                        <div className="round2">
                                            <FaArrowRight className="arrow" />
            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="box3">
                                        <div className="round">
                                            <FaScissors className="dog" />
            
                                        </div>
                                        <h3 className="box-content">Pet Grooming</h3>
                                        <p className="box-para2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                                        <div className="round3">
                                            <FaArrowRight className="arrow" />
            
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
        </div>
    )
}