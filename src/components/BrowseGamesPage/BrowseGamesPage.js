import React, { useState, useEffect } from "react"
import axios from "axios"

import * as S from "./../../styles/styles"
import SearchBar from "./SearchBar.js"
import LabelSectionTitle from "./LabelSectionTitle"
import GamesContainer from "./GamesContainer"
import Header from "../Header"

export default function BrowseGamesPage() {
    const [games, setGames] = useState(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/games`)
            .then((response) => {
                setGames(response.data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <>
            <Header />
            <S.Container>
                <S.BrowseGamesPage>
                    <SearchBar />
                    <LabelSectionTitle gamesAmount={games?.length} />
                    <GamesContainer games={games} />
                </S.BrowseGamesPage>
            </S.Container>
        </>
    )
}
