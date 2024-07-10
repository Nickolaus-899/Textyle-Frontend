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

function Textyle() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [proxy] = useState(new ProxyUser(() => {}, () => {}));

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
    
        proxy.api.feed.post(apiParameters);
    }

    const setOutputField = (data) => {
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
                    <OutputField output={output}/>
                </div>

                <div className="TranslateItem">
                    <Options changeStyle={sendRequest}/>
                </div>
            </div>
        </div>
    )
}

export default Textyle