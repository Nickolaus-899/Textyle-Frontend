import Header from "./pages/Header";
import {BrowserRouter} from "react-router-dom";
import Pages from "./pages/Pages";
import "./pages/css/index.css"
import React, {useEffect, useState} from "react";
import ProxyUser from "./proxy/ProxyUser";
import {toast, ToastContainer} from "react-toastify";
import {displayMessage} from "./proxy/errors/ErrorDisplay";
import {MessageType} from "./proxy/errors/MessageType.tsx";


function App() {
    useEffect(() => {
        new ProxyUser(() => {}, () => {})
    }, [])

    useEffect(() => {
        const pageStateStr = localStorage.getItem('pageState')

        if (!pageStateStr) {
            return
        }

        const pageState = parseInt(pageStateStr, 10);

        console.log("state =", pageState)
        const notificationMessage = localStorage.getItem('notificationMessage');
        const notificationTypeString = localStorage.getItem('notificationType')


        if (notificationMessage && notificationTypeString && pageState === 1) {
            const notificationType = parseInt(notificationTypeString, 10);

            localStorage.removeItem('notificationMessage');
            localStorage.removeItem('notificationType');

            displayMessage(notificationMessage, notificationType)
        }

        localStorage.setItem('pageState', (pageState + 1).toString())
    }, [])

  return (
    <div className="App">
        <div>
            <BrowserRouter>
                <Header/>
                <Pages/>
            </BrowserRouter>
        </div>

        <ToastContainer/>
    </div>
  );
}

export default App;
