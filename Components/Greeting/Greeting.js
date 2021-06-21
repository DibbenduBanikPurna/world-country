import React from 'react';

const Greeting = () => {
    let time=new Date();
    let hours=time.getHours();
    console.log(hours);
    var Greet="";
    if(hours=>1 && hours<12){
        Greet="Good Morning"
    }
    else if(hours=>12 && hours<15){
        Greet="Good Noon"
    }
    else if(hours=>15 && hours<17){
        Greet="Good Afternoon"
    }
    else if(hours=>17 && hours<19)
    {
        Greet="Good Evening"
    }
    else if(hours>=19 && hours<24) {
        Greet="Good Night"
    }
   
    return (
        <div>
            <h4 className="text-success text-center">Hi, Sir {Greet}</h4>
        </div>
    );
};

export default Greeting;