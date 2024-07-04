import TranslateButton from "./TranslateButton";

const Options = (props) => {
    return (
        <div className="OptionsStyle">
            <TranslateButton name="Business"
                             color="darkslateblue" onClick={() => props.changeStyle('business')}/>
            <TranslateButton name="Journalistic"
                             color="blue" onClick={() => props.changeStyle('journalistic')}/>
            <TranslateButton name="Scientific"
                             color="green" onClick={() => props.changeStyle('scientific')}/>
            <TranslateButton name="Poetry"
                             color="#d95700" onClick={() => props.changeStyle('poetry')}/>
            <TranslateButton name="Conversational"
                             color="#b21d00" onClick={() => props.changeStyle('conversational')}/>
        </div>
    )
}

export default Options;
