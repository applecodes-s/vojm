import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import MinistryInfo from '../Components/MinistryInfo/MinistryInfo'
import CategoryOne from '../Components/Category/CategoryOne'
import DestinationOne from '../Components/Message/Message-slider'
import AboutOne from '../Components/About/AboutOne'
import PlaylistSlider from '../Components/Playlists/PlaylistSlider'
import GalleryOne from '../Components/Gallery/GalleryOne'
import CounterOne from '../Components/Counter/CounterOne'
import SongsSlider from '../Components/Songs/SongsSlider'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'


function HomeOne() {
    return (
        <div>
            <HeaderOne />
            <BannerOne />
            <MinistryInfo />
            <CategoryOne />
            <DestinationOne />
            <AboutOne showFullContent={false} />
            <PlaylistSlider />
            <GalleryOne />
            <CounterOne />
            <SongsSlider className="space-bottom"/>
            {/* <TestimonialOne /> */}
            {/* <BlogOne /> */}
            <section className="bg-smoke"></section> 
            {/* Bible verse section */}
            {/* <BibleVerse /> */}
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default HomeOne
