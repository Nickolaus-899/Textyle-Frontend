import EnterField from "../components/account/EnterField";
import {useState} from "react";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import { BodyType } from "../proxy/ProxyAPI/BodyType.tsx";

const Auth = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [msg, setMsg] = useState("")


    const submitHandler = (e) => {
        const body = {
            username: name,
            password: password,
        };
        console.log(body)
        const apiParameters = ProxyAPIParameters.getBuilder()
          .setDataReceivingFunction(login)
          .setBody(body, BodyType.FORM_DATA)
          .build();
    
        ProxyUser.proxy().api.login.post(apiParameters);
    };
    const login = (data) => {
        if (typeof data == 'string') {
            setName("")
            setPassword("")

            setMsg(data)
        } else {
            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', name)

            setMsg("")

            window.location.href = "/"
        }
    }

    return (
      <div className="LoginList">
          <EnterField title="Name" setValue={setName} value={name}/>
          <EnterField title="Password" setValue={setPassword} value={password}/>

          <div className="ErrorMessage">
              {msg}
          </div>


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
