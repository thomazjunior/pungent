import React, { Component } from 'react';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Feedback from '../components/Common/Feedback';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import About from '../components/StudioAgency/About';
import MainBanner from '../components/StudioAgency/MainBanner';
import OurWorks from '../components/StudioAgency/OurWorks';
import Services from '../components/StudioAgency/Services';

class StudioAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Services />

                <OurWorks />

                <FunFactsTwo />

                <About />

                <Feedback />
                
                <LatestNewsSlider />
                
                <CtaAreaTwo />

                <Partner />
                
                <Footer />
            </>
        );
    }
}

export default StudioAgency;