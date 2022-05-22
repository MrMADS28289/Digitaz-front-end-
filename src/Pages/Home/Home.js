import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BSummery from './BSummery';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Digitaz LTD.</title>
            </Helmet>
            <Banner />
            <Products />
            <BSummery />
            <Review />
        </>
    );
};

export default Home;