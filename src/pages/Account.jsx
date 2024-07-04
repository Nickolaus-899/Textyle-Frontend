import {useEffect, useState} from "react";
import History from "../components/account/History";
import AccountInfo from "../components/account/AccountInfo";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";

const Account = (props) => {
    const [history, setHistory] = useState([
        { input: "User login", output: "Success", style: "business" },
        { input: "Fetch data", output: "Data received", style: "journalistic" },
        { input: "Submit form", output: "Form submitted", style: "scientific" },
        { input: "Load page", output: "Page loaded", style: "poetry" },
        { input: "Send message", output: "Message sent", style: "conversational" },
        { input: "User logout", output: "Logged out", style: "business" },
        { input: "Update profile", output: "Profile updated", style: "journalistic" },
        { input: "Delete account", output: "Account deleted", style: "scientific" },
        { input: "Change password", output: "Password changed", style: "poetry" },
        { input: "Download report", output: "Report downloaded", style: "conversational" },
        { input: "Upload file", output: "File uploaded", style: "business" },
    ]);

    const setHistoryHandler = (data) => {
        // TODO: discuss with backend
        setHistory(data.history)
    }

    useEffect(() => {
        const apiParameters = ProxyAPIParameters.getBuilder()
            .setDataReceivingFunction(setHistoryHandler)
            .build();
        ProxyUser.proxy().api.history.get(apiParameters)
    }, [])

    return (
        <div>
            <AccountInfo/>
            <History history={history} displayNumber={5}/>
        </div>
    )
}

export default Account;
