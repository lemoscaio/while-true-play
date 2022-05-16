import React, { useState, useContext } from "react"
import axios from "axios"

import GamesContainer from "../components/GamesContainer.js"
import GameHighlight from "../components/GameHighlight.js"
import GamesCarousel from "../components/GamesCarousel.js"
import LabelSectionTitle from "./../components/LabelSectionTitle.js"
import BrowseGamesLink from "./../components/BrowseGamesLink.js"
import Footer from "./../components/Footer.js"
import * as S from "./../styles/styles.js"
import { MenuContext } from "./../contexts/MenuContext.js"
import { LoadingContext } from "./../contexts/LoadingContext.js"

export default function MainPage() {
    const { isLoading, setIsLoading } = useContext(LoadingContext)
    const [fourBestSelling, setFourBestSelling] = useState(() => {
        setIsLoading(true)
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/games?limit=4&order=desc:amountSold`
            )
            .then((response) => {
                setFourBestSelling(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
            })
    })
    const [mostViewed, setMostViewed] = useState()
    const [fourMostViewed, setFourMostViewed] = useState(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/games?limit=5&order=desc:views`
            )
            .then((response) => {
                setMostViewed(response.data.shift())
                setFourMostViewed(response.data)
            })
            .catch()
    })
    const [fiveMostRecent, setFiveMostRecent] = useState(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/games?limit=5&order=desc:releaseDate`
            )
            .then((response) => {
                setFiveMostRecent(response.data)
            })
            .catch()
    })

    const { menuIsOpen } = useContext(MenuContext)

    return isLoading ? (
        <S.LoadingContainer>Loading...</S.LoadingContainer>
    ) : (
        <>
            <S.Container menuIsOpen={menuIsOpen}>
                <GameHighlight game={mostViewed} />
                <S.MainPage>
                    <LabelSectionTitle>Highlights</LabelSectionTitle>
                    <GamesCarousel fiveMostRecent={fiveMostRecent} />
                    <LabelSectionTitle>Best selling</LabelSectionTitle>
                    <GamesContainer games={fourBestSelling} />
                    <BrowseGamesLink />
                    <LabelSectionTitle>Most viewed</LabelSectionTitle>
                    <GamesContainer games={fourMostViewed} />
                </S.MainPage>
            </S.Container>
            <Footer />
        </>
    )
}
