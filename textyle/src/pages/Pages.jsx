import React from 'react'
import Textyle from "./Textyle";
import {Route, Routes, useLocation} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Contact from "./Contact";
import Account from "./Account";

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/textyle" element={<Textyle/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/account" element={<Account/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages
