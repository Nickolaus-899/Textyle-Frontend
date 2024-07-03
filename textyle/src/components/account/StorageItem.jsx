import './css/index.css'
import {IForm, StyledTextArea} from "../textyle/InputField";
import styled from "styled-components";

const StorageItem = (props) => {
    const StorageItemWrapper = styled.div`
      box-shadow: 0 10px 40px rgba(176, 175, 189, 0.85);

      margin-bottom: 2rem;
      padding: 2rem;

      display: flex;
      flex-direction: row;

      align-items: center;
      justify-content: space-between;

      transition: box-shadow 0.3s ease-in;
      
      &:hover {
        box-shadow: 0 10px 40px ${(props) => props.color};
        cursor: pointer;
      }
    `

  return (
      <StorageItemWrapper color={props.color}>
          <div>
              <p>Input</p>
              <TextHistory>
                  <StyledTextArea value={props.input}/>
              </TextHistory>

          </div>

          <div>
              <p>Output ({props.style})</p>
              <TextHistory>
                  <StyledTextArea value={props.output}/>
              </TextHistory>
          </div>
      </StorageItemWrapper>
  )
}

const TextHistory = styled(IForm)`
    height: 30vh;
    width: 30vw;
  
    border-radius: 0;
`


export default StorageItem;