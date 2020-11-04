import { React } from '../../deps.ts';

const MainContainer = (props: any) => {
    if(props.page === "home") {
        return (
            <div id="home">

            </div>
        )
    }
    else if (props.page === "strategies") {
        return (
            <div id="strategies">

            </div>
        )
    }
    else if (props.page === "docs") {
        return (
            <div id="docs">

            </div>
        )
    }
}

export default MainContainer;