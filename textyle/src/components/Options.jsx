import TranslateButton from "./TranslateButton";

const Options = (props) => {
    return (
        <div className="OptionsStyle">
            <TranslateButton name="Деловой" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Публицистический" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Научный" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Художественный" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Разговорный" input={props.input} setOutput={props.setOutput}/>
        </div>
    )
}

export default Options;
