import React from 'react'
import Textyle from "./Textyle";
import {Route, Routes, useLocation} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Account from "./Account";
import Reg from "./Reg";
import Auth from "./Auth";
import ChangePassword from "./ChangePassword";

function Pages() {
    const location = useLocation();

    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/textyle" element={<Textyle/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/reg" element={<Reg/>}/>
                <Route path="/auth" element={<Auth/>}/>
                {/*<Route path="/change" element={<ChangePassword/>}/>*/}
            </Routes>
        </AnimatePresence>
    )
}

export default Pages
