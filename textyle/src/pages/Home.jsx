import InputField from "../components/InputField";
import {useState} from "react";
import OutputField from "../components/OutputField";
import TranslateButton from "../components/TranslateButton";
import "./../components/css/index.css"
import "./../index.css"
import Options from "../components/Options";

function Home() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    return (
        <div>
            <div className="TranslateWrapper">
                <div className="TranslateItem">
                    <InputField setInput={setInput} input={input}/>
                </div>

                <div className="TranslateItem">
                    <OutputField output={output}/>
                </div>

                <div className="TranslateItem">
                    <Options input={input} setOutput={setOutput}/>
                </div>
            </div>

            <TranslateButton input={input} setOutput={setOutput}/>
        </div>
    )
}

export default Home