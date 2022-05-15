import React, { useState, useEffect, useContext } from "react"
import axios from "axios"

import * as S from "../styles/styles"
import SearchBar from "../components/SearchBar.js"
import LabelSectionTitle from "../components/LabelSectionTitle"
import GamesContainer from "../components/GamesContainer"
import Footer from "./../components/Footer.js"
import { MenuContext } from "./../contexts/MenuContext.js"

export default function BrowseGamesPage() {
    const [games, setGames] = useState()
    const [gameQuery, setGameQuery] = useState("")
    const [sort, setSort] = useState("desc:amountSold")
    const { menuIsOpen } = useContext(MenuContext)

    useEffect(() => {
        const queryParameter = gameQuery ? `q=${gameQuery}&` : ""
        const sortParameter = sort ? `order=${sort}&` : ""
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/games?${queryParameter}${sortParameter}`
            )
            .then((response) => {
                setGames(response.data)
            })
            .catch((error) => console.log(error))
    }, [gameQuery, sort])

    return (
        <>
            <S.Container menuIsOpen={menuIsOpen}>
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
