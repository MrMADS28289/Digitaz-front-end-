import React from 'react';
import slide from '../../Assests/Slide/slide.jpg';
import slide1 from '../../Assests/Slide/slide1.jpg';
import slide2 from '../../Assests/Slide/slide2.jpg';
import slide3 from '../../Assests/Slide/slide3.jpg';
import { FaShippingFast } from 'react-icons/fa';
import { RiSafe2Fill } from 'react-icons/ri';
import { MdLocalOffer, MdOutlineSupportAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section>
            <div>
                <div className="carousel w-full rounded-none">
                    <div id="item1" className="carousel-item w-full rounded-none">
                        <div class="card w-full bg-base-100 shadow-xl image-full z-0">
                            <figure> <img src={slide2} alt='' /></figure>
                            <div class="card-body justify-center items-center">
                                <div>
                                    <h1 className="text-5xl font-bold">Big Choice Of Plumbing Products!</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div class="card w-full bg-base-100 shadow-xl image-full z-0">
                            <figure><img src={slide} alt='' /></figure>
                            <div class="card-body justify-center items-center">
                                <div>
                                    <h1 className="text-5xl font-bold">Scrowdrivers Proffessional Tools!</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div class="card w-full bg-base-100 shadow-xl image-full z-0">
                            <figure><img src={slide3} alt='' /></figure>
                            <div class="card-body justify-center items-center">
                                <div>
                                    <h1 className="text-5xl font-bold">Big Choice Of Plumbing Products!</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div class="card w-full bg-base-100 shadow-xl image-full z-0">
                            <figure><img src={slide1} alt='' /></figure>
                            <div class="card-body justify-center items-center">
                                <div>
                                    <h1 className="text-5xl font-bold">Scrowdrivers Proffessional Tools!</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 m-4'>
                <div className="flex items-center border-2">
                    <FaShippingFast className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>Free Shipping</h3>
                        <h5 className='text-sm'>For Orders From $50</h5>
                    </div>
                </div>
                <div className="flex items-center border-2">
                    <MdOutlineSupportAgent className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>Support 24/7</h3>
                        <h5 className='text-sm'>Call us anytime</h5>
                    </div>
                </div>
                <div className="flex items-center border-2">
                    <RiSafe2Fill className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>100% Safety</h3>
                        <h5 className='text-sm'>Only secure payments</h5>
                    </div>
                </div>
                <div className="flex items-center border-2">
                    <MdLocalOffer className='text-7xl mx-3 text-primary' />
                    <div>
                        <h3 className='text-lg font-bold'>Hot Offers</h3>
                        <h5 className='text-sm'>Discounts up to 90%</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;