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

export default InputField;

export const IForm = styled.div`
  width: 30vw;
  height: 60vh;
  
  padding: 2rem;

  text-align: left;
  vertical-align: top;

  resize: none;
  border: 1px solid #e0e0e0;
  border-radius: 2rem;

  background-color: #e0e0e0;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    height: 30vh;
    width: 70vw;
  }
`

export const StyledTextArea = styled.textarea`
  width: 90%;
  height: 90%;
  padding-right: 2rem;

  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
  
  resize: none;
  outline: none;

  @media only screen and (max-width: 800px) { 
    font-size: 2vh;
  }
`;
