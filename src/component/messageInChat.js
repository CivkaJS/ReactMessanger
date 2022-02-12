import React from "react";
import '../App.scss';

class MessageInChat extends React.Component{

    render(){
        return (
                <div className={(this.props.outputAutor==='bot' ? "bot-place" : "me-place")}>
                        <h5 className="Message-autor" >{this.props.outputAutor}</h5>
                    <div style={(this.props.outputAutor==='me' ? {backgroundColor: 'Green'}: {backgroundColor: 'Blue'})}className="Message"> 
                                <h5>{this.props.outputText}</h5>
                    </div>
                </div>
                ); 
    }    
}

export default MessageInChat; 