import { React } from '../../deps.ts';

const NavBar = (props: any) => {
  return(
      <div className='navBar'>
        <div id='navHome' onClick={() => {props.setPage('home')}}>Home</div>
        <div id='navStrategies' onClick={() => {props.setPage('strategies')}}>Strategies</div>
        <div id='navDocs' onClick={() => {props.setPage('docs')}}>Docs</div>
      </div>
  )
}

export default NavBar;