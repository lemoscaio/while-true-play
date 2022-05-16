import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {
    BsFillExclamationTriangleFill,
    BsCheckCircleFill,
} from "react-icons/bs"
import axios from "axios"

import * as S from "./../styles/styles.js"
import StoreLogo from "./../assets/logo.png"

export default function SignUp() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const URL = `${process.env.REACT_APP_API_URL}/sign-up`

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState()
    const [trackingPassword, setTrackingPassword] = useState(false)
    const [matchingPassword, setMatchingPassword] = useState(false)

    const [requestMessage, setRequestMessage] = useState({})

    useEffect(() => {
        if (token) {
            navigate("/")
            return
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        const promise = axios.post(URL, {
            name,
            email,
            password,
        })

        promise.catch((error) => {
            setRequestMessage(error)
        })

        promise.then((response) => {
            setRequestMessage(response)
            setTimeout(() => {
                navigate("/sign-in")
            }, 1000)
        })
    }

    function startTrackingPassword(e) {
        if (e.target.name === "password") {
            setPassword(e.target.value)
            if (e.target.value === passwordConfirmation)
                setMatchingPassword(true)
            else setMatchingPassword(false)
        }
        if (e.target.name === "password-confirmation") {
            setPasswordConfirmation(e.target.value)
            e.target.value.length > 0
                ? setTrackingPassword(true)
                : setTrackingPassword(false)
            if (e.target.value === password) setMatchingPassword(true)
            else setMatchingPassword(false)
        }
    }

    function isPasswordMatching() {
        if (trackingPassword && matchingPassword) {
            return (
                <S.PasswordMatchingMessage>
                    <BsCheckCircleFill /> The password matches!
                </S.PasswordMatchingMessage>
            )
        } else if (trackingPassword && !matchingPassword) {
            return (
                <S.PasswordMatchingMessage>
                    <BsFillExclamationTriangleFill /> Both password fields must
                    match!
                </S.PasswordMatchingMessage>
            )
        } else {
            return <></>
        }
    }

    function setButtonDisabled() {
        return !name || !email || !matchingPassword ? true : false
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
            case 409:
                errorMessage = "E-mail already registered!."
                break
            case 422:
                errorMessage =
                    "Both e-mail and password need to be filled in correctly."
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
                    "Success! You'll be redirected to login page now."
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
                <Link to="/">Back to Store</Link>
            </S.BackToStoreButton>
            <S.AuthHeader>
                <img src={StoreLogo} alt="Logo da loja While True Play"></img>
            </S.AuthHeader>

            <S.AuthForm onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Username"
                    pattern="^[\wãÃÇ-Üá-ú]{1,}$"
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
                    name="password"
                    placeholder="Password"
                    pattern="^\S{6,20}$"
                    title="Your password must be at least 6 characters long and it may contain especial characters"
                    onChange={(e) => startTrackingPassword(e)}
                ></input>
                <input
                    required
                    type="password"
                    name="password-confirmation"
                    placeholder="Confirm password"
                    onChange={(e) => startTrackingPassword(e)}
                ></input>
                {isPasswordMatching()}
                {setErrorContainerContent()}
                {setSuccessContainerContent()}
                <S.SubmitButton disabled={setButtonDisabled()} type="submit">
                    Sign Up
                </S.SubmitButton>
                <Link to="/sign-in">
                    Already registered? Sign in to your account.
                </Link>
            </S.AuthForm>
        </S.AuthContainer>
    )
}
