import Article from "./Article";
import TagsComponent from "./TagsComponent";
import Todos from "./Todos";
import HTML from "./HTML";
import Parent from "./Parent";
import Parent2 from "./Parent2";
import MySite from "./MySite";
import Welcome from "./Welcome ";
import Card from "./card";
import Button from "./button";

function App() {
  return (
    <div>
      App
      <ul>
        <li>
          <Article />
        </li>
        <li>
          <TagsComponent></TagsComponent>
        </li>
        <li>
          <Todos></Todos>
        </li>
        <li>
          <HTML></HTML>
        </li>
      </ul>
      <Parent></Parent>
      <br></br>
      <Parent2></Parent2>
      <MySite></MySite>
      <Welcome name={"joon"}></Welcome>
      <Card
        width={"200px"}
        height={"170px"}
        backgroundColor={"red"}
        title={"card"}
        content={"제발"}
      ></Card>
      <Button name={"확인"} backgroundColor={"blue"}></Button>
      <Button name={"취소"} backgroundColor={"red"}></Button>
      <Button name={"보류"} backgroundColor={"gray"}></Button>
      <Button name={"1억년"} backgroundColor={"pink"}></Button>
    </div>
  );
}
export default App;
