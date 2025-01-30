import { useEffect, useRef, useState } from "react"


enum Operator {
    add = '+',
    subtract = '-',
    mutiply = 'X',
    divide = '÷',
}

export const UseCalculator = () => {

    const [number, setNumber] = useState<string>("0");
    const [formula, setFormula] = useState('')
    const [prevNumber, setPrevNumber] = useState("0");

    const lastOperation = useRef<Operator>()

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number)
        }

    }, [number])

    useEffect(() => {
        const result = calculateSubResult();
        setPrevNumber(`${result}`)
    }, [formula])
    

    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
        setFormula('');
        lastOperation.current = undefined;
    }

    const deleteOperation = () => {

        if ((number.length === 2 && number.includes('-'))) {
            return setNumber('0')
        }

        if (number.length === 1) {
            return setNumber('0')
        }

        return setNumber(number.slice(0, -1))
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        setNumber('-' + number);
    }

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0' || number.startsWith('-0'))) {
            //punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString)
            }
            //evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }
            //evaluar si es diferente de cero, no hay punto, y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }
            //evitar 0000
            if (numberString === '0' && !number.includes('.')) { return; }

            return setNumber(number + numberString)
        }
        setNumber(number + numberString)
    }

    const setLastNumber = () => {
        calculateResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.mutiply;
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    const subtrackOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }


    const calculateResult = () => {
        const result = calculateSubResult()
        setFormula(`${result}`)
        lastOperation.current = undefined;
        setPrevNumber('0');
    }

    const calculateSubResult = ():number => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firstValue); //NaN
        const num2 = Number(secondValue); //NaN
        if (isNaN(num2)) return num1;
        switch (operation) {
            case Operator.add:
                return num1 + num2
            case Operator.subtract:
                return num1 - num2
            case Operator.mutiply:
                return num1 * num2
            case Operator.divide:
                return num1 / num2
            default:
                throw new Error('operacion no implemented');
        }
    }
    return {
        //properties
        number,
        prevNumber,
        formula,
        //methods
        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        divideOperation,
        subtrackOperation,
        addOperation,
        multiplyOperation,
        calculateResult
    }
}
