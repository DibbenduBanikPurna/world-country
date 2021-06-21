import React, { useState } from 'react';
import { homeData, hotelData } from '../Data/Data';
import Greeting from '../Greeting/Greeting';
import HomeImage from './HomeImage/HomeImage';
import './Home.css'
const Home = () => {
    const [data,setData]=useState(homeData)

    const handleData=(data)=>{
        console.log(data)
    }
    //console.log(data)
    return (
        <section className="home">

        
        <div className="container">
            <Greeting/>
            <div className="row">
                <div className="col-md-5 mt-5 pt-5 text-light">
                    
                    <h3>{data[0].name}</h3>
                    <p>{data[1].description}</p>
                    <button className="btn btn-warning">Booking Now</button>
                   
                </div>

                <div className="col-md-7 mt-5 pt-5">
                    <div className="row">

                   
                    {
                        data.map(data=>{
                            return <HomeImage handleData={handleData} key={data.id} data= {data}/>
                        })
                    }
                    </div>
               
                    
                </div>
            </div>
            
        </div>
        </section>
    );
};

export default Home;