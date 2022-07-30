import styled from "styled-components"

export const BoxContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:10px;
`
export const FormContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15,15,15,0.2)
`
export const MutedLink = styled.a`
    font-size: 10px;
    color: rgba(150,150,150,0.9);
    font-weight:500;
    text-decoration:none;`

export const BoldLink = styled.a`
font-size: 11px;
color: orange;
font-weight:500;
text-decoration:none;
margin:0;`

export const Input = styled.input`
    height:42px;
    width:100%;
    outline:none;
    border: 1px solid rgba(200,200,200,0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    font-size: 10px;
    transition: all 200ms ease-in-out;
    &:placeholder{
        color: rgba(200,200,200,1)
    }
    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4)
    }
    &:focus{
        outline:none;
        border-bottom: 2px solid orange;
    }`

export const SumbitButton = styled.button`
    width: 100%;
    padding:11px; 40%;
    color: #fff;
    font-size: 15px;
    font-weight:600;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition: all, 240ms ease-in-out;
    background:orange;
    &hover{
        filter:brightness(1.03);
    }`