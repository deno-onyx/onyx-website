import { React } from '../../deps.ts';

const NavBar = (props: any) => {
  const credits =
    "Connie Cho, Alice Fu, Chris Kopcow, George Kruchinina and Cedric Lee";

  return(
      <div className='navBar'>
        <div id='logo'></div>
        <div className='buttonDiv'>
          <div className='buttons' id='navHome' onClick={() => {props.setPage('home')}}>Home</div>
          <div className='buttons' id='navStrategies' onClick={() => {props.setPage('strategies')}}>Strategies</div>
          <div className='buttons' id='navDocs' onClick={() => {props.setPage('docs')}}>Docs</div>
        </div>
        <footer><span id='developedBy'>Developed by </span><a className="githubs" href="https://github.com/chcho2" target="_blank">Connie Cho</a>, <a className="githubs" href="https://github.com/alicejfu" target="_blank">Alice Fu</a>, <a className="githubs" href="https://github.com/opennoise1" target="_blank">Chris Kopcow</a>, <a className="githubs" href="https://github.com/gkruchin" target="_blank">George Kruchinina</a> and <a className="githubs" href="https://github.com/leeced94" target="_blank">Cedric Lee</a></footer>
      </div>
  )
}

// <a href="https://github.com/leeced94" target="_blank">Cedric Lee</a>

// https://github.com/leeced94
// https://github.com/alicejfu
// https://github.com/opennoise1
// https://github.com/gkruchin
// https://github.com/chcho2
export default NavBar;