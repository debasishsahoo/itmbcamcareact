import React from 'react'
import Img from './Img'
import Info from './Info'

function Body() {
    return (
        <div className="container-body mt-4">
            <div className="row r3">
                <Info />
                <Img />
            </div>
        </div>
    )
}

export default Body