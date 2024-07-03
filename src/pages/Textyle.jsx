import InputField from "../components/textyle/InputField";
import {useState} from "react";
import OutputField from "../components/textyle/OutputField";
import "./../components/css/index.css"
import "./../index.css"
import Options from "../components/textyle/Options";
import ProxyUser from "../proxy/ProxyUser";
import ProxyAPIParameters from "../proxy/ProxyAPI/ProxyAPIParameters";

function Textyle() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [proxy] = useState(new ProxyUser(() => {}, () => {}));

    const sendRequest = () => {
        const body = {
            text: input,
            prompt: '',
        };
        console.log(body)
        const apiParameters = ProxyAPIParameters.getBuilder()
          .setDataReceivingFunction(setOutputField)
          .setBody(body)
          .build();
    
        proxy.api.feed.post(apiParameters);
    }

    const setOutputField = (data) => {
        setOutput(data)
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