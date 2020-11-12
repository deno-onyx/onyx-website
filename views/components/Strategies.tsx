import { React } from '../../deps.ts';

const Strategies = () => {
    return (
        <div className="parentDivs">
          <div className='stratIntro'>
          <h1 className="headers">Strategies</h1>
          <p>Click a strategy to copy the <code>import</code> line needed to use the ES module.
          More strategies will appear here as they are developed. Feel free to create your own strategy and make a pull request to the Onyx repo!</p>
          </div>
          <div id="strategyContainer">
              <a
                className="strategy" 
                href='https://deno.land/x/onyx@v1.0/src/strategies/local-strategy/local-strategy.ts'
                target='_blank'>
                  <span className='stratName'>Local Strategy</span>
                  <p className='stratDescript'>Local authentication strategy for Onyx</p>
                </a>
          </div>
        </div>
    )
}

export default Strategies;