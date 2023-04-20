import React, { useEffect, useState } from 'react';
import HotelList from './HotelList';

const Hotels = () => {

    const [hotel, setHotel] = useState([])


    useEffect (() => { 


        fetch ('http://localhost:5000/category')
        .then (response => response.json())
        .then (data => setHotel (data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3'>
            {

                hotel.map (hotel => <HotelList key={hotel.id} data = {hotel}></HotelList>)
            }


           
            
        </div>
    );
};

export default Hotels;