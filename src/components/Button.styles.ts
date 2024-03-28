import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface ButtonContainerProps {
  variant: ButtonVariant;

}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green'
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 0.25rem;
  border: none;
  margin: 1rem;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */

  
`