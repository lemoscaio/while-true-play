import React from "react"
import * as S from "../styles/styles"
import { BiSearchAlt2 } from "react-icons/bi"

export default function SearchBar() {
    return (
        <>
            <S.SearchBar>
                <label>
                    <BiSearchAlt2 />
                    <S.SearchBarInput type="text" placeholder="Search store" />
                </label>
            </S.SearchBar>
        </>
    )
}
