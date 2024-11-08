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
import Menu from "./20241107/component/menubettergooddata/Menu";
import UseEffect from "./20241108/UseEffect";
import Button2 from "./20241108/Button2";
import Numbutton from "./20241108/Numbutton";
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
      <Menu></Menu>
      <UseEffect></UseEffect>
      <Button2 onclick={() => alert("실행")} message="haha"></Button2>
      <Button2 onclick={() => alert("취소")}></Button2>
      {/*  */}
      <Button2 onclick={() => alert("확인 완료")} backgroundColor="blue">
        확인
      </Button2>
      <Button2 onclick={() => alert("취소 완료")} backgroundColor="red">
        취소
      </Button2>
      <Button2 onclick={() => alert("보류 완료")} backgroundColor="grey">
        보류
      </Button2>
      <Button2
        onclick={() => alert("1억년을 얻었습니다")}
        backgroundColor="pink"
      >
        1억년
      </Button2>
      <Numbutton></Numbutton>
    </div>
  );
}
export default App;
