import React from "react"
import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import StoreLogo from "./../assets/logo.png"

import UserContext from "../contexts/UserContext"

export default function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext)

    return (
        <Nav>
            <img src={StoreLogo} alt="While True Play Store logo"></img>
            <h1>Salve</h1>
        </Nav>
    )
}

const Nav = styled.header`
    width: 100vw;
    height: 50px;
    position: fixed;

    img {
        width: 34px;
        height: 34px;
    }
`
