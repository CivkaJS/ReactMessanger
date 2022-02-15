import React from "react";
import '../App.scss';

class MessageInChat extends React.Component {
    constructor(props){
        super();
        this.outputAutor = props.outputAutor;
        this.outputTime = props.outputTime;
        this.outputText = props.outputText;
    }

    render() {
        return (
            <div className={(this.props.outputAutor === 'bot' ? "bot-place" : "me-place")}>
                <div style={(this.props.outputAutor === 'bot' ? { backgroundColor: 'Blue' } : { backgroundColor: 'Green' })} className="Message">
                    <h5 className="Message-autor" >{this.props.outputAutor}</h5>
                    <h5>{this.props.outputText}</h5>
                    <h5 className="Message-autor" >{this.props.outputTime}</h5>
                </div>
            </div>
        );
    }
}

export default MessageInChat; 