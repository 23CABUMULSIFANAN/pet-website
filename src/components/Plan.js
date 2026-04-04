import "./Plan.css"
import { FaPaw } from "react-icons/fa6";
export default function Plan() {
    return (
        <div >
            <div >
                <h2 className="plan-h2">Choose your plan</h2>
                </div>
               
            <div >
                <p className="plan-p">Select the perfect care package for your furry friend</p>
                </div>
            
            <div className="container">
              <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-4 ">
                  <div className="card-plan">
                    <div className="icon-box"><FaPaw /></div>
                  <h3 className="plan-h3">Starter</h3>
                  <p className="plan-para">Perfect for occasional pet care</p>
                  <div className="amt">
                    <h2 >$</h2>
                    <h1 className="amount">29</h1>
                    <p className="plan-para">/month</p>
                  </div>
 <button className="button1">Get Started</button>
                  </div>
                 
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                  <div className="card-plan">
                    <div className="icon-box"><FaPaw /></div>
                  <h3 className="plan-h3">Starter</h3>
                  <p className="plan-para">Perfect for occasional pet care</p>
                  <div className="amt">
                    <h2 >$</h2>
                    <h1 className="amount">29</h1>
                    <p className="plan-para">/month</p>
                  </div>
<button className="button1">Get Started</button>
                  </div>
                  
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                  <div className="card-plan">
                    <div className="icon-box"><FaPaw /></div>
                  <h3 className="plan-h3">Starter</h3>
                  <p className="plan-para">Perfect for occasional pet care</p>
                  <div className="amt">
                    <h2 >$</h2>
                    <h1 className="amount">29</h1>
                    <p className="plan-para">/month</p>
                  </div>
 <button className="button1">Get Started</button>
                  </div>
                 
                </div>
                
               </div>
              </div>
            </div>
            
        
    )
}