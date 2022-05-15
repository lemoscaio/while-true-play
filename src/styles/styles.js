import styled from "styled-components"
import { IoMdClose, IoMdOpen } from "react-icons/io"
import { BiSearchAlt2 } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { BsCartPlus, BsCartCheck } from "react-icons/bs"
import { TiShoppingCart } from "react-icons/ti"

export const Container = styled.main`
    width: 100%;
    margin: 0 auto;
    min-height: calc(
        100vh - ${({ theme }) => theme.spacing.headerHeight} -
            ${({ theme }) => theme.spacing.footerHeight}
    );
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
    background-color: ${({ theme }) => theme.colors.pageBackgroundColor};

    ${({ menuIsOpen }) => {
        return menuIsOpen ? "position: fixed" : ""
    }};
`

// HEADER

export const Nav = styled.header`
    width: 100vw;
    height: ${({ theme }) => theme.spacing.headerHeight};

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #1a1a1a;
    top: 0;
    z-index: 10;

    font-size: 12px;
    color: #a6a6a6;

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    a:focus {
        outline: none;
        box-shadow: none;
        -webkit-tap-highlight-color: transparent;
    }

    img {
        height: 45px;
        margin-top: 10px;
        object-fit: cover;
    }

    svg {
        font-size: 22px;
        color: #a6a6a6;
    }

    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 7px;
        }
    }
`

export const CartIcon = styled(TiShoppingCart)`
    cursor: pointer;
`

export const SearchIcon = styled(BiSearchAlt2)`
    cursor: pointer;
`

export const CloseIcon = styled(AiOutlineClose)`
    cursor: pointer;
`

export const MenuHeaderContainer = styled.div`
    cursor: pointer;
`

export const SearchContainer = styled.header`
    width: 100vw;
    height: ${({ theme }) => theme.spacing.headerHeight};

    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    background: #1a1a1a;
    z-index: 10;

    font-size: 12px;
    color: #a6a6a6;
    padding: 5px 5px 5px 5px;

    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

    input {
        margin-left: 10px;
        width: 80%;
        border: none;
        border-width: 0px;
        outline: none;
        background: linear-gradient(gray, gray) center bottom 1px /
            calc(100% - 4px) 1px no-repeat;
        color: white;
        font-size: 16px;
    }

    svg {
        margin-left: 5px;
        font-size: 25px;
    }
`

export const NavMenu = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50px;
    background: #1a1a1a;
    z-index: 10;

    padding: 10px 50px;
    opacity: 0.99;

    p {
        font-size: 16px;
        color: white;
        font-weight: 300;
    }

    a {
        text-decoration: none;
    }
`

export const ProfileContainer = styled.section`
    position: absolute;
    bottom: 60px;
    left: 0;

    width: 100vw;
    height: 80px;
    padding: 30px 50px;
    border-top: 1px solid gray;
    text-align: center;

    h1 {
        font-size: 16px;
        color: #cb96e6;
        font-weight: 400;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 45px;
    }

    span {
        margin-left: 20px;
        color: white;
        font-weight: 300;
    }
`

// FOOTER

export const Footer = styled.footer`
    min-height: 50px;
    max-height: ${({ theme }) => theme.spacing.footerHeight};
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

// MAIN PAGE

export const MainPage = styled.section`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 15px 0 20px;
`

export const GameHighlight = styled.article`
    height: 240px;
    width: 100%;

    cursor: pointer;

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

    cursor: pointer;

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
    cursor: pointer;
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
        display: block;

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

    cursor: pointer;

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

// GAME PAGE

export const GamePage = styled(MainPage)``

export const GameImagesCarousel = styled.section`
    width: 100%;

    div {
        height: 210px;
        background-size: cover;
        background-position: center center;
    }

    & button {
        z-index: 5 !important;
    }
`

export const TitleContainer = styled.div`
    h1 {
        padding: 5px 0 30px;
        margin: 0;
        font-size: 24px;
        color: #212121;
    }
`

export const BuyContainer = styled.div`
    position: relative;
    width: 100%;
    /* height: 180px; */
    background: #e9e9e9;
    padding: 15px 20px;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 25%);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    span {
        font-size: 16px;
        color: gray;
        text-decoration: line-through;
    }

    h2 {
        position: relative;
        margin: 0;
        color: #404040;
        font-size: 28px;
    }

    button {
        margin-top: 25px;
        width: 100%;
        height: 50px;
        border: 1px solid #96bd27;
        border-radius: 5px;
        border-bottom-color: #69941b;
        border-left-color: #7fa721;
        border-right-color: #7fa721;
        color: #fff;
        background-image: linear-gradient(-180deg, #9fbf00, #80ab00 91%);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
        font-weight: bold;

        cursor: pointer;

        svg {
            margin-right: 10px;
        }
    }
`

export const DiscountLabelBig = styled.div`
    position: absolute;
    top: 15px;
    left: 0;
    width: 35%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #86328a;
    border-radius: 0 5px 5px 0;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
`

export const DescriptionContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid #bfbfbf;

    h3 {
        font-size: 16px;
        margin: 0;
        font-color: #212121;
        font-weight: 500;
    }

    p {
        margin-top: 7px;
        font-size: 14px;
        font-color: #545454;
        font-weight: 300;
        line-height: 17px;
    }
`

export const SimilarProductsContainer = styled.div`
    width: 100%;
    margin-top: 30px;

    h3 {
        font-size: 16px;
        margin: 0;
        font-color: #212121;
        font-weight: 500;
        padding-bottom: 15px;
        border-bottom: 1px solid #bfbfbf;
    }
`

// SIGN-IN PAGE

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background: #612f74;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 100%;
        height: 45px;
        margin-top: 10px;
        padding: 8px;
        outline: none;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        background: #d4d4d4;
    }

    button {
        width: 326px;
        height: 46px;
        border: none;
        background: #bf40bf;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 300;
        font-size: 20px;
        margin-top: 15px;
        margin-bottom: 35px;

        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 14px;
    }
`

export const SignInHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    img {
        width: 230px;
        cursor: pointer;
    }
`

// SIGN-UP PAGES

export const SignUpHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    img {
        width: 230px;
        cursor: pointer;
    }
`
