import InputField from "../components/InputField";
import {useState} from "react";
import OutputField from "../components/OutputField";
import TranslateButton from "../components/TranslateButton";

function Home() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    return (
        <div>
            <InputField setInput={setInput} input={input}/>
            <OutputField output={output}/>
            <TranslateButton input={input} setOutput={setOutput}/>
        </div>
    )
}

export default Home