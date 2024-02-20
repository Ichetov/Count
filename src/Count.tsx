import { Buttons } from "./Buttons"
import { Tablo } from "./Tablo"
import { useEffect, useState } from "react"
import { Box } from "./Box"


type CountObjType = {
    max: number,
    start: number
}

export type CountType = {
    count: CountObjType
    isVal: boolean
    isError: boolean
}


export const Count = ({ count, isVal, isError }: CountType) => {

    useEffect(() => {
        setValue(count.start)
    }, [count.start])
    //   Функция?

    const [value, setValue] = useState<number>(count.start)


    const increaseValue = () => {
        if (value < count.max) {
            setValue(value + 1)
        }
    }
    const resetValue = () => {
        setValue(count.start)
    }

    return (
        <Box width={'450'} height={'400'}>
            <Tablo isError={isError} isVal={isVal} max={count.max} value={value} />
            <Buttons isVal={isVal} isError={isError} start={count.start} max={count.max} resetValue={resetValue} increaseValue={increaseValue} value={value} />
        </Box>
    )
}