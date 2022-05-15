import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import * as S from "./../styles/styles.js"
import StoreLogo from "./../assets/logo.png"

export default function SignUp() {
    const URL = `${process.env.REACT_APP_API_URL}/sign-up`

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

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
            navigate("/sign-in")
        })
    }

    return (
        <S.MainContainer>
            <S.SignUpHeader>
                <img src={StoreLogo} alt="Logo da loja While True Play"></img>
            </S.SignUpHeader>

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
        </S.MainContainer>
    )
}
