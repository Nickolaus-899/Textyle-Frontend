import styled from "styled-components";
import {Link} from "react-router-dom";
import "./../images/book.jpg";
import book from "./../images/book.jpg";

const Home = (props) => {

  return (
      <div className="HomeItemsWrapper">
          <div className="HomeItem">
              <h1>Style Your Text with Ease</h1>
              <p>
                  Transform your text with just one click. Simply enter your text,
                  choose a style, and see the magic happen!
              </p>
              <LinkToTextyle to={'/textyle'}>
                  Let's try it!
              </LinkToTextyle>
          </div>
          <div className="HomeImage">
              <img src={book} alt="Book"/>
          </div>

      </div>
  )
}


const LinkToTextyle = styled(Link)`
  text-decoration: none;
  border: 2px solid black;
  border-radius: 10px;
  
  background-color: black;
  color: white;
  
  padding: 15px;
  
  justify-content: center;
  
  width: 9rem;
`


export default Home;
