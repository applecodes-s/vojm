import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import PricingPlan from '../Components/Services/PricingPlan'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function Pricing() {
    return (
        <div>
            <HeaderOne />
            <Breadcrumb
                title="Support Us"
            />
            <PricingPlan className="space"/>
            <FooterFour />
            <ScrollToTop />
        </div>
    )
}

export default Pricing
