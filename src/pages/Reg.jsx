import EnterField from "../components/account/EnterField";
import {useState} from "react";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import ProxyUser from "../proxy/ProxyUser";
import { BodyType } from "../proxy/ProxyAPI/BodyType.tsx";


import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {displayMessage, saveStateMessage} from "../proxy/errors/ErrorDisplay";
import {MessageType} from "../proxy/errors/MessageType.tsx";


const Reg = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const submitHandler = (e) => {
      if (password !== checkPassword) {
          displayMessage('Passwords are not equal', MessageType.WARN)
          return
      }

      const body = {
          username: name,
          password: password,
      };
      console.log(body)
      const apiParameters = ProxyAPIParameters.getBuilder()
          .setDataReceivingFunction(signUp)
          .setMessageReceivingFunction(errorCase)
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
            .setMessageReceivingFunction(errorCase)
            .setBody(body, BodyType.FORM_DATA)
            .build();

        ProxyUser.proxy().api.login.post(apiParameters);
    }

    const login = (data) => {
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', name)

        console.log(data)

        window.location.href = "/"
    }

    const errorCase = (message, type) => {
        if (type === MessageType.ERROR) {
            setName("")
            setPassword("")
            setCheckPassword("")
        }

        if (type === MessageType.SUCCESS) {
            saveStateMessage(message, type, "0")
            return
        }

        displayMessage(message, type)
    }


  return (
      <div className="LoginList">
        <EnterField title="Name" setValue={setName} value={name}/>
        <EnterField title="Password" setValue={setPassword} value={password}/>
        <EnterField title="Repeat password" setValue={setCheckPassword} value={checkPassword}/>

          {/*<div className="ErrorMessage">*/}
          {/*    {msg}*/}
          {/*</div>*/}

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
