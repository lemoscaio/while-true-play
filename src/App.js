import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {ThemeProvider} from "styled-components"

import GlobalStyle from "./components/Normalize"
import {theme} from "./styles/theme"
import UserContext from "./contexts/UserContext"
import BrowseGamesPage from "./components/BrowseGamesPage"


export default function App() {
    const [userInfo, setUserInfo] = React.useState({
        name: "",
        image: "",
        email: "",
        token: ""
    })

    const totalInfo = {userInfo, setUserInfo};
    
    return (
        <ThemeProvider theme={theme}>
        <UserContext.Provider value={totalInfo}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                <Route path="/" element={<BrowseGamesPage />} />
                {/* <Route path="/" element={<Menu />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </ThemeProvider>
    )
}