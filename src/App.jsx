import React from "react";
import TextEditor from "./Components/texteditor";
import Chat_section from "./Components/Chat_section";
import Header from "./Components/header";
import Related_files_cont from "./Components/Related_files_tab_files/Related_files_cont";

function button_handler(event) {
  var i =0,o=0;
  for (i=0;i<5;i++) {
    if (document.getElementsByClassName("right_panel_logos")[i] === event.target) {
      if(document.querySelectorAll("#right_panel div")[i].style.opacity ==1)
      {
        document.querySelectorAll("#right_panel div")[i].style.opacity =0.5;
      }
      else{
        document.querySelectorAll("#right_panel div")[i].style.opacity =1;
      }
      o=1;
      which_button_and_element_display(document.querySelectorAll("#right_panel div")[i]);
    } 
  }
    if (o===0){
      if (event.target.style.opacity == 0.5) {
        event.target.style.opacity = 1;
      } else {
        event.target.style.opacity = 0.5;
      }
      which_button_and_element_display(event.target);
    }
}

function which_button_and_element_display(ele){
  if(ele === document.querySelector("#right_panel div:nth-child(2)"))//This means the chat button has been clicked
        {
          if(ele.style.opacity == 1)
          {
            document.getElementById("chat_outer_div").style.display ="none";
          }
          else{
            document.getElementById("chat_outer_div").style.display ="block";
          }
        }
  else if(ele === document.querySelector("#right_panel div:nth-child(4)")){
    if(ele.style.opacity == 1)
      {
        document.getElementById("Related_files_tab").style.display ="none";
      }
      else{
        document.getElementById("Related_files_tab").style.display ="block";
      }
  }
}
function App() {
  return <>
      <Header button_handler={button_handler} />
      <div id="flex_box_div">
        <Chat_section />
        <TextEditor />
        <Related_files_cont />
      </div>
    </>
}

export default App;
