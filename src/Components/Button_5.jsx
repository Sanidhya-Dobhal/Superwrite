import React from 'react'
import img from '../assets/Vector (3).png';
export default function Button_5({button_handler}) {
  return (
    <div onClick = {button_handler} style = {{opacity: 1}}>
        <img src = {img} className = "right_panel_logos"/>
    </div>
  )
}