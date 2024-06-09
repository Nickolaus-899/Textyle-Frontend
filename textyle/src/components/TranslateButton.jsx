import styled from "styled-components";

const TranslateButton = (props) => {
    return (
        <div>
            <StyleTranslateButton onClick={() => (props.setOutput(props.input))}>
                Click me!
            </StyleTranslateButton>
        </div>
    )
}

export default TranslateButton;

const StyleTranslateButton = styled.button`

`
