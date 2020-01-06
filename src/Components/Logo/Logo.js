import React from "react";
//import Tilt from "react-tilt";
import brain from "./brain.svg";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      {/* <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 150, width: 250 }}
      > */}

      <div className="Tilt-inner pa3">
        <img
          style={{
            paddingTop: "5px",
            height: "10%",
            width: "10%",
            position: "absolute",
            left: "100px"
          }}
          alt="logo"
          src={brain}
        />
      </div>
      {/* </Tilt> */}
    </div>
  );
};

export default Logo;
