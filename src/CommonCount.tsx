import styled from "styled-components"
import { Count } from "./Count"
import { CustomizationCount } from "./CustomizationCount"
import { useEffect, useState } from "react"

export type CountStateType = {
        max: number
        start: number
    }


export const CommonCount = () => {

    const [count, setCount] = useState<CountStateType>({
        max: 0,
        start: 0
    })

    const [isVal, setIsVal] = useState(false)

    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (count.max < 0 || count.start < 0 || count.max === count.start || count.max < count.start) {
            setIsError(true)
        } else {
            setIsError(false)
        }
    }, [count.max, count.start])

    function setValues(maxValue: number, startValue: number) {
        setCount({ ...count, max: maxValue, start: startValue })
        setIsVal(false)
    }


    return (
        <CommonCountStyled>
            <CustomizationCount setCount = {setCount} count={count} setIsError={setIsError} setIsVal={setIsVal} isVal={isVal} isError={isError} setValues={setValues} />
            <Count isError={isError} isVal={isVal} count={count} />
        </CommonCountStyled>
    )

}


const CommonCountStyled = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
justify-content: space-between;
`