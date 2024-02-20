import { Button } from "@mui/material"
import styled from "styled-components"
import { Box } from "./Box"


type ButtonsCustomizationType = {
    addValues: ()=> void
    isError: boolean
    isDisable: boolean
}


export const ButtonsCustomization = ({addValues, isError, isDisable}: ButtonsCustomizationType) => {

    return (
        <Box height={'85'}>
            <Wrapper>
                <Button onClick={addValues} size = 'large' disabled={isError || isDisable} variant="contained">Set</Button>
            </Wrapper>
        </Box>
    )
}



const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`