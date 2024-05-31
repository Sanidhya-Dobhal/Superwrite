import React from 'react';
import Text_editor_icon from "../assets/Text_editor_icon.png"

export default function Button_1({button_handler}) {
  return (
    <div onClick = {button_handler} style = {{opacity: 0.5}}>
      <img src = {Text_editor_icon} className = "right_panel_logos"/>
    </div>
  )
}
