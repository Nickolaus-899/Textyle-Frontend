import EnterField from "../components/account/EnterField";
import {useState} from "react";

const ChangePassword = (props) => {
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const submitHandler = (e) => {

    };

    return (
        <div className="LoginList">
            <EnterField title="Password" setValue={setPassword} value={password}/>
            <EnterField title="Repeat password" setValue={setCheckPassword} value={checkPassword}/>

            <div className="LoginButton">
                <button className="MyButton" onClick={() => (
                    submitHandler()
                )}>
                    Change
                </button>

                <a className="MyButton" href="/account">
                    Back
                </a>
            </div>

        </div>
    )
}

export default ChangePassword;
