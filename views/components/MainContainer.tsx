import { React } from "../../deps.ts";
import Home from "./Home.tsx";
import Strategies from "./Strategies.tsx";
import Docs from "./Docs.tsx";

const MainContainer = (props: any) => {

  if (props.page === "home") {
    return (
      <>
        <Home />
      </>
    );
  } else if (props.page === "strategies") {
    return (
      <>
        <Strategies />
      </>
    );
  } else if (props.page === "docs") {
    return (
      <>
        <Docs />
      </>
    );
  }
};

export default MainContainer;
