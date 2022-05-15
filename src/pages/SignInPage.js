import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"

import * as S from "./../styles/styles.js"
import StoreLogo from "./../assets/logo.png"
import { UserContext } from "../contexts/UserContext"

export default function SignUp() {
    const URL = `${process.env.REACT_APP_API_URL}/sign-in`

    const { userInfo, setUserInfo } = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    function blockForValidation(e) {
        e.preventDefault()
        setDisabled(true)
        validateLogin()
    }

    function validateLogin() {
        const promise = axios.post(URL, {
            email,
            password,
        })

        promise.catch((e) => {
            alert("Algo deu errado! Tente novamente mais tarde.")
            setDisabled(false)
        })

        promise.then((response) => {
            alert("Sucesso ao logar!")
            const { token } = response.data
            const { name, email, image, games } = response.data.user
            setUserInfo({ ...userInfo, name, email, image, games, token })
            setDisabled(false)
            navigate("/")
        })
    }

    return (
        <S.MainContainer>
            <S.SignInHeader>
                <img src={StoreLogo} alt="Logo da loja While True Play"></img>
            </S.SignInHeader>

            <form
                onSubmit={blockForValidation}
                style={disabled ? { opacity: "0.5" } : {}}
                disabled={disabled ? "disabled" : ""}
            >
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
                <button type="submit">Sign In</button>
            </form>

            <Link to="/sign-up">Not registered yet? Create a new account.</Link>
        </S.MainContainer>
    )
}
