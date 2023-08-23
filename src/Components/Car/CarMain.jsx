import React from 'react'
import CarCard from './CarCard'
import './assets/car.css'

function CarMain() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row mt-5">
                    <CarCard />
                    <CarCard />
                    <CarCard />

                </div>
            </div>
        </>
    )
}

export default CarMain