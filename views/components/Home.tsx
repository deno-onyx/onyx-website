import { React } from '../../deps.ts';

const Home = () => {
  return (
    <div className="parentDivs">
      <header id="onyxLogo"></header>
      <div id='intro'>
         <p id='subtitle'>Modular authentication middleware for Deno</p>
         <p id='description'>Inspired by Jared Hanson's <a className='homeLinks' href='http://www.passportjs.org/' target='_blank'>Passport.js</a>, 
         Onyx is a flexible, open-source authentication solution for <a className='homeLinks' href='https://deno.land/x/oak@v6.3.1' target='_blank'>Oak</a>-based web apps.
         It's for developers who love Deno's lightweight modules but miss easy and accessible authentication.
         If you know how to use Passport, you know how to use Onyx.</p>
      </div>
      <a className='buttons' id='started' href='https://deno.land/x/onyx'>Get started</a>
    </div>
  )
}

export default Home;