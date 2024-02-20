import { TextField } from "@mui/material"
import styled from "styled-components"
import { Box } from "./Box"


type DataEntryType = {
    max: number
    start: number
    setStartValue: (e: any) => void
    setMaxValue: (e: any) => void
    isError: boolean
}


export const DataEntry = ({ max, start, setMaxValue, setStartValue, isError }: DataEntryType) => {


    return (
        <Box height={'250'} bottom="20">
            <Wrapper>
                <WrapperField>
                    <Text>max value</Text>
                    <TextField error = {isError} onChange={setMaxValue} value={max} id="outlined-basic" label="Outlined" variant="outlined" type='number' size="small" />
                </WrapperField>
                <WrapperField>
                    <Text>start value</Text>
                    <TextField error = {isError} onChange={setStartValue} value={start} id="outlined-basic" label="Outlined" variant="outlined" type='number' size="small" />
                </WrapperField>
            </Wrapper>
        </Box>
    )


}



const Text = styled.span`
 color: blue;
 font-size: 25px;
 
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100%;
`


export const WrapperField = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: baseline;
 font-weight: 700;
`