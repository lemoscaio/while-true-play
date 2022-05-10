import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import GlobalStyle from "./components/Normalize"
import UserContext from "./contexts/UserContext"


export default function App() {
    const [userInfo, setUserInfo] = React.useState({
        name: "",
        image: "",
        email: "",
        token: ""
    })

    const totalInfo = {userInfo, setUserInfo};
    
    return (
        <UserContext.Provider value={totalInfo}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                {/* <Route path="/" element={<Menu />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}