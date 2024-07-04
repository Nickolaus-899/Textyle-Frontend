import EnterField from "../components/account/EnterField";
import {useState} from "react";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import ProxyUser from "../proxy/ProxyUser";

const Reg = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const submitHandler = (e) => {
      const body = {
          username: name,
          password: password,
      };
      console.log(body)
      const apiParameters = ProxyAPIParameters.getBuilder()
          .setDataReceivingFunction(signUp)
          .setBody(body)
          .build();

      ProxyUser.proxy().api.login.post(apiParameters);
  };

    const signUp = (data) => {
        console.log(data)
    }

  return (
      <div className="LoginList">
        <EnterField title="Name" setValue={setName}/>
        <EnterField title="Password" setValue={setPassword}/>
        <EnterField title="Repeat password" setValue={setCheckPassword}/>

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
