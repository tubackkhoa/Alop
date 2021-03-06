Main dependencies
-----------------
- [babel](https://github.com/babel/babel) for transpiling next-generation JavaScript and JSX into JavaScript supported by current browsers
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) for hot-reloading a React app
- [react-router](https://github.com/reactjs/react-router) for routing
- [redux](https://github.com/reactjs/redux) for managing application state predictably
- [react-redux](https://github.com/reactjs/react-redux) for integrating Redux into React
- [react-router-redux](https://github.com/reactjs/react-router-redux) for managing router state via Redux
- [redux-saga](https://github.com/yelouafi/redux-saga) for sophisticated asynchronic processing
- [webpack](https://github.com/webpack/webpack) for bundling the code and providing a development server supporting HMR (*hot module replacement*, a.k.a. *hot module reloading*, *hot loading*, and *hot reloading*)

In development mode, the code is automatically transpiled by Babel and hot-loaded to the browser by react-hot-loader plugin utilizing [Webpack's HMR feature](https://webpack.github.io/docs/hot-module-replacement.html). With HMR, the changes made to the source files are reflected automatically on the browser *without page reload*. Page reload resets application state whereas hot reload preserves the state and only updates the changed part of the application. For further information on HMR, see [Webpack’s HMR & React-Hot-Loader — The Missing Manual](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96).

Requirements
------------
- Node.js

Usage
-----
### Setup
- Install the dependencies: *npm install* or *yarn*
- Import mysql script from scripts/alop.sql into phpMyadmin
### Development
- Run Webpack development server: *npm start*
- Point your browser to the server (e.g. http://localhost:7000) and begin development at ./src
- There are also browser extensions, such as [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) and [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja), which can significantly boost React app development

### Production
- Create minified bundle: *npm run bundle*
- Serve ./public with your production server of choice
- Run sshpass -p "password" npm run deploy to deploy on server
- Run PORT=80 DB_PASS=123456 forever -w start index.js to keep server running and restarting on changes
- Run node-inspector & npm run server if node does not support --inspect
