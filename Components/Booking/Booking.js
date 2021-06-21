import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    const {name}=useParams();

    const [formdata,setFormData]=useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const handleChange=(e)=>{
        const info=[e.target.name]=e.target.value
        setFormData(info)
    }
  
    return (
        <section className="book">
        <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6 mt-5 pt-5">
            <form onSubmit={handleSubmit} className="forms mb-4">
                           <label htmlFor="location">Origin</label>
                          
                           <input name="name" onFocus={handleChange} required className="form-control" type="text" placeholder="Enter Location"/>
                          
                           <label  htmlFor="destination">Destination</label>
                           
                           <input onFocus={handleChange} className="form-control" type="text" placeholder="Enter Destination"/>
                         
                           <label>From</label>

                           <input  name="from" onFocus={handleChange} required className="form-control" type="calender" />
                          
                           <label>To</label>
                         
                           <input name="to" onFocus={handleChange} required className="form-control" type="date"  />
                            <br/>
                           <button  className="btn btn-warning form-control">Start Booking</button>
                       </form>
            </div>
        </div>
        </section>
    );
};

export default Booking;