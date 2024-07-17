import { IForm, StyledTextArea } from "./InputField"

const OutputField = (props) => {
    return (
        <div>
            <IForm>
                <StyledTextArea value={props.output} onChange={() => {}}/>
            </IForm>
        </div>
    )

}

export default OutputField
