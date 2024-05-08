import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import {styles } from "../styles";



const Join = () => (
    
  <div>
    <div className="my-10"></div>
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
        dangerouslySetInnerHTML={{
          __html: '<iframe src="https://forms.monday.com/forms/embed/1cd436e36d3a8285b35eeb296bef9627?r=use1" width="600" height="600" style="border: 0; box-shadow: 5px 5px 56px 0px rgba(0,0,0,0.25);"></iframe>'
        }}
      />
    </div>
  </div>
)

export default SectionWrapper(Join, "Join");