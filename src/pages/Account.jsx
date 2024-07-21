import {useEffect, useState} from "react";
import History from "../components/account/History";
import AccountInfo from "../components/account/AccountInfo";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import {displayMessage} from "../proxy/errors/ErrorDisplay";
import {MessageType} from "../proxy/errors/MessageType.tsx";

const Account = (props) => {
    const [history, setHistory] = useState([]);

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
