import EnterField from "../components/account/EnterField";
import {useState} from "react";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import ProxyUser from "../proxy/ProxyUser";
import { BodyType } from "../proxy/ProxyAPI/BodyType.tsx";

const Reg = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [msg, setMsg] = useState("")

  const submitHandler = (e) => {
      if (password !== checkPassword) {
          setPassword("")
          setCheckPassword("")
          setMsg("Passwords are not equal")

          return
      }

      const body = {
          username: name,
          password: password,
      };
      console.log(body)
      const apiParameters = ProxyAPIParameters.getBuilder()
          .setDataReceivingFunction(signUp)
          .setBody(body, BodyType.FORM_DATA)
          .build();

      ProxyUser.proxy().api.singUp.post(apiParameters);
  };

    const signUp = (data) => {
        console.log('signUp', data)

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
    }

    const login = (data) => {
        if (data == null) {
            setName("")
            setPassword("")
            setCheckPassword("")
        } else {
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', name)

            window.location.href = "/"

            console.log(data)
            setMsg("")
        }
    }

  return (
      <div className="LoginList">
        <EnterField title="Name" setValue={setName} value={name}/>
        <EnterField title="Password" setValue={setPassword} value={password}/>
        <EnterField title="Repeat password" setValue={setCheckPassword} value={checkPassword}/>

          <div className="ErrorMessage">
              {msg}
          </div>

        <div className="LoginButton">
          <button className="MyButton" onClick={() => (
              submitHandler()
          )}>
            Register
          </button>

          <a className="MyButton" href="/auth">
            Have an account
          </a>
        </div>

      </div>
  )
}

export default Reg;
