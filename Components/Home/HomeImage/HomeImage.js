import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const HomeImage = ({data}) => {
    const [tourData,setTourData]=useContext(userContext)
   
    return (
        <div className="col-md-5 m-2 buts ">
             <img  className="img-fluid but" src={require(`../../../Images/${data.image}`).default} />
                <Link to={`/booking/${data.name}`}>
                <button onClick={()=>setTourData(data)} className="btn btn-outline-primary mt-3">{data.placeName}</button>
                </Link>
                
        </div>
    );
};

export default HomeImage;