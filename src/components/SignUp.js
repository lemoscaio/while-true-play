import React from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"

import StoreLogo from "./../assets/logo.png"
import UserContext from "../contexts/UserContext"

export default function SignUp() {
    const URL = `${process.env.REACT_APP_API_URL}/sign-up`

    const { userInfo, setUserInfo } = useContext(UserContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [disabled, setDisabled] = useState(false)

    const navigator = useNavigate()

    function blockForValidation(e) {
        e.preventDefault()
        setDisabled(true)
        if (password !== passwordConfirmation) {
            alert("As senhas devem ser iguais! Tente novamente.")
            setDisabled(false)
        } else {
            validateRegister()
        }
    }

    function validateRegister() {
        const promise = axios.post(URL, {
            name,
            email,
            password,
        })

        promise.catch((e) => {
            alert("Algo deu errado! Tente novamente mais tarde.")
            setDisabled(false)
        })

        promise.then(() => {
            alert("Sucesso ao criar a conta!")
            setDisabled(false)
            navigator("/")
        })
    }

    return (
        <MainContainer>
            <SignUpHeader>
                <img src={StoreLogo} alt="Logo da loja While True Play"></img>
            </SignUpHeader>

            <form
                onSubmit={blockForValidation}
                style={disabled ? { opacity: "0.5" } : {}}
                disabled={disabled ? "disabled" : ""}
            >
                <input
                    required
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    required
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                    required
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>

            <Link to="/sign-in">
                Already registered? Sign in to your account.
            </Link>
        </MainContainer>
    )
}

const MainContainer = styled.main`
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
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 14px;
    }
`

const SignUpHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    img {
        width: 230px;
    }
`
