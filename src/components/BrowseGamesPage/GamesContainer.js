import React from "react"

import GameCard from "./GameCard"
import * as S from "./../../styles/styles"

export default function GamesContainer(props) {
    const { games } = props
    console.log(games)

    return (
        <S.GamesContainer>
            {games?.map((game) => {
                return <GameCard game={game} />
            })}
        </S.GamesContainer>
    )
}
