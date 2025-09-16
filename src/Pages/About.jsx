import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutOne from '../Components/About/AboutOne'
import SongsSlider from '../Components/Songs/SongsSlider'
import GalleryOne from '../Components/Gallery/GalleryOne'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'


function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About"
            />
            <AboutOne showFullContent={true} />
            <SongsSlider className="space-bottom" />
            <section className="bg-smoke "> </section> 
            {/* Bible verse section */}
            {/* <BibleVerse className="space-bottom"/> */}
            <GalleryOne />
            <FooterFour />
            <ScrollToTop />
        </> 
    )
}

export default About
