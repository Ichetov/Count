import { CommonButton } from "./CommonButton"
import s from './Buttons.module.css'
import { Box } from "./Box"
import { Button } from "@mui/material"
import styled from "styled-components"


type ButtonsType = {
    increaseValue: () => void
    resetValue: () => void
    value: number
    max: number
    start: number
    isError: boolean
    isVal: boolean
}

export const Buttons = ({ increaseValue, resetValue, value, max, start, isError, isVal }: ButtonsType) => {
    return (
        <Box height={'85'}>
            <Wrapper>
                <Button disabled = {value === max || isError || isVal} onClick={increaseValue} size = 'large' variant="contained">inc</Button>
                <Button disabled = {value === start || isError || isVal} onClick={resetValue} size = 'large' variant="contained">reset</Button>
            </Wrapper>
        </Box>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
`