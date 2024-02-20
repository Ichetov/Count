import styled from "styled-components";

type BoxType = {
    children: React.ReactNode;
    width?: string
    height?: string 
    bottom?: string
}


export const Box = ({ children, width, height, bottom }: BoxType) => {
    return (
        <BoxStyled $bottom = {bottom} width = {width} height = {height}>
            {children}
        </BoxStyled>
    )
}

export const BoxStyled = styled.div<{width: string | undefined, height: string | undefined, $bottom: string | undefined}>`
width: ${({width})=> width ? width + 'px' : 100 + '%'};
height: ${({height})=> height ? height + 'px' : 100 + '%'};
border: 3px solid blue;
border-radius: 20px;
padding: 20px;
box-sizing: border-box;
margin-bottom: ${({$bottom})=> $bottom || 0}px;
`