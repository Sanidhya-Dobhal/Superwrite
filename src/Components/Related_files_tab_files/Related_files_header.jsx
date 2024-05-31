import React from 'react'
import img from "../../assets/Star_Icon.png";
import img2 from "../../assets/youtube.png";
export default function Related_files_header() {
  return <div id="Related_files_tab_heading">
        <div style = {{display:"flex",alignItems:"center"}}>
          <img src={img} id="Stars_icon"/>
        </div>
        <h3>Related Files (Found by AI)</h3>
      </div>
}
