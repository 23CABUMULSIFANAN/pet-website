import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Person from "./images/person_1.webp"
import Person1 from "./images/person_2.webp"
import Person2 from "./images/person_3.webp"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      slidesOffsetBefore={30}
  slidesOffsetAfter={30}

      navigation
      autoplay={{
        delay:3000,
        disableOnInteraction:false

      }}
      pagination={{ clickable: true }}
      breakpoints={
       {
         0: {
            slidesPerView:1
        },
        320:{
slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }

       }

      }
    >
      
        <SwiperSlide>
         <div className="card ">
    <div className="small-round"><span className="card-text">"</span></div>
    <p className="text-secondary card-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className="d-flex align-items-center justify-content-evenly">
        <img src={Person} className="person" alt="person"></img>
        <div>
            <h4>Roger Scott</h4>
            <p className="text-secondary">Marketting manager</p>
        </div>
    </div>
</div>
      </SwiperSlide>
       <SwiperSlide>
         <div className="card ">
    <div className="small-round"><span className="card-text">"</span></div>
    <p className="text-secondary card-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className="d-flex align-items-center justify-content-evenly">
        <img src={Person1} className="person" alt="person"></img>
        <div>
            <h4>Roger Scott</h4>
            <p className="text-secondary">Marketting manager</p>
        </div>
    </div>
</div>
      </SwiperSlide>
       <SwiperSlide>
         <div className="card ">
    <div className="small-round"><span className="card-text">"</span></div>
    <p className="text-secondary card-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className="d-flex align-items-center justify-content-evenly">
        <img src={Person2} className="person" alt="person"></img>
        <div>
            <h4>Roger Scott</h4>
            <p className="text-secondary">Marketting manager</p>
        </div>
    </div>
</div>
      </SwiperSlide>
       <SwiperSlide>
         <div className="card ">
    <div className="small-round"><span className="card-text">"</span></div>
    <p className="text-secondary card-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className="d-flex align-items-center justify-content-evenly">
        <img src={Person} className="person" alt="person"></img>
        <div>
            <h4>Roger Scott</h4>
            <p className="text-secondary">Marketting manager</p>
        </div>
    </div>
</div>
      </SwiperSlide>
       <SwiperSlide>
         <div className="card ">
    <div className="small-round"><span className="card-text">"</span></div>
    <p className="text-secondary card-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className="d-flex align-items-center justify-content-evenly">
        <img src={Person1} className="person" alt="person"></img>
        <div>
            <h4>Roger Scott</h4>
            <p className="text-secondary">Marketting manager</p>
        </div>
    </div>
</div>
      </SwiperSlide>
       <SwiperSlide>
         <div className="card ">
    <div className="small-round"><span className="card-text">"</span></div>
    <p className="text-secondary card-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <div className="d-flex align-items-center justify-content-evenly">
        <img src={Person2} className="person"alt="person"></img>
        <div>
            <h4>Roger Scott</h4>
            <p className="text-secondary">Marketting manager</p>
        </div>
    </div>
</div>
      </SwiperSlide>
      
      
    </Swiper>
  );
}