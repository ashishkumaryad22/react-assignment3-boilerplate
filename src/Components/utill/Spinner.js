import React from "react";
import loding from "./loading.gif";

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <img src={loding} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Spinner;
