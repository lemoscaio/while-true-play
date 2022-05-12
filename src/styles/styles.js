import styled from "styled-components"
import { IoMdClose } from "react-icons/io"
import { BiSearchAlt2 } from "react-icons/bi"

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
    background-color: ${({ theme }) => theme.colors.pageBackgroundColor};
`

export const BrowseGamesPage = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 15px 0 20px;
`

export const SearchBar = styled.div`
    position: relative;

    width: 100%;

    margin: 0 auto;
    padding: 5px 10px;

    background-color: ${({ theme }) => theme.colors.inputBackground};

    border: 2px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-radius: 25px;
`
export const SearchBarInput = styled.input`
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-size: 14px;

    margin-left: 5px;

    background-color: ${({ theme }) => theme.colors.inputBackground};

    border: none;

    &:focus {
        outline: none;
    }
`

export const MagnifyingGlassIcon = styled(BiSearchAlt2)`
    position: relative;
    transform: translateY(+20%);
    
    cursor: pointer;
`

export const CleanIcon = styled(IoMdClose)`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);

    cursor: pointer;
`

export const Label = styled.h3`
    width: 100%;

    margin: 15px auto;
    padding: 0 0 15px 0;

    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
`

export const GamesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    width: 100%;
    margin: 20px auto 0;
`

export const GameCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 230px;
    background-color: ${({ theme }) => theme.colors.gameCardBackgroundColor};
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    & > div {
        display: flex;
        height: 55%;
        flex-direction: column;
        justify-content: space-between;
    }

    & img {
        height: 45%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }
`

export const GameTitle = styled.h5`
    margin: 0;
    padding: 10px 15px;

    font-size: 16px;
    font-weight: 500;
`

export const ValuesContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 15px;
    gap: 5px;

    font-weight: 600;
`

export const DiscountLabel = styled.p`
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.colors.discountLabelBackground};
    padding: 5px;
    margin: 0;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.discountLabelFontColor};
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    font-weight: 500;

    p {
        padding: 0;
        margin: 0;
    }
`

export const OriginalPrice = styled.p`
    font-size: 12px;
    text-decoration: line-through;
`

export const DiscountPrice = styled.p`
    font-weight: 600;
`
