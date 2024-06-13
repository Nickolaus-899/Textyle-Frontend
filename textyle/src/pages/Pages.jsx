import React from 'react'
import Textyle from "./Textyle";
import {Route, Routes, useLocation} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "./Home";

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/textyle" element={<Textyle/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages
