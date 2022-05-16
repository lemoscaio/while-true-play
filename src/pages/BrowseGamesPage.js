import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

import * as S from "../styles/styles"
import SearchBar from "../components/SearchBar.js"
import LabelSectionTitle from "../components/LabelSectionTitle"
import GamesContainer from "../components/GamesContainer"
import Footer from "./../components/Footer.js"
import { MenuContext } from "./../contexts/MenuContext.js"
import { LoadingContext } from "./../contexts/LoadingContext.js"

export default function BrowseGamesPage() {
    const { isLoading, setIsLoading } = useContext(LoadingContext)

    const queryFromMainPage = useLocation().state?.queryFromMainPage

    const [games, setGames] = useState()
    const [gameQuery, setGameQuery] = useState("")
    const [sort] = useState("desc:amountSold")
    const { menuIsOpen } = useContext(MenuContext)

    useEffect(() => {
        if (queryFromMainPage) setGameQuery(queryFromMainPage)
    }, [])

    useEffect(() => {
        const queryParameter = gameQuery ? `q=${gameQuery}&` : ""
        const sortParameter = sort ? `order=${sort}&` : ""
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/games?${queryParameter}${sortParameter}`
            )
            .then((response) => {
                setGames(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
            })
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
                    {isLoading ? (
                        <S.LoadingContainer>Loading...</S.LoadingContainer>
                    ) : (
                        <GamesContainer games={games} />
                    )}
                </S.BrowseGamesPage>
            </S.Container>
            <Footer />
        </>
    )
}
