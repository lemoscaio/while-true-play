import React from "react"
import * as S from "../styles/styles"

export default function SearchBar(props) {
    const { gameQuery, setGameQuery } = props
    return (
        <>
            <S.SearchBar>
                <label>
                    <S.MagnifyingGlassIcon />
                    <S.SearchBarInput
                        type="text"
                        value={gameQuery}
                        placeholder="Search store"
                        onChange={(e) => setGameQuery(e.target.value)}
                    />
                    {gameQuery && (
                        <S.CleanIcon onClick={() => setGameQuery("")} />
                    )}
                </label>
            </S.SearchBar>
        </>
    )
}
