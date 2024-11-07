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
import Cold from "./Cold";
import Cold1 from "./Cold1";
import Cold2 from "./Cold2";
import Cold3 from "./Cold3";
import Login from "./login/login";
import Page from "./login/Page";
import Filter from "./login/filter";
import Filter2 from "./login/Filter2";
import Names from "./20241107/names";
import Rendering from "./20241107/Rendering";
import Cafe from "./20241107/Cafe";
import SHOP from "./20241107/SHOP";
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
      <Cold>false</Cold>
      <Cold1></Cold1>
      <Cold2></Cold2>
      <Cold3></Cold3>
      <Login></Login>
      <Page userType={"user"}></Page>
      <Filter></Filter>
      <Filter2></Filter2>
      ----------------------------------------------
      <Names></Names>
      <Rendering width={"150px"} height={"150px"}></Rendering>
      <Cafe></Cafe>
      <SHOP></SHOP>
    </div>
  );
}
export default App;
