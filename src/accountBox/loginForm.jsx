import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SumbitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext)
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"></Input>
                <Input type="password" placeholder="Password" ></Input>
            </FormContainer>
            <Marginer direction="vertical" margin={10}></Marginer>
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.5em"></Marginer>
            <SumbitButton type="submit">Sign In</SumbitButton>
            <Marginer direction="vertical" margin="1.1em"></Marginer>
            <MutedLink href="#">Don't have any account?
                <BoldLink href="#" onClick={switchToSignup}> Sing Up</BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}