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
              <a href="/textyle" className="MyButton">
                  Let's try it!
              </a>
          </div>
          <div className="HomeImage">
              <img src={book} alt="Book"/>
          </div>

      </div>
  )
}


export default Home;
