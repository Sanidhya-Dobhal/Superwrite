import React, {useState} from 'react'
import Suggested_cont from './chatBody'
import User_inp_sec from './user_inp_sec'
import Chat_header from './chat_header'
export default function Chat_section() {
const [messages,useMessages] = useState([]);
function entercheck(e){
    if(e.key =='Enter')
    {
      if(e.target.value !=='')
      {
        useMessages([...messages, e.target.value]);
        e.target.value ='';
      }
    }
    console.log(messages);
  }
  return (
    <div id ="chat_outer_div" style = {{display: "block"}}>
        <Chat_header />
        <Suggested_cont entercheck = {entercheck} messages = {messages}/>
        <User_inp_sec entercheck = {entercheck} messages = {messages} useMessages = {useMessages}/>
    </div>
  )
}
