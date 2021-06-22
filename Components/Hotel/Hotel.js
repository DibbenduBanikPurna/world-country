import React, { useState } from 'react';
import  {hotelData} from '../Data/Data';
import HotelDetail from './HotelDetail';

const Hotel = () => {
    const [data,setData]=useState(hotelData)
   // console.log(data);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {
                        data.map(data=>{
                            return <HotelDetail key={data.id} data={data} />
                        })
                    }
                    
                </div>
                <div className="col-md-6">
                        <img className="img-fluid" src="" alt=""/>
                </div>
            </div>

           
        </div>
    );
};

export default Hotel;