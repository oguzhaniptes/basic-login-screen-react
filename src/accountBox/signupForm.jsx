import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, Input, BoldLink, SumbitButton } from "./common";
import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext)

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" ></Input>
                <Input type="email" placeholder="Email"></Input>
                <Input type="password" placeholder="Password" ></Input>
                <Input type="password" placeholder="Confirm password" ></Input>
                <Input type="date"></Input>
            </FormContainer>
            <Marginer direction="vertical" margin="0.8em"></Marginer>
            <SumbitButton type="submit">Create accound</SumbitButton>
            <Marginer direction="vertical" margin="0.2em"></Marginer>
            <MutedLink href="#">Already have an account? 
                <BoldLink href="#" onClick={switchToSignin}> Sing In</BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}