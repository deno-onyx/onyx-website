import { React } from "../../deps.ts";
import Home from "./Home.tsx";
import Strategies from "./Strategies.tsx";
import Docs from "./Docs.tsx";

const MainContainer = (props: any) => {

  if (props.page === "home") {
    return (
      <div id="home">
        <Home />
      </div>
    );
  } else if (props.page === "strategies") {
    return (
      <div id="strategies">
        <Strategies />
      </div>
    );
  } else if (props.page === "docs") {
    return (
      <div id="docs">
        <Docs />
      </div>
    );
  }
};

export default MainContainer;
