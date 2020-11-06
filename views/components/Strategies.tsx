import { React } from '../../deps.ts';

const Strategies = () => {
    return (
        <div className="parentDivs">
          <h1 className="headers">Strategies</h1>
          <div id="strategyContainer">
              <a 
                className="strategy" 
                href='https://github.com/deno-onyx/onyx-website'
                target='_blank'>
                  <h3>Local Strategy</h3>
                  <p>Local authentication strategy for Onyx</p>
                </a>
                <a 
                className="strategy" 
                href='https://github.com/deno-onyx/onyx-website'
                target='_blank'>
                  <h3>Basic Strategy</h3>
                </a>
                <a 
                className="strategy" 
                href='https://github.com/deno-onyx/onyx-website'
                target='_blank'>
                  <h3>GitHub Strategy</h3>
                </a>
          </div>
        </div>
    )
}

export default Strategies;