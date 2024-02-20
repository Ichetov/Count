import { DataEntry } from "./DataEntry"
import { ButtonsCustomization } from "./ButtonsCustomization"
import { Box } from "./Box"
import { useEffect, useState } from "react"
import { CountStateType } from "./CommonCount"


type CustomizationCountType = {
    setValues: (valMax: number, valStart: number) => void
    isError: boolean
    isVal: boolean
    setIsVal: (val: boolean) => void
    setIsError: (val: boolean) => void
    count: CountStateType
    setCount: (val: CountStateType) => void
}


export const CustomizationCount = ({ setCount, count, isVal, setIsVal, setValues, isError, setIsError }: CustomizationCountType) => {

    const [isDisable, setIsDisable] = useState(false)

    useEffect(() => {
        let val = localStorage.getItem('values');
        if (val) {
            let value: { max: number, start: number } = JSON.parse(val);
            setValues(value.max, value.start);
            setIsDisable(true)
        }
    }, [])

    function setMaxValue(e: any) {
        setCount({ ...count, max: +e.currentTarget.value })
        checkData()
    }

    function setStartValue(e: any) {
        setCount({ ...count, start: +e.currentTarget.value })
        checkData()
    }

    function checkData() {
        if (!isVal) {
            setIsVal(true)
        }
        if (isDisable) {
            setIsDisable(false)
        }
    }

    function addValues() {
        setValues(+count.max, +count.start);
        setIsDisable(true);
        localStorage.setItem('values', JSON.stringify({ max: count.max, start: count.start }));
    }


    return (
        <Box width={'450'} height={'400'}>
            <DataEntry isError={isError} setStartValue={setStartValue} setMaxValue={setMaxValue} max={count.max} start={count.start} />
            <ButtonsCustomization isDisable={isDisable} isError={isError} addValues={addValues} />
        </Box>
    )
}


