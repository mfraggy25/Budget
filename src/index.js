import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider}from "@speechly/react-client";

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="21c1b96e-5e56-472f-943d-96f766499f2e" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>,
    document.getElementById('root'),
  );