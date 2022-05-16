import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GamePage from "./pages/GamePage.js"
import SignUp from "./pages/SignUpPage.js"
import SignIn from "./pages/SignInPage.js"
import CheckoutPage from "./pages/CheckoutPage.js"

import DefaultPage from "./layouts/DefaultPage.js"

import GlobalStyle from "./styles/normalize.js"
import { theme } from "./styles/theme.js"
import { UserProvider } from "./contexts/UserContext.js"
import { MenuProvider } from "./contexts/MenuContext.js"
import { LoadingProvider } from "./contexts/LoadingContext.js"
import BrowseGamesPage from "./pages/BrowseGamesPage.js"
import MainPage from "./pages/MainPage.js"

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoadingProvider>
                <MenuProvider>
                    <UserProvider>
                        <BrowserRouter>
                            <GlobalStyle />
                            <Routes>
                                <Route path="/" element={<DefaultPage />}>
                                    <Route path="" element={<MainPage />} />
                                    <Route
                                        path="games"
                                        element={<BrowseGamesPage />}
                                    />
                                    <Route
                                        path="game/:gameId"
                                        element={<GamePage />}
                                    />
                                    <Route
                                        path="checkout"
                                        element={<CheckoutPage />}
                                    />
                                </Route>
                                <Route path="/sign-up" element={<SignUp />} />
                                <Route path="/sign-in" element={<SignIn />} />
                            </Routes>
                        </BrowserRouter>
                    </UserProvider>
                </MenuProvider>
            </LoadingProvider>
        </ThemeProvider>
    )
}
