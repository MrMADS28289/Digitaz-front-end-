import React from 'react';
import slide from '../../Assests/Slide/slide.jpg';
import slide1 from '../../Assests/Slide/slide1.jpg';
import slide2 from '../../Assests/Slide/slide2.jpg';
import slide3 from '../../Assests/Slide/slide3.jpg';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full h-[300px]">
                <div id="item1" class="carousel-item w-full">
                    <img src={slide} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={slide1} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={slide2} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={slide3} class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;