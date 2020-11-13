import { React, ReactDOMServer } from '../deps.ts';

import App from '../views/App.tsx';
import NavBar from '../views/components/NavBar.tsx';
import MainContainer from '../views/components/MainContainer.tsx';
import Home from '../views/components/Home.tsx';
import Strategies from '../views/components/Strategies.tsx';
import Docs from '../views/components/Docs.tsx';
import LinkBar from '../views/components/LinkBar.tsx'

import Overview from '../views/assets/writing/Overview.tsx';
import Middleware from "../views/assets/writing/Middleware.tsx";
// import { CodeBlock, tomorrow } from '../deps.ts';

// CONSTANTS NECESSARY FOR SERVER-SIDE RENDERING

// Endpoint that will reference the 'js' string and hydrate the static files with React
const hydratePath: string = '/hydration.js';

// Static HTML -- includes references to hydration script and CSS stylesheet
const html: string = `<html lang="en"><head><script type="module" src="${hydratePath}"></script><link rel="stylesheet" href="styles.css" type="text/css"><link rel='icon' type='image/png' href='https://i.imgur.com/ALQnrfR.png'><meta name="viewport" content="width=device-width,initial-scale=1"><title>Onyx - Authentication Middleware for Deno</title></head><body><div id="root">${(ReactDOMServer as any).renderToString(
    <App />
  )}</div></body></html>`;
  
// JavaScript used to hydrate static HTML/CSS with React functionality
// (Remember to add every new React component here, since this is unbundled!)  
const js: string = `import React from "https://dev.jspm.io/react@16.14.0";
\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.14.0";
\nconst Docs = ${Docs};
\nconst Strategies = ${Strategies};
\nconst Home = ${Home};
\nconst NavBar = ${NavBar};
\nconst MainContainer = ${MainContainer};
\nconst LinkBar = ${LinkBar};
\nconst Overview = ${Overview};
\nconst Middleware = ${Middleware};
\nReactDOM.hydrate(React.createElement(${App}), document.getElementById("root"));`;

export { html, js, hydratePath };
