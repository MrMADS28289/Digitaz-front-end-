import React from 'react';
import bg from '../../Assests/banner-1.jpg';
import { GiSellCard, GiRevolt } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';

const BSummery = () => {
    return (
        <div className='m-6'>
            <h3 className='text-2xl text-center font-bold mb-8'><span className=' border-b-2 border-primary'>Business Summary</span></h3>
            <div class="card w-full h-full bg-gray-100 shadow-xl image-full">
                <figure><img src={bg} alt="" /></figure>
                <div class="card-body">
                    <div class="stats bg-transparent text-primary-content">

                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            <div class="stat items-center justify-center">
                                <h3 className='stat-value text-primary text-6xl mb-4'><GiSellCard /></h3>
                                <div class="stat-value">500+ </div>
                            </div>
                            <div class="stat items-center justify-center">
                                <h3 className='stat-value text-primary text-6xl mb-4'><GiRevolt /></h3>
                                <div class="stat-value">170M+</div>
                            </div>
                            <div class="stat items-center justify-center">
                                <h3 className='stat-value text-primary text-6xl mb-4'><MdReviews /></h3>
                                <div class="stat-value">77k+</div>
                            </div>
                            <div class="stat items-center justify-center">
                                <h3 className='stat-value text-primary text-6xl mb-4'><BsTools /></h3>
                                <div class="stat-value">50+</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSummery;