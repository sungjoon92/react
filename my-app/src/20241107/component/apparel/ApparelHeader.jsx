import React from "react";

function Apparel() {
  return (
    <header>
      <div className="header-top flex space-between">
        <h1 className="logo">APPAREL SHOP</h1>
        <nav>
          <ul className="flex space-between">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">PRODUCTS</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-img">
        <img src={apparel} alt="" />
      </div>
    </header>
  );
}

export default Apparel;
