import Pic from "./images/gallery-1.jpg"
import Pic1 from "./images/gallery-2.jpg"
import Pic2 from "./images/gallery-3.webp"
import "./Gallery-sec.css"

export default function Gallery1(){
    return(
        <div className="container gallery-pet">
            <h1 className="text-center gal-h1">Pets Gallery</h1>
               <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={Pic} className="img-fluid" alt="gal"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={Pic1} className="img-fluid"alt="gal"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={Pic2} className="img-fluid"alt="gal"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={Pic2}className="img-fluid"alt="gal"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={Pic1}className="img-fluid"alt="gal"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <img src={Pic}className="img-fluid"alt="gal"></img>
                </div>
               </div>
        </div>
    )
}