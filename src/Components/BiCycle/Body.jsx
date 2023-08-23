import React from 'react'
import Img from './Img'
import Info from './Info'

function Body() {
    const myinfo = [
        '100% Quality',
        'Free Shipping',
        'Easy Returns',
        '12 Months Warranty',
        'EMI Starting from (On Credit Cards)',
        'Normal Delivery : 4-5 Days',
        'Express Delivery : 2-3 Days',
        'COD Available (All Over India)'

    ]
    return (
        <div className="container-body mt-4">
            <div className="row r3">
                <Info cyclelist={myinfo} />
                <Img />
            </div>
        </div>
    )
}

export default Body