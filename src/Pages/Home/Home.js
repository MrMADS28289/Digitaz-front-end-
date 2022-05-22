import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Digitaz LTD.</title>
            </Helmet>
            <Banner />
            <Products />
        </>
    );
};

export default Home;