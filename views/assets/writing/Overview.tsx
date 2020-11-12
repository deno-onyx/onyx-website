import { React } from '../../../deps.ts'

const Overview = () => {
    return (
        <div className='overviewContainer'>   
            <p>Onyx is authentication middleware for Deno inspired by Passport.js. 
                Like Passport, Onyx prioritizes modularization and flexibility — it abstracts much of the authentication process away yet leaves exact control of the verification procedure up to the developer.</p>
            <p>Onyx's primary concern is keeping code clean and organized. 
                Through the use of specialized instructions called <i>strategies</i>, which are held in individual modules, you can streamline your authentication process without importing unnecessary dependencies.</p>
            <p>All you need is one line to get started.</p>
        </div>
    )
}

export default Overview;