import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import './App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
// import 'react-id-swiper/src/styles/css/swiper.css';

import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'mdbreact/dist/scss/mdb.scss';
import 'react-id-swiper/src/styles/scss/swiper.scss';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
