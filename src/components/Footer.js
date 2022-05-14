import React from "react"

import * as S from "./../styles/styles.js"
import storeLogo from "./../assets/logo.png"

export default function Footer() {
    return (
        <>
            <S.Footer>
                <S.FooterInfoContainer>
                    <S.FooterInfo>
                        <a
                            target="_blank"
                            href="https://github.com/Jackie-Moraes/projeto14-while_true_play-front"
                            rel="noreferrer"
                        >
                            Submit your game
                        </a>
                    </S.FooterInfo>
                    <S.FooterInfo>
                        <img src={storeLogo} alt="" />
                    </S.FooterInfo>
                    <S.FooterInfo>
                        <a
                            target="_blank"
                            href="https://github.com/Jackie-Moraes/projeto14-while_true_play-front"
                            rel="noreferrer"
                        >
                            Contact us
                        </a>
                    </S.FooterInfo>
                </S.FooterInfoContainer>
                <S.FooterDisclaimer>
                    <p>This is an educational project</p>
                    <p>
                        Made by{" "}
                        <a
                            target="_blank"
                            href="https://github.com/lemoscaio"
                            rel="noreferrer"
                        >
                            Caio Lemos
                        </a>{" "}
                        and{" "}
                        <a href="https://github.com/Jackie-Moraes">
                            Jackie Moraes
                        </a>
                    </p>
                    <p>Part of Driven Education Bootcamp</p>
                </S.FooterDisclaimer>
            </S.Footer>
        </>
    )
}
