import React from "react";
import img from "../../assets/Rectangle 634.png";
import img2 from "../../assets/youtube.png";
export default function Related_files_body() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div style={{ height: "calc(100vh - 110px)", overflowY: "scroll" }}>
      <>
        {arr.map((ele) => (
          <div key={ele} className="related_file_elements">
            <img src={img} style={{ width: "5vw", height: "auto" }} />
            <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={img2} className="youtube" />
              <span style={{ marginLeft: 4 }}>Youtube</span>
            </div>
            <h4 style ={{marginLeft:8}}>
              iPhone 15 & its benefits for students in college
            </h4>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
