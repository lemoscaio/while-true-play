import React from "react"
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"

import * as S from "./../styles/styles.js"
import GameCarousel from "./GameCarousel.js"

export default function GamesCarousel(props) {
    const fiveMostRecent = props.fiveMostRecent

    return (
        <S.GamesCarousel>
            {fiveMostRecent ? (
                <Slide easing="ease">
                    {fiveMostRecent.map((game, index) => {
                        return (
                            <GameCarousel
                                key={index}
                                game={game}
                            ></GameCarousel>
                        )
                    })}
                </Slide>
            ) : (
                <></>
            )}
        </S.GamesCarousel>
    )
}
