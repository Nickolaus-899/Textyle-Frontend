import InputField from "../components/textyle/InputField";
import {useState} from "react";
import OutputField from "../components/textyle/OutputField";
import "./../components/css/index.css"
import "./../index.css"
import Options from "../components/textyle/Options";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";
import { BodyType } from "../proxy/ProxyAPI/BodyType.tsx";
import {displayMessage} from "../proxy/errors/ErrorDisplay";
import {MessageType} from "../proxy/errors/MessageType.tsx";


export function removeMessagePrefix(str) {
    const prefix = 'Message: ';
    console.log(str, "->", str.startsWith(prefix), str.substring(prefix.length))
    if (str.startsWith(prefix)) {
        return str.substring(prefix.length);
    }
    return str;
}

function Textyle() {
    const [input, setInput] = useState("Здарова, чё как?");
    const [output, setOutput] = useState("Добрый день! Позвольте поинтересоваться, " +
        "как ваши дела сегодня?");

    const sendRequest = (style) => {
        displayMessage('Wait for the result...', MessageType.INFO)

        const body = {
            text: input,
            prompt: style,
        };
        console.log(body)
        const apiParameters = ProxyAPIParameters.getBuilder()
            .setDataReceivingFunction(setOutputField)
            .setMessageReceivingFunction(displayMessage)
            .setBody(body, BodyType.FORM_DATA)
            .build();
    
        ProxyUser.proxy().api.feed.post(apiParameters);
    }

    const setOutputField = (data) => {
        console.log('output-result:', data)
        setOutput(data.result)
    }

    return (
        <div>
            <div className="TranslateWrapper">
                <div className="TranslateItem">
                    <p>Input</p>
                    <InputField setInput={setInput} input={input}/>
                </div>

                <div className="TranslateItem">
                    <p>Output</p>
                    <OutputField output={removeMessagePrefix(output)}/>
                </div>

                <div className="TranslateItem">
                    <Options changeStyle={sendRequest}/>
                </div>
            </div>
        </div>
    )
}

export default Textyle