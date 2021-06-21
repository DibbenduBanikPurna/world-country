import React from 'react';
import './Contact.css'
const Contact = () => {

    return (
        <div className="contact text-light">
            <h5 className="text-center">Contact us..</h5>
            <div className="col-md-5 m-auto">
            <form>
                <input className="form-control" type="text" placeholder="Enter Name"/>
                <br/>
                <input className="form-control" type="email" placeholder="Enter Email"/>
                <br/>
                    <textarea className="form-control" placeholder="Enter your suggesion or report or anything else" rows="10"></textarea>
                <br/>
                <input className="form-control btn btn-outline-warning" type="submit" value="submit"/>
            </form>

            </div>
               
           
        </div>
    );
};

export default Contact;