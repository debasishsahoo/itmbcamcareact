import React from 'react';
import CarCard from './CarCard';
import './assets/car.css';

function CarMain() {
    const Cars = [
        {
            id: 1,
            price: '22495',
            fl: {
                city: 8.3,
                highway: 7.1,
            },
            engine: {
                air: '1.5L MultiAir',
                cylinder: '16V I-4 Turbo',
            },
            hp: '135',
            img: 'https://imgur.com/edOjtEC.png',
        },
        {
            id: 2,
            price: '27495',
            fl: {
                city: 8.7,
                highway: 8.1,
            },
            engine: {
                air: '1.7L MultiAir',
                cylinder: '16V I-4 Turbo',
            },
            hp: '165',
            img: 'https://imgur.com/SKZolYE.png',
        },
        {
            id: 3,
            price: '29495',
            fl: {
                city: 8.9,
                highway: 8.4,
            },
            engine: {
                air: '1.9L MultiAir',
                cylinder: '16V I-4 Turbo',
            },
            hp: '185',
            img: 'https://imgur.com/gUQNKPd.png',
        },
    ];
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row mt-5">
                    {Cars.map((car) => (
                        <CarCard key={car.id} data={car} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CarMain;
