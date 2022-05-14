import styled from "styled-components"
import { IoMdClose, IoMdOpen } from "react-icons/io"
import { BiSearchAlt2 } from "react-icons/bi"
import { BsCartPlus, BsCartCheck } from "react-icons/bs"

export const Container = styled.main`
    width: 100%;
    margin: 0 auto;
    min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
    background-color: ${({ theme }) => theme.colors.pageBackgroundColor};
`

// MAIN PAGE

export const MainPage = styled.section`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 15px 0 20px;
`

export const GameHighlight = styled.article`
    /* position: relative; */
    height: 240px;
    width: 100%;

    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

    background-color: white;

    color: white;

    & h5,
    & p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }
`

export const GameInfoContainer = styled.div`
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 15px;
`

export const HighlightGameTitle = styled.h5`
    margin: 0;
    padding: 0;

    font-size: 16px;
    font-weight: 500;
`

export const GamePriceAndCartContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-top: 10px;
`

export const GamePriceContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 5px;
`

export const AddToCartButton = styled.button`
    padding: 7px 10px 7px 14px;

    background-image: ${({ theme }) => theme.colors.buttonBackgroundColor};
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    font-weight: 600;
`

export const AddToCartIcon = styled(BsCartPlus)`
    position: relative;
    transform: translate(-30%, 10%);
`

export const CheckoutIcon = styled(BsCartCheck)`
    position: relative;
    transform: translate(-30%, 10%);
`

export const GamesCarousel = styled.div`
    color: white;

    height: 200px;

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    & div {
        height: 100%;
        background-size: cover;
        background-position: center center;
    }

    & button {
        z-index: 2 !important;
    }
`

export const CarouselInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 10px 5px;

    & div {
        display: flex;
        align-items: flex-end;
    }
`

export const CarouselGameTitle = styled(HighlightGameTitle)``

export const CarouselPrice = styled.p`
    font-weight: 600;
    margin: 5px;
`

export const BrowseGamesLink = styled.button`
    height: 100%;
    width: 100%;

    background-color: transparent;

    padding: 15px;

    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorderColor};

    a {
        font-weight: 700;
        font-size: 18px;

        text-decoration: none;

        &:visited {
            color: black;
        }
    }
`

export const OpenLinkIcon = styled(IoMdOpen)`
    position: relative;
    transform: translate(-30%, 15%);
`

// BROWSE GAMES PAGE

export const BrowseGamesPage = styled(MainPage)``

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
    font-family: ${({ theme }) => theme.colors.mainFont};
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
    margin: 20px auto 30px;
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

export const DiscountPrice = styled(CarouselPrice)``

// FOOTER

export const Footer = styled.footer`
    min-height: 50px;
    color: ${({ theme }) => theme.colors.footerFontColor};
    background-color: ${({ theme }) => theme.colors.footerBackgroundColor};

    padding: 15px 20px;

    font-size: 14px;

    box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.2);

    & img {
        width: 130px;
        margin: 0;
        padding: 0;
        /* transform: translateY(-75%); */
    }

    & a {
        color: ${({ theme }) => theme.colors.footerFontColor};
        text-decoration: none;
        text-align: center;
        font-weight: 600;

        &:visited {
            color: inherit;
        }
    }
`

export const FooterInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`

export const FooterInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterDisclaimer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid ${({ theme }) => theme.colors.footerBorderColor};
    & > p {
        font-size: 12px;
        margin: 5px 0 0 0;
    }
`
