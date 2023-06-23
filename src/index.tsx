import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModulePage from './ModulePage';
import { Footer, Header } from './components';
import useRoutingHook, { Page } from './routing';

function Routing() {
  const { page, setPage } = useRoutingHook();
  switch (page) {
    case Page.App:
      return <App setPage={setPage} />;
    case Page.Packages:
      return <ModulePage setPage={setPage} />;
    default:
      return (
        <div className="module">
          <Header setPage={setPage} />
          <div className="glx-content--spacer-header" />

          <h1>404 Page not found</h1>
          <Footer rel />
        </div>
      );
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
