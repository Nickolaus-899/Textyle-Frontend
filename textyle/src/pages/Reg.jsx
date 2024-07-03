import EnterField from "../components/account/EnterField";
import {useState} from "react";

const Reg = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const submitHandler = (e) => {

  };

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
