import EnterField from "../components/account/EnterField";
import {useState} from "react";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";

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
          .setBody(body)
          .build();
    
        ProxyUser.proxy().api.login.post(apiParameters);
    };
    const login = (data) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', name)
    }

    return (
      <div className="LoginList">
          <EnterField title="Name" setValue={setName}/>
          <EnterField title="Password" setValue={setPassword}/>

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
