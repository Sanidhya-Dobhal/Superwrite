import React from 'react'
import chat_logo from '../../assets/chatbubbles-outline.png';
export default function Button_2({button_handler}) {
  return (
    <div onClick = {button_handler} style = {{opacity: 0.5}}>
      <img src = {chat_logo} className = "right_panel_logos" />
    </div>
  )
}
