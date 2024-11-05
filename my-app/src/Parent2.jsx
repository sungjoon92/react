import "./Parent2.css";
function Parent2() {
  return (
    <div id="container">
      <div className="main-box">
        <h2>Parent</h2>
        <div>Son</div>
        <div
          style={{
            color: "blue",
            backgroundColor: "pink",
            width: "80%",
            height: "30%",
            textAlign: "center",

            lineHeight: "80px",

            border: "5px solid rgb(130, 130, 231)",
            borderRadius: "20px",
          }}
        >
          Daughter
        </div>
      </div>
    </div>
  );
}

export default Parent2;
