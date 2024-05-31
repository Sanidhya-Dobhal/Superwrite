import React from 'react'

export default function User_inp_sec(props) {
  return <div id ="user_inp_sec">
        <input type ="text" placeholder ="Ask any question you’ll have" style = {{fontSize:12}} onKeyDown = {props.entercheck}/>
        <button type ="submit">+</button>
        </div>
    
}
