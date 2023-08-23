import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './assets/BiCycle.css'

function BiCycleMain() {
    return (
        <div className="container py-4 my-4 mx-auto d-flex flex-column">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default BiCycleMain