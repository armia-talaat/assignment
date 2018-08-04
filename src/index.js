import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import './shared/Utils.scss';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
