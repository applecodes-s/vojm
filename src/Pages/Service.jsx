import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function Service() {
    return (
        <div>
            <HeaderOne />   
            <Breadcrumb
                title="Services"
            />
            <FooterFour />
            <ScrollToTop />
        </div>
    )
}

export default Service
