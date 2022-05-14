import React, { useState, useEffect } from "react"
import axios from "axios"

import * as S from "../styles/styles"
import SearchBar from "../components/SearchBar.js"
import LabelSectionTitle from "../components/LabelSectionTitle"
import GamesContainer from "../components/GamesContainer"
import Header from "../components/Header"
import Footer from "./../components/Footer.js"

export default function BrowseGamesPage() {
    const [games, setGames] = useState(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/games`)
            .then((response) => {
                setGames(response.data)
            })
            .catch((error) => console.log(error))
    })

    const [gameQuery, setGameQuery] = useState("")

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/games?q=${gameQuery}`)
            .then((response) => {
                setGames(response.data)
            })
            .catch((error) => console.log(error))
    }, [gameQuery])

    return (
        <>
            <Header />
            <S.Container>
                <S.BrowseGamesPage>
                    <SearchBar
                        gameQuery={gameQuery}
                        setGameQuery={(value) => setGameQuery(value)}
                    />
                    <LabelSectionTitle>
                        PC games / All Games {games && `(${games?.length})`}
                    </LabelSectionTitle>
                    <GamesContainer games={games} />
                </S.BrowseGamesPage>
            </S.Container>
            <Footer />
        </>
    )
}
