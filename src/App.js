import Header from "./pages/Header";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import "./pages/css/index.css"


function App() {
  return (
    <div className="App">
        <div>
            <BrowserRouter>
                <Header/>
                <Pages/>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
