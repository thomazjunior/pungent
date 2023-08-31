import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="hero-banner video-studio overly-6">
                    <div className="video-background">
                        <video autoPlay loop src="/video/promo-video.mp4" />
                    </div>
                    </div>

            </>
        );
    }
}

export default MainBanner;