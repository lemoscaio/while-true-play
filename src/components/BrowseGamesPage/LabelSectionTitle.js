import React from "react"
import * as S from "../../styles/styles"

export default function LabelSectionTitle(props) {
    const { gamesAmount } = props

    return (
        <>
            <S.Label>PC games / All Games ({gamesAmount})</S.Label>
        </>
    )
}
