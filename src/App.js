import React from 'react';
import './App.scss';
import Input from './Input';
import Message from './MessageList'
import { useState, useEffect } from 'react';

function App() {
  const [messageBox, setMessageBox] = useState([]);
  let [lineText, setLineText] = useState('');

  useEffect(()=>{
    if(((messageBox.length+1)%2) === 0){
      setMessageBox([...messageBox,
        {
            text: '^-^', 
            autor: 'bot'
        }]);
    }
  },[messageBox])

  const updateMessage = () => {
    // const text = document.querySelector('.input-text').value;
    if(lineText){
    setMessageBox([...messageBox,
                  {
                      text: lineText, 
                      autor: 'me'
                  }]);
                  document.querySelector('.input-text').value = '';
                  setLineText ('');
                }
  }

  const lineUpdate =(event) =>{
    setLineText (event.target.value);
  }

  return (
    <div className="App-header App">
      <div className="Message-box"> 
          {messageBox.map((send, index)=>(
            <div key={index} style={{width: '100%'}}>
              <Message outputText = {send.text} outputAutor = {send.autor} />
            </div>
          ))}   
          </div>
      <Input eventClick = {updateMessage} eventLineUpdate = {lineUpdate}/>
    </div>
  );
}

// class App extends React.Component{
//  constructor(props){
//   super(props);
//   this.MessageBox = [];
 
//      this.state = {
//        count: 0,
//        textPrint:'',
//        autor: '',
//      }
//  }

// inputMessage = () =>{
//   const text = document.querySelector('.input-text').value;
//   this.setMessageBox({
//                   textPrint: text,
//                   autor: 'me'
//   })
//   document.querySelector('.input-text').value ='';  
// }

//   render(){
//             return (
//                     <div className="App-header App">
//                         <div className="Message-box">
//                         {this.MessageBox.map((send)=>(
//                             <Message outputText = {this.state.textPrint} outputAutor ={this.state.autor}/>
//                         ))}     
//                         </div>
//                         {/* <MessageList outputList = {this.state.textPrint}/> */}
//                         <Input some_event = {this.inputMessage} />
//                         {/* <span className='counter'>{count}</span>
//                         <button onClick={updateCount} className='counter-button'>Click!</button> */}
//                     </div>
//                     ); 
//           }  
// }

 export default App;
