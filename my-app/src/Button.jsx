function Button({ name, backgroundColor }) {
  const arr = ["blue", "red", "gray", "pink"];

  for (let color of arr) {
    color = backgroundColor;
  }
  return (
    <>
      <button style={{ backgroundColor, padding: "2%" }}>{name}</button>
    </>
  );
}

export default Button;
