import React from "react"
import * as S from "../styles/styles"

export default function LabelSectionTitle(props) {
    const { gamesAmount } = props

    return (
        <>
            <S.Label>{props.children}</S.Label>
        </>
    )
}
