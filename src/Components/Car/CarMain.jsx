import React from 'react'
import CarCard from './CarCard'
import './assets/car.css'

function CarMain() {

    const CarData = [
{ id: 1, price: '22495', fl: '8.5/7.1', engine: '1.4L MultiAir/16V I-4 Turbo', hp: '135' },
{ id: 2, price: '27495', fl: '8.3/7.1', engine: '1.5L MultiAir/16V I-4 Turbo', hp: '135' },
{ id: 3, price: '29495', fl: '8.2/7.1', engine: '1.6L MultiAir/16V I-4 Turbo', hp: '135' }
    ]






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