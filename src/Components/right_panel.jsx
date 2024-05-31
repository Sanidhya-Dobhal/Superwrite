import React from 'react'
import Button_1 from './Button_1'
import Button_2 from './Button_2'
import Button_3 from './Button_3'
import Button_4 from './Button_4'
import Button_5 from './Button_5'
export default function Right_panel({button_handler}) {
  return (
    <div id = "right_panel">
        <Button_1 button_handler = {button_handler}/>
        <Button_2 button_handler = {button_handler}/>
        <Button_3 button_handler = {button_handler}/>
        <Button_4 button_handler = {button_handler}/>
        <Button_5 button_handler = {button_handler}/>
    </div>
  )
}
