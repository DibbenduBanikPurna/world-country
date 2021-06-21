import React from 'react';
import { Link } from 'react-router-dom';

const HomeImage = ({handleData,data}) => {
    console.log(data.placeName)
    return (
        <div className="col-md-5 m-2 buts ">
             <img  className="img-fluid but" src={require(`../../../Images/${data.image}`).default} />
                <Link to={`/booking/${data.name}`}>
                <button onClick={()=>handleData(data)} className="btn btn-outline-primary mt-3">{data.placeName}</button>
                </Link>
                
        </div>
    );
};

export default HomeImage;