// const Message = (props) => {
//     return (
//         <div className="Message-box">
//             <h3>{props.output}</h3>
//         </div>
//       );    
// }

import React from "react";
import './App.scss';

class Message extends React.Component{
    // constructor(props){
    //     super(props);      
    //     this.state={
    //         countMount: 0,
    //         countUpdate: 0
    //     }
    // }


    // componentDidMount(){             key={this.props.outputKey}
    //     this.state.countMount++; 
    //  }
    
    // componentDidUpdate(){
    //    this.state.countUpdate++; 
    // }

    render(){
        return (
                <div className={(this.props.outputAutor==='me' ? "me-place" : "bot-place")}>
                        <h5 className="Message-autor" >{this.props.outputAutor}</h5>
                    <div style={(this.props.outputAutor==='me' ? {backgroundColor: 'Green'}: {backgroundColor: 'Blue'})}className="Message"> 
                                <h5>{this.props.outputText}</h5>
                    </div>
                </div>
                ); 
    }    
}

export default Message; 
