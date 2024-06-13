const TranslateButton = (props) => {
    return (
        <div>
            <button className="MyButton OptionButton" onClick={() => (props.setOutput(props.input))}>
                {props.name}
            </button>
        </div>
    )
}

export default TranslateButton;
