import React from 'react';
import About from '../AboutSome/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigtaion/Navigation';
import Review from '../Review/Review';
import Services from '../Services/Services';
import SimpleFAQ from '../SimpleFAQ/SimpleFAQ';
import Worker from '../Worker/Worker';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Worker></Worker>
            <Review></Review>
            <SimpleFAQ></SimpleFAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;