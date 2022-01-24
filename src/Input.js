// const Input = (props) => {
//     let message = document.querySelector('.imput-text').value;
//         props.textOut = message;


//     return (
//         <div className="Input-box">
//            <textarea className="input-text" placeholder="Ваше сообщение" name="text"></textarea>
//            <input className="submit-text" type="submit" onClick={props.some_event}></input>
//         </div>
//       );    
// }

// export default Input;


import React from "react";
import './App.scss';

class Input extends React.Component{

    render(){
        return (
                <div className="Input-box">   
                   <textarea className="input-text" placeholder="Ваше сообщение" name="text" onChange={this.props.eventLineUpdate}></textarea>
                   <input className="submit-text" type="submit" onClick={this.props.eventClick}></input>
                </div>
              );
    }    
}

export default Input;