import Gallery1 from "./images/gallery-1.jpg"
import Gallery2 from "./images/gallery-2.jpg"
import Gallery3 from "./images/gallery-3.webp"
import Gallery4 from "./images/gallery-4.webp"
import Gallery5 from "./images/gallery-5.webp"
import Gallery6 from "./images/gallery-6.webp"

function Video(){
    return(
        
        <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <video width={500} controls>
            <source src="https://vimeo.com/45830194"></source>
        </video>
    </div>
    <div className="carousel-item">
      <img src={Gallery1} className="d-block w-100" alt="gallery1"></img>
    </div>
    <div className="carousel-item">
      <img src={Gallery2} className="d-block w-100" alt="gallery1"></img>
    </div>
    <div className="carousel-item">
      <img src={Gallery3} className="d-block w-100" alt="gallery1"></img>
    </div>
    <div className="carousel-item">
      <img src={Gallery4} className="d-block w-100" alt="gallery1"></img>
    </div>
    <div className="carousel-item">
      <img src={Gallery5} className="d-block w-100" alt="gallery1"></img>
    </div>
    <div className="carousel-item">
      <img src={Gallery6} className="d-block w-100" alt="gallery1"></img>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    )
}export default Video

