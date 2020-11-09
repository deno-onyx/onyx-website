import { React } from "../../deps.ts";
import Overview from "../assets/writing/Overview.tsx"

const Docs = () => {
  return (
    <div className="parentDivs">
      <h1 className='headers'>Documentation</h1>
      <div id="docsContainer">
        <Overview />
      </div>
    </div>
  );
};

export default Docs;