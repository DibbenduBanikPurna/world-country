import React from 'react';
import Dog from '../../Images/dog.jpg'
const About = () => {
    return (
        <div className="col-md-5 m-auto mt-5">
            <img className="img-fluid" src={Dog}/>
            <p className="text-light p-3 bg-secondary">
            Mr Tom is in charge.If you face any problem,than you can report or ask any question to us.If you need dogs,you can contact with us.we have many pro dogs and snakes who are very dangerous in Last zone.I think they are very useful for you,to get chicken dinner
            </p>
        </div>
    );
};

export default About;