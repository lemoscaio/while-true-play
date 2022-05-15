import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        image: "",
        games: [],
        token: "",
        gamesInCart: [],
    })

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {props.children}
        </UserContext.Provider>
    )
}
