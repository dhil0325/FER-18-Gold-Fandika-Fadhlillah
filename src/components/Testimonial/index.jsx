import './style.css'
import left_button from "../../assets/left_button.png"
import right_button from "../../assets/right_button.png"
import Slider from 'react-slick'
import { testimonialData } from '../../utils/data'
import TestimonialCard from '../TestimonialCard'
import { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial({id}) {
    let slideRef = useRef(null)

    const nextSlide = () => {
        slideRef.current.slickNext()
    }

    const prevSlide = () => {
        slideRef.current.slickPrev()
    }

    let settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
    }

    return (
        <div id={id} className='testimonial'>
            <div className='testimonial-container'>
                <div className='testimonial-title'>
                    <h1>Testimonial</h1>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <div className='testimonial-slider'>
                    <Slider ref={slideRef} {...settings}>
                        {testimonialData.map((item) => (
                            <TestimonialCard
                                image={item.profileImage}
                                rating={item.rating}
                                review={item.testimoni}
                                name={item.name}
                                age={item.age}
                                city={item.location}
                                key={item.id}
                            />
                        ))}
                    </Slider>
                    <div className='slider-button'>
                        <button onClick={prevSlide}><img src={left_button} alt="" /></button>
                        <button onClick={nextSlide}><img src={right_button} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial