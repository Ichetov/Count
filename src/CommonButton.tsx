
import styled from 'styled-components'

type CommonButtonType = {
    text: string
    colback: ()=> void
    disabled?: boolean
    backgroundColor?: string
    fontSize?: number | string
}


export const CommonButton = ({text, colback, disabled, backgroundColor, fontSize}: CommonButtonType) => {
    return (
     <ButtonStyled  $fontSize = {fontSize} $backgroundColor = {backgroundColor} disabled = {disabled} onClick={colback}>{text}</ButtonStyled>
 )
}


const ButtonStyled = styled.button<{$backgroundColor: string | undefined, $fontSize: string | number | undefined}>`
  border-radius: 20px;
  width: 50px;
  background-color: ${({$backgroundColor})=> $backgroundColor ?? 'white'};
  font-size: ${({$fontSize})=> $fontSize ?? 15}px;
`