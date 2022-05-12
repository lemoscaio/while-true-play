import React from "react"

import * as S from "../styles/styles"
import SearchBar from "./SearchBar.js"
import LabelSectionTitle from "./LabelSectionTitle"
import GamesContainer from "./GamesContainer"

export default function BrowseGamesPage() {
    return (
        <S.Container>
            <S.BrowseGamesPage>
                <SearchBar />
                <LabelSectionTitle />
                <GamesContainer />
            </S.BrowseGamesPage>
        </S.Container>
    )
}
