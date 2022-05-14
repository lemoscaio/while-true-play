import React from "react"

import GameCard from "./GameCard.js"
import * as S from "./../styles/styles"

export default function GamesContainer(props) {
    const { games } = props

    return (
        <S.GamesContainer>
            {games ? (
                games?.map((game) => {
                    return <GameCard key={game.id} game={game} />
                })
            ) : (
                <>Loading...</>
            )}
        </S.GamesContainer>
    )
}
