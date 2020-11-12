import { React } from '../../../deps.ts'

const Middleware = () => {
    return (
        <div className='middleContainer'>
          <div id='middleIntro'>
            <p>When you import the Onyx module, what you're really importing is an object called 'Onyx' that has a number of built-in methods. 
                A couple of those methods you will need to use as Oak middleware to use Onyx. 
                Others are primarily used by Onyx under the hood to assist with the authentication process. 
                However, if you are a developer interested in creating new or custom strategies for Onyx, it will likely be important to understand how these work.</p> 
            <h2>Where to Start</h2>
            <p>First, though, let's go over Onyx's most vital methods: <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>use()</span></code>, <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>authenticate()</span></code> and <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>initialize()</span></code>.</p>
          </div>
          <div id='use'>
            <h3>onyx.use</h3>
            <p><code><span id='onyxCode'>onyx</span>.<span className='funcCode'>use()</span></code> configures and stores a strategy to to be implemented later on by Onyx. 
            This step <b>must be completed first</b> in order to continue authentication process.
            After all, without a strategy, Onyx doesn't have anything to use to complete the authentication process.</p>
            <img id='useExample' alt='An example of how to use and implement onyx.use()' src='https://i.imgur.com/499rMDa.png'></img>
          </div>
          <div id='authenticate'>
            <h3>onyx.authenticate</h3>
            <p><code><span id='onyxCode'>onyx</span>.<span className='funcCode'>authenticate()</span></code> is the heart of Onyx — it's what you will use to initiate an authenticate process.</p>
            <p>When you want to authenticate a user, simply invoke <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>authenticate()</span></code> and pass in a reference to the strategy you stored with <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>use()</span></code> above.</p>
          </div>
          <div id='initialize'>
            <h3>onyx.initialize</h3>
            <p>As you might expect, <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>initialize()</span></code> creates a new instance of Onyx for each user and sets up its initial state.
            Though it's a simple line of code, it is vital for ensuring Onyx autehnticates each individual user properly.</p>
          </div>
          <h2>Serialization and Deserialization</h2>
          <p>Use the following two functions if you are creating persistent sessions for your users.</p>
          <div id='serialize'>
            <h3>onyx.serializeUser</h3>
            <p>Similar to <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>use()</span></code>, <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>serializeUser()</span></code> stores a callback you write that will be invoked later upon successful verification and authentication.
            This callback should serialize and store user information in some sort of session database.</p>
          </div>
          <div id='deserialize'>
            <h3>onyx.deserializeUser</h3>
            <p>Stores a callback you write that will be invoked later upon successful verification and authentication.
              This callback should deserialize user information, checking to see if the user has an existing session. If so, it should then grab the relevant user data from wherever you stored it.</p>
          </div>
          <h2>Digging Deeper</h2>
          <p>While the following methods are not required to authenticate with Onyx, you may find them useful to understand if you are creating a custom strategy.</p>
          <div id='unuse'>
            <h3>onyx.unuse</h3>
            <p><code><span id='onyxCode'>onyx</span>.<span className='funcCode'>unuse()</span></code> does exactly what it sounds like it does: It deletes the strategy you stored when using <code><span id='onyxCode'>onyx</span>.<span className='funcCode'>use()</span></code>.</p>
          </div>
          <div id='init'>
            <h3>onyx.init</h3>
            <p><code><span id='onyxCode'>onyx</span>.<span className='funcCode'>init()</span></code> is invoked every time a new instance of an Onyx object is created. 
            It creates an instance of the session manager, which controls and creates user sessions.</p>
          </div>
        </div>
    )
}

export default Middleware;