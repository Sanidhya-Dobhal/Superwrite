import React from 'react';
import Doc_title from './doc_title';
import Right_panel from './right_panel';
import Logo_title from './logo_title';
export default function Header({button_handler}) {
  return (
    <header>
         <div><Logo_title /></div>
         <Doc_title />
         <Right_panel button_handler = {button_handler}/>
    </header>
  )
}
