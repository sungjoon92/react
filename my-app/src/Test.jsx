function Test() {
  function greet() {
    return "hello";
  }

  const style = {
    color: "white",
    width: "500px",
    height: "500px",
    backgroundColor: "red",
  };

  return (
    <div style={style} className="Test">
      Test
      <input type="text" />
      {greet()}
    </div>
  );
}

export default Test;
