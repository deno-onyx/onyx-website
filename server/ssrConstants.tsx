import { React, ReactDOMServer } from '../deps.ts';

import App from '../views/App.tsx';
import NavBar from '../views/components/NavBar.tsx'
import MainContainer from '../views/components/MainContainer.tsx'

// CONSTANTS NECESSARY FOR SERVER-SIDE RENDERING

// Endpoint that will reference the 'js' string and hydrate the static files with React
const hydratePath: string = '/hydration.js';

// Static HTML -- includes references to hydration script and CSS stylesheet
const html: string = `<html><head><script type="module" src="${hydratePath}"></script><link rel="stylesheet" href="styles.css" type="text/css"></head><body><div id="root">${(ReactDOMServer as any).renderToString(
    <App />
  )}</div></body></html>`;
  
// JavaScript used to hydrate static HTML/CSS with React functionality
// (Remember to add every new React component here, since this is unbundled!)  
const js: string = `import React from "https://dev.jspm.io/react@16.14.0";
\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.14.0";
\nconst NavBar = ${NavBar};
\nconst MainContainer = ${MainContainer};
\nReactDOM.hydrate(React.createElement(${App}), document.getElementById("root"));`;

export { html, js, hydratePath };
