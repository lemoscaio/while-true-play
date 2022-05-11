import React from "react"
import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { TiShoppingCart } from "react-icons/ti"
import { BiSearchAlt2 } from "react-icons/bi"
import { AiOutlineMenu } from "react-icons/ai"

import StoreLogo from "./../assets/logo.png"
import UserContext from "../contexts/UserContext"

export default function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext)

    return (
        <Nav>
            <img src={StoreLogo} alt="While True Play Store logo"></img>
            <TiShoppingCart />
            <BiSearchAlt2 />
            <div>
                <AiOutlineMenu />
                <span>MENU</span>
            </div>
        </Nav>
    )
}

const Nav = styled.header`
    width: 100vw;
    height: 50px;
    padding: 5px;

    position: fixed;
    display: flex;
    justify-content: space-between;

    img {
        width: 34px;
        height: 34px;
    }
`
