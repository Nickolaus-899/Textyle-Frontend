import {useState} from "react";
import History from "../components/account/History";
import AccountInfo from "../components/account/AccountInfo";

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

    return (
        <div>
            <AccountInfo name={"SomeUser"}/>
            <History history={history} displayNumber={5}/>
        </div>
    )
}

export default Account;
