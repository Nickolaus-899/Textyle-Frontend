import TranslateButton from "./TranslateButton";

const Options = (props) => {
    return (
        <div className="OptionsStyle">
            <TranslateButton name="Деловой"
                             color="darkslateblue" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Публицистический"
                             color="blue" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Научный"
                             color="green" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Художественный"
                             color="#d95700" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Разговорный"
                             color="#b21d00" input={props.input} setOutput={props.setOutput}/>
        </div>
    )
}

export default Options;
