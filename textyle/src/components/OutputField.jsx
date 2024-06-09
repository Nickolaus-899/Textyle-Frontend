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
  padding: 10px;
  border: red solid 1px;
  width: 50%;
`
