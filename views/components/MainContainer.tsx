import { React } from '../../deps.ts';
import Home from './Home.tsx';
import Strategies from './Strategies.tsx';

const MainContainer = (props: any) => {
    if(props.page === "home") {
        return (
            <div id="home">
              <Home />
              <footer>Developed by Connie Cho, Alice Fu, Chris Kopcow, George Kruchinina and Cedric Lee</footer>
            </div>
            
        )
    } else if (props.page === "strategies") {
        return (
            <div id="strategies">
              <Strategies />
              <footer>Developed by Connie Cho, Alice Fu, Chris Kopcow, George Kruchinina and Cedric Lee</footer>
            </div>
        )
    } else if (props.page === "docs") {
        return (
            <div id="docs">
              <footer>Developed by Connie Cho, Alice Fu, Chris Kopcow, George Kruchinina and Cedric Lee</footer>
            </div>
        )
    }
}

export default MainContainer;