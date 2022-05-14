import React from "react"
import { Link } from "react-router-dom"

import * as S from "./../styles/styles.js"

export default function BrowseGamesLink() {
    return (
        <S.BrowseGamesLink>
            <Link to={"/games"}>
                <S.OpenLinkIcon />
                Browse all games
            </Link>
        </S.BrowseGamesLink>
    )
}
