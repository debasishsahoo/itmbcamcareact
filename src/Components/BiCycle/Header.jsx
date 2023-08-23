import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="row r1">
                <div className="col-md-9 abc">
                    <h1>Tyre Mountain Cycle 21</h1>
                </div>
                <div className="col-md-3 text-right pqr"><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                    className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                <p className="text-right para">Based on 250 Review</p>
            </div>
        </div>
    )
}

export default Header