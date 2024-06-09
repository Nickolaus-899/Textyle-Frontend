import styled from "styled-components";

const InputField = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <IForm onSubmit={submitHandler}>
                <input onChange={(e) => props.setInput(e.target.value)}
                       type="text" value={props.input}
                />
            </IForm>
        </div>
    );
}

export default InputField

const IForm = styled.div`
  input {
    width: 50%;
  }
`
