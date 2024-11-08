import React, { useState } from "react";

function Numbutton() {
  const [num, setNum] = useState(0);
  // function setNum() {
  //   count++;
  //   console.log(count);
  // }
  return (
    <div>
      <div>{num}</div>
      <button onClick={() => setNum((prev) => prev + 1)}>클릭+</button>
      <button onClick={() => setNum(num + 1)}>클릭+</button>
    </div>
  );
}

export default Numbutton;
