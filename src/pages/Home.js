import React from "react";
import Hero from '../components/Home/Hero'
import Process from '../components/Home/Process'
import ProductsHighlight from '../components/Home/ProductsHighlight'
import Reviews from '../components/Home/Reviews'
import FAQ from '../components/Home/FAQ'
import MailingList from '../components/Home/MailingList'

function Home() {
    return(
        <div>
            <Hero />
            <Process />
            <ProductsHighlight />
            <FAQ />
            <Reviews />
            <MailingList />
        </div>
    )
}

export default Home;