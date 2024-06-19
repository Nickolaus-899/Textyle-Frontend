import EnterField from "../components/EnterField";
import {useState} from "react";

const Auth = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {

    };

    return (
      <div className="LoginList">
          <EnterField title="Имя" setValue={setName}/>
          <EnterField title="Пароль" setValue={setPassword}/>

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
