import React from 'react';
import { FaArrowRight, FaBed, FaPeopleArrows } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HotelList = ({ data }) => {




    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src= {data.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.details}</h2>
                    <div className="badge badge-secondary">{data.type}</div>


                    <div className='flex justify-between'>

                        <div className='flex items-center space-x-2'>

                            <FaBed></FaBed>
                            <p>{data.beds}</p>



                        </div>

                        <div className='flex items-center space-x-2'>

                            <FaPeopleArrows></FaPeopleArrows>
                            <p>{data.capacity}</p>
                        </div>






                    </div>
                    
                    <Link to = '/booking' className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now <FaArrowRight/></button>
                    </Link>
                </div>
            </div>





        </div>
    );
};

export default HotelList;