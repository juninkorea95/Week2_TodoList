import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/config/configStore'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App 컴포넌트 이하의 모든 영역에서 store을 사용할 준비가 되었다! 는 뜻임
  <Provider store={store}>
    <App />
  </Provider>
);
