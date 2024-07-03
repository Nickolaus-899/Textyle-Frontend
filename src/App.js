import Header from "./pages/Header";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import "./pages/css/index.css"
import {useEffect} from "react";
import ProxyUser from "./proxy/ProxyUser";


function App() {
    useEffect(() => {
        new ProxyUser(() => {}, () => {})
    }, [])

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
