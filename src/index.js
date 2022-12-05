import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { home, login, profil } from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProfilPage from './pages/ProfilPage';
import { Provider } from 'react-redux';
import store from './store';

import reportWebVitals from './reportWebVitals';
import './style/index.scss';

/**
 * Architecture and rendering of the application.
 * There are also all the routes necessary for the proper functioning of the application.
 * They are nested in the supplier element and in which the store is called.
 * This store has all the states and actions necessary for this application.
 *
 * @returns {JSX.Element} Application
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path={home} element={<Home />} />
                    <Route path={login} element={<LoginPage />} />
                    <Route path={profil} element={<ProfilPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
