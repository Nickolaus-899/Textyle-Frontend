import TranslateButton from "./TranslateButton";

const Options = (props) => {
    return (
        <div className="OptionsStyle">
            <TranslateButton name="Business"
                             color="darkslateblue" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Journalistic"
                             color="blue" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Scientific"
                             color="green" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Poetry"
                             color="#d95700" input={props.input} setOutput={props.setOutput}/>
            <TranslateButton name="Conversational"
                             color="#b21d00" input={props.input} setOutput={props.setOutput}/>
        </div>
    )
}

export default Options;
