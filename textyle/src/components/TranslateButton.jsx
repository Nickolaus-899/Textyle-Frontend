import styled from "styled-components";

const TranslateButton = (props) => {
    const CustomButton = styled.button`
      width: 15rem;
      
      &:hover {
        background-color: ${(props) => props.color};
        border: 2px solid ${(props) => props.color};
      }
    `
    return (
        <div>
            <CustomButton
                className="MyButton"
                color={props.color}
                onClick={props.onClick}
            >
                {props.name}
            </CustomButton>
        </div>
    )
}

export default TranslateButton;
