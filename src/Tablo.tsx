import styled from 'styled-components'
import { Box } from './Box'
import { Wrapper } from './DataEntry'
import s from './Tablo.module.css'


type TabloType = {
    value: number
    max: number
    isVal: boolean
    isError: boolean
}

export const Tablo = ({ value, max, isVal, isError }: TabloType) => {


    return (
        <Box height={'250'} bottom="20">
            <Wrapper>
                <div>{isError ? <Value color = {'red'}>Incorrent value!</Value> : isVal ?  <Value color = 'blue'>Enter values and press 'set'</Value>   : <Value color = {value === max ? 'red' : 'blue'}>{value}</Value> }</div>
            </Wrapper>
        </Box>
    )
}


const Value = styled.div<{color: string}>`
color: ${({color})=> color};
font-size: 29px;
font-weight: 500;
`