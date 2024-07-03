import TranslateButton from "./TranslateButton";

const Options = (props) => {
    return (
        <div className="OptionsStyle">
            <TranslateButton name="Business"
                             color="darkslateblue" onClick={props.changeStyle}/>
            <TranslateButton name="Journalistic"
                             color="blue" onClick={props.changeStyle}/>
            <TranslateButton name="Scientific"
                             color="green" onClick={props.changeStyle}/>
            <TranslateButton name="Poetry"
                             color="#d95700" onClick={props.changeStyle}/>
            <TranslateButton name="Conversational"
                             color="#b21d00" onClick={props.changeStyle}/>
        </div>
    )
}

export default Options;
