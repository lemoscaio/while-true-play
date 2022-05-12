import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Header from "./components/Header"
import Game from "./components/Game"
import SignUp from "./components/SignUp"

import GlobalStyle from "./components/Normalize"
import { theme } from "./styles/theme"
import UserContext from "./contexts/UserContext"
import BrowseGamesPage from "./components/BrowseGamesPage/BrowseGamesPage"

export default function App() {
    const [userInfo, setUserInfo] = React.useState({
        name: "",
        image: "",
        email: "",
        token: "",
    })

    const totalInfo = { userInfo, setUserInfo }

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={totalInfo}>
                <BrowserRouter>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<BrowseGamesPage />} />
                        {/* <Route path="/" element={<Menu />} /> */}
                        <Route path="/game/:idGame" element={<Game />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </ThemeProvider>
    )
}
