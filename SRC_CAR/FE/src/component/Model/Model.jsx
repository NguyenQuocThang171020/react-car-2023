import { Swiper, SwiperSlide } from "swiper/react";
import './model.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'
import img7 from '../../img/7.jpg'
import img8 from '../../img/8.jpg'
import img9 from '../../img/9.jpg'

const Model = () => {
    return (
        <div className="list-container">
            <div className="content">
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img9} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="intro-list">
                <h2>List Car</h2>
            </div>
            <div className="menu-car">
               <div className="">

               </div>
            </div>
        </div>
      );
}
 
export default Model;