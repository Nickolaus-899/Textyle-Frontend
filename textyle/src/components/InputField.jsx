import styled from "styled-components";

const InputField = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <IForm onSubmit={submitHandler}>
                <StyledTextArea
                    onChange={(e) => props.setInput(e.target.value)}
                    value={props.input}
                />
            </IForm>
        </div>
    );
}

export default InputField

const IForm = styled.form`
  input {
    //width: 30rem;
    //height: 500px;
  }
`

const StyledTextArea = styled.textarea`
  width: 30rem;
  height: 60rex;
  padding: 2rem;
  
  text-align: left;
  vertical-align: top;
  
  resize: none;
  border: 1px solid red;
  border-radius: 2rem;
  
  
`;
