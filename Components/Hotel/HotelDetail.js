import React from 'react';

const HotelDetail = ({data}) => {
    console.log(data)
    return (
        <div className="card mt-5">
           <img className="img-fluid" src={require(`../../Images/${data.pic}`).default} alt="" />
            <div className="card-body">
                <h5>{data.name}</h5>
                <p>{data.description}</p>
                <p>{data.rating}</p>
                <p>{data.price}</p>
            </div>

            
        </div>
    );
};

export default HotelDetail;