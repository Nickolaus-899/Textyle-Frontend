import EnterField from "../components/account/EnterField";
import {useState} from "react";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import { BodyType } from "../proxy/ProxyAPI/BodyType.tsx";
import {displayMessage, saveStateMessage} from "../proxy/errors/ErrorDisplay";
import {MessageType} from "../proxy/errors/MessageType.tsx";

const Auth = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = (e) => {
        const body = {
            username: name,
            password: password,
        };
        console.log(body)
        const apiParameters = ProxyAPIParameters.getBuilder()
            .setDataReceivingFunction(login)
            .setMessageReceivingFunction(errorCase)
            .setBody(body, BodyType.FORM_DATA)
            .build();
    
        ProxyUser.proxy().api.login.post(apiParameters);
    };

    const errorCase = (message, type) => {
        if (type === MessageType.ERROR) {
            setName("")
            setPassword("")
        }

        if (type === MessageType.SUCCESS) {
            saveStateMessage(message, type, "0")
            return
        }

        // saveStateMessage(message, type, "1")
        displayMessage(message, type)
    }

    const login = (data) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', name)

        window.location.href = "/"
    }

    return (
      <div className="LoginList">
          <EnterField title="Name" setValue={setName} value={name}/>
          <EnterField title="Password" setValue={setPassword} value={password}/>


          <div className="LoginButton">
              <button className="MyButton" onClick={() => (
                  submitHandler()
              )}>
                  Login
              </button>

              <a className="MyButton" href="/reg">
                  Registration
              </a>
          </div>

      </div>
    )
}

export default Auth;
