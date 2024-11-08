import React from "react";

function Button2(props) {
  const { onclick, children, backgroundColor } = props;
  console.log(children);
  return (
    <>
      <button
        onClick={onclick}
        style={{
          color: "white",
          backgroundColor: backgroundColor,
          width: "100px",
          height: "100px",
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button2;
