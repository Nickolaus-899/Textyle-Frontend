import TranslateButton from "./TranslateButton";

const Options = (props) => {
    return (
        <div>Some options: <TranslateButton input={props.input} setOutput={props.setOutput}/></div>
    )
}

export default Options;
