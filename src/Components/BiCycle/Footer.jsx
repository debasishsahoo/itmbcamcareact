import React from 'react'

function Footer() {
    return (
        <div className="footer d-flex flex-column mt-5">
            <div className="row r4">
                <div className="col-md-2 myt des"><a href="#">Description</a></div>
                <div className="col-md-2 myt "><a href="#">Review</a></div>
                <div className="col-md-2 mio offset-md-4"><a href="#">ADD TO CART</a></div>
                <div className="col-md-2 myt "><button type="button" className="btn btn-outline-warning"><a href="#">BUY
                    NOW</a></button></div>
            </div>
        </div>
    )
}

export default Footer