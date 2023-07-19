import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import banner1 from '../../../assets/image/banner1.jpg'
import banner2 from '../../../assets/image/banner2.jpg'
import banner3 from '../../../assets/image/banner3.jpg'
import banner4 from '../../../assets/image/banner4.jpg'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src={banner1} alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img src={banner4} alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img src={banner2} alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img src={banner3} alt="" /></div>
            </div>
        </>
    );
};

export default Banner;