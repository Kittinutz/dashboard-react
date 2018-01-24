import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './vendor/css/top.css';
import './vendor/css/Inside.css';
import './vendor/css/sb-admin.css';


// for second css
import './vendor/bootstrap4/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />
    , document.getElementById('root')
);
registerServiceWorker();
