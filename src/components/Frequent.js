import { IoIosArrowDown } from "react-icons/io";
import About from "./images/About.webp"
import About2 from "./images/About2.webp"
import About3 from "./images/About3.webp"
import { FaPlay } from "react-icons/fa";

export default function Frequent(){
    return(
        <div>
            <section className="frequent">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6 p-4">
                            <div>
                                <h1 className="questions">Frequently Asks Question

                                </h1>
                                <p className=" text-secondary mt-4 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="ques">
                                    <a className="btn ques-1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
                                        How to train your pet dog?
                                        
                                    </a>
                                    <IoIosArrowDown className="btn arrow-down" data-bs-toggle="collapse" href="#collapseExample" role="button" />
                                    
                                </div>
                                <div className="collapse" id="collapseExample" >
                                    <div className=" card-body border-0">
                                        
                                        <ol  >
                                            <li className="list">Far far away, behind the word mountains</li>
                                            <li className="list">Consonantia, there live the blind texts</li>
                                            <li className="list">When she reached the first hills of the Italic Mountains</li>
                                            <li className="list">Bookmarksgrove, the headline of Alphabet Village</li>
                                            <li className="list">Separated they live in Bookmarksgrove right</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="ques">
                                    <a className="btn ques-1" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" >
                                        How to train your pet dog?
                                        
                                    </a>
                                    <IoIosArrowDown className="btn arrow-down" data-bs-toggle="collapse" href="#collapseExample1" role="button" />
                                    
                                </div>
                                <div className="collapse" id="collapseExample1" >
                                    <div className=" card-body border-0">
                                        
                                        <ol  >
                                            <li className="list">Far far away, behind the word mountains</li>
                                            <li className="list">Consonantia, there live the blind texts</li>
                                            <li className="list">When she reached the first hills of the Italic Mountains</li>
                                            <li className="list">Bookmarksgrove, the headline of Alphabet Village</li>
                                            <li className="list">Separated they live in Bookmarksgrove right</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="ques">
                                    <a className="btn ques-1" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                                        How to train your pet dog?
                                        
                                    </a>
                                    <IoIosArrowDown className="btn arrow-down" data-bs-toggle="collapse" href="#collapseExample2" role="button" />
                                    
                                </div>
                                <div className="collapse" id="collapseExample2" >
                                    <div className=" card-body border-0">
                                        
                                        <ol  >
                                            <li className="list">Far far away, behind the word mountains</li>
                                            <li className="list">Consonantia, there live the blind texts</li>
                                            <li className="list">When she reached the first hills of the Italic Mountains</li>
                                            <li className="list">Bookmarksgrove, the headline of Alphabet Village</li>
                                            <li className="list">Separated they live in Bookmarksgrove right</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="ques">
                                    <a className="btn ques-1" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        How to train your pet dog?
                                        
                                    </a>
                                    <IoIosArrowDown className="btn arrow-down" data-bs-toggle="collapse" href="#collapseExample3" role="button" />
                                    
                                </div>
                                <div className="collapse" id="collapseExample3" >
                                    <div className=" card-body border-0">
                                        
                                        <ol  >
                                            <li className="list">Far far away, behind the word mountains</li>
                                            <li className="list">Consonantia, there live the blind texts</li>
                                            <li className="list">When she reached the first hills of the Italic Mountains</li>
                                            <li className="list">Bookmarksgrove, the headline of Alphabet Village</li>
                                            <li className="list">Separated they live in Bookmarksgrove right</li>
                                        </ol>
                                    </div>
                                </div>
                                 

                                 
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                           <div className="row">
                            <div className="col-12">
                            <div className="main-img">
                                <img src={About}  className="img-fluid p-3 " alt="about"></img>
                            <button className="btn play" >
                                <FaPlay className="play-btn"/>
                                
                            </button></div>
                            
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={About2}  className="img-fluid p-3" alt="about"></img>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={About3}  className="img-fluid p-3"alt="about"></img>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}