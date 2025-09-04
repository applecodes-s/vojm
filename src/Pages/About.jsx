import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutOne from '../Components/About/AboutOne'
import OfferTwo from '../Components/Offer/OfferTwo'
import ElementSection from '../Components/Elements/ElementSection'
import TourGuide from '../Components/Guide/TourGuide'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BrandOne from '../Components/Brand/BrandOne'
import GalleryOne from '../Components/Gallery/GalleryOne'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import BibleVerse from "../Components/bibleverse";


function About() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="About Tourm"
            />
            <AboutOne showFullContent={true} />
            <TourGuide />
            <section className="bg-smoke"> </section> 
            {/* Bible verse section */}
            <BibleVerse className="space-bottom"/>
            <GalleryOne />
            <FooterFour />
            <ScrollToTop />
        </> 
    )
}

export default About
