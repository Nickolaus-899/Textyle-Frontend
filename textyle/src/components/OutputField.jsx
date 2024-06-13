import styled from "styled-components";

const OutputField = (props) => {
    return (
        <div>
            <OutForm>
                <div>{props.output}</div>
            </OutForm>
        </div>
    )

}

export default OutputField

const OutForm = styled.div`
  padding: 2rem;
  width: 30rem;
  height: 60rex;

  border: 1px solid blue;
  border-radius: 2rem;

  text-align: left;
  vertical-align: top;
  resize: none;
`
