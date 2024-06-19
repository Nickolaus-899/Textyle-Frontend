import EnterField from "../components/EnterField";
import {useState} from "react";

const Reg = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const submitHandler = (e) => {

  };

  return (
      <div className="LoginList">
        <EnterField title="Имя" setValue={setName}/>
        <EnterField title="Пароль" setValue={setPassword}/>
        <EnterField title="Повторите пароль" setValue={setCheckPassword}/>

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
