import React from "react"
import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { BsCartPlus } from "react-icons/bs"

import UserContext from "../contexts/UserContext"

export default function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext)

    return (
        <Nav>
            <h1>Salve</h1>
        </Nav>
    )
}

const Nav = styled.header`
    width: 100vw;
    height: 50px;
    position: fixed;
`
