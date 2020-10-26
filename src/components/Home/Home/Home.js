import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    document.title="HOME / Doctors-Portal"
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
             <MakeAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;