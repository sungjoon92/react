import React from "react";

function Names() {
  const names = ["jun", "alex", "ken"].map((el) => {
    return <div>{el}</div>;
  });
  // const names = [<div>jun</div>, <div> alex</div>, <div> ken</div>];

  return <div>{names}</div>;
}

export default Names;
