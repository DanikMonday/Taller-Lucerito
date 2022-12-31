import React from "react";
import img1 from "../imagenes/CH02SFA-2.png"

function Descubrir(props){
  return(
   <div className="cont-bie">
        <div className="tit-bie">{props.titulo}</div>
        <div className="gal-des">
            <div className="ele-gal-des"><img className="img-gal" src={img1} alt="logo" /></div>
            <div className="ele-gal-des"></div>
            <div className="ele-gal-des"></div>
            <div className="ele-gal-des"></div>
        </div>
   </div>
  );
}

export default Descubrir;