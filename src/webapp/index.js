import React from 'react';
import ReactDOM from 'react-dom';

import WebApp from './WebApp';
import {PARSE_SERVER_URL, PARSE_APP_ID} from './Constants/Constants';

// // Initialize parse
const Parse = require('parse');
Parse.initialize(PARSE_APP_ID);
Parse.serverURL =  PARSE_SERVER_URL; 

// Apply bootstrap and custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Render the app at root
ReactDOM.render(<WebApp />, document.getElementById('root'));