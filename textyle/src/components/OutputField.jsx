import { IForm, StyledTextArea } from "./InputField"
import styled from "styled-components";

const OutputField = (props) => {
    return (
        <div>
            <IForm>
                <StyledTextArea value={props.output}/>
            </IForm>
        </div>
    )

}

export default OutputField
