import {useEffect, useState} from "react";
import History from "../components/account/History";
import AccountInfo from "../components/account/AccountInfo";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import {displayMessage} from "../proxy/errors/ErrorDisplay";
import {MessageType} from "../proxy/errors/MessageType.tsx";

const Account = (props) => {
    const [history, setHistory] = useState([
        { text: "1) Our task was to create a user-friendly interface that will allow to interact with the model provided by AI team. We were planning to provide three pages for our project: 'hello-page', page with input-output, and the page about our team. However, later, we as the team had decided to expand the functionality of the project by adding accounts and registration with a history of translations, thus we had to work on the pages respectively.\n" +
                "\n" +
                "2) We have completed four main stages: implement all 6 pages with a user-friendly routing between them, connect to a backend part by sending requests and receiving responses, provided proper error handling with the help of the visualization of messages and errors for all happening processes as pop-up notifications, and adapted the site for mobile devices.\n" +
                "\n" +
                "3.1) We had difficulties with the connecting to the backend since we hadn't understood the proper format for data exchange. \n" +
                "\n" +
                "4.1) After the more thorough interaction with the backend team, we have found a solution. \n" +
                "\n" +
                "3.2) Furthermore, we discovered after a testing that results of some processes were not obvious and noticeable.\n" +
                "\n" +
                "4.2) We elaborated this question by introducing pop-up notifications with messages.", result: "Success", prompt: "business" },
        { text: "Fetch data", result: "Data received", prompt: "journalistic" },
        { text: "Submit form", result: "Form submitted", prompt: "scientific" },
        { text: "Load page", result: "Page loaded", prompt: "poetry" },
        { text: "Send message", result: "Message sent", prompt: "conversational" },
        { text: "User logout", result: "Logged out", prompt: "business" }
    ]);

    const setHistoryHandler = (data) => {
        console.log("in account (data):", data)
        setHistory(data)
    }

    const displayErrorHistory = (msg) => {
        console.log("in account (msg):", msg)

        displayMessage(msg, MessageType.INFO)
    }

    useEffect(() => {
        const apiParameters = ProxyAPIParameters.getBuilder()
            .setDataReceivingFunction(setHistoryHandler)
            .setMessageReceivingFunction(displayErrorHistory)
            .build();
        ProxyUser.proxy().api.history.get(apiParameters)
    }, [])

    return (
        <div>
            <AccountInfo setHistory={setHistory}/>
            <History history={history} displayNumber={6}/>
        </div>
    )
}

export default Account;
