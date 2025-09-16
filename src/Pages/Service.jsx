import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import Donate from '../Components/Services/Donate'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function Service() {
    return (
        <div>
            <HeaderOne />
            <Breadcrumb
                title="Services"
            />
            <Donate className="space-bottom"/>
            <FooterFour />
            <ScrollToTop />
        </div>
    )
}

export default Service
