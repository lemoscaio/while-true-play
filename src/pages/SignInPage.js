import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import {
    BsFillExclamationTriangleFill,
    BsCheckCircleFill,
} from "react-icons/bs"
import axios from "axios"

import * as S from "./../styles/styles.js"
import StoreLogo from "./../assets/logo.png"
import { UserContext } from "../contexts/UserContext"

export default function SignUp() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const URL = `${process.env.REACT_APP_API_URL}/sign-in`

    const { userInfo, setUserInfo } = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [requestMessage, setRequestMessage] = useState({})

    useEffect(() => {
        if (token) {
            navigate("/")
            return
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const lowerCaseEmailSignIn = email.toLowerCase()

        const promise = axios.post(URL, {
            email: lowerCaseEmailSignIn,
            password,
        })

        promise.then((response) => {
            const { token } = response.data
            const { name, email, image, games } = response.data.user
            localStorage.setItem("token", response.data.token)
            setUserInfo({ ...userInfo, name, email, image, games, token })
            setRequestMessage(response)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        })

        promise.catch((error) => {
            setRequestMessage(error)
        })
    }

    function setErrorContainerContent() {
        let errorMessage = ""

        switch (requestMessage.response?.status) {
            case 0:
                errorMessage = "Connection error. Please, try again later."
                break
            case 401:
                errorMessage = "E-mail or password incorrect!"
                break
            case 422:
                errorMessage = "Both e-mail and password need to be filled in."
                break
            case 500:
                errorMessage = "Something went wrong. Please try again later."
                break
            default:
                break
        }
        return errorMessage.length > 0 ? (
            <S.ErrorMessage>
                <BsFillExclamationTriangleFill /> {errorMessage}
            </S.ErrorMessage>
        ) : (
            <></>
        )
    }

    function setSuccessContainerContent() {
        let successMessage = ""

        switch (requestMessage?.status) {
            case 200:
            case 201:
                successMessage =
                    "Success! You'll be redirected back to the store now."
                break
            default:
                break
        }
        return successMessage.length > 0 ? (
            <S.SuccessMessage>
                <BsCheckCircleFill /> {successMessage}
            </S.SuccessMessage>
        ) : (
            <></>
        )
    }

    return (
        <S.AuthContainer>
            <S.BackToStoreButton>
                <Link to="/">&lt; Back to the store</Link>
            </S.BackToStoreButton>
            <S.AuthHeader>
                <img src={StoreLogo} alt="Logo da loja While True Play"></img>
            </S.AuthHeader>

            <S.AuthForm onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                {setErrorContainerContent()}
                {setSuccessContainerContent()}
                <S.SubmitButton type="submit">Sign In</S.SubmitButton>
                <Link to="/sign-up">
                    Not yet registered? Create a new account.
                </Link>
            </S.AuthForm>
        </S.AuthContainer>
    )
}
