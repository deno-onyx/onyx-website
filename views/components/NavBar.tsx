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
        <footer><span id='developedBy'>Developed by </span>{credits}</footer>
      </div>
  )
}

export default NavBar;