import React from "react";
import inputLineMessage from "./InputLineMessage";

const inputLineMessageContainer = (props) => {

    const handleOnChange = (event) =>{
        props.setValue(event.target.props.value);
        console.log(props.value);
   }

   return(
       <inputLineMessage 
       handleOnChange={handleOnChange}/>
   );
};

export default inputLineMessageContainer;