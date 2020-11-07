import { React } from "../../deps.ts";
import Home from "./Home.tsx";
import Strategies from "./Strategies.tsx";
import Docs from "./Docs.tsx";
import LinkBar from "./LinkBar.tsx";

const MainContainer = (props: any) => {
  if (props.page === "home") {
    return (
      <div id='mainContainer'>
        <LinkBar />
        <Home />
      </div>
    );
  } else if (props.page === "strategies") {
    return (
      <div id='mainContainer'>
        <LinkBar />
        <Strategies />
      </div>
    );
  } else if (props.page === "docs") {
    return (
      <div id='mainContainer'>
        <LinkBar />
        <Docs />
      </div>
    );
  }
};

export default MainContainer;
