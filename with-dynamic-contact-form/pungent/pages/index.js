import React, { Component } from 'react';
import CtaArea from '../components/Common/CtaArea';
import Feedback from '../components/Common/Feedback';
import FunFacts from '../components/Common/FunFacts';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import Partner from '../components/Common/Partner';
import Team from '../components/Common/Team';
import About from '../components/DefaultHome/About';
import MainBanner from '../components/DefaultHome/MainBanner';
import OurWorks from '../components/DefaultHome/OurWorks';
import Services from '../components/DefaultHome/Services';
import WorkProcess from '../components/DefaultHome/WorkProcess';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class Index extends Component {
    render() {
        return (
            <>
                  <div className="video-background">
                        <video autoPlay loop src="/video/promo-video.mp4" />
                    </div>

                <Navbar />

                <MainBanner />

                <Services />

                <About />

                <OurWorks />

                <WorkProcess />

                <Feedback />

                <Team />

                <FunFacts />

                <LatestNewsSlider />

                <CtaArea />

                <Partner />
                
                <Footer />
            </>
        );
    }
}

export default Index;