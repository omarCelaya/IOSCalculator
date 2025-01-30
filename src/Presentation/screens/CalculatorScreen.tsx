import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import { CalculatorBottom } from '../Components/CalculatorBottom'
import { UseCalculator } from '../Hooks/UseCalculator'

export const CalculatorScreen = () => {

    const { number, prevNumber, formula, buildNumber, toggleSign, clean, deleteOperation, divideOperation,
        subtrackOperation,
        addOperation,
        multiplyOperation,
        calculateResult

    } = UseCalculator();

    return (
        <View style={styles.calculatorContainer} >
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }} >
                <Text
                    adjustsFontSizeToFit
                    style={styles.mainResult}
                    numberOfLines={1}
                >
                    {formula}
                </Text>
                {(formula === prevNumber) ?
                    <Text
                        style={styles.subResult}
                    ></Text> :
                    (<Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.subResult}
                    >
                        {(prevNumber === '0' ? ' ' : prevNumber)}
                    </Text>)}
            </View>
            <View style={styles.row} >
                <CalculatorBottom onPress={clean} label='C' color={colors.lightGray} blackText />
                <CalculatorBottom onPress={toggleSign} label='+/-' color={colors.lightGray} blackText />
                <CalculatorBottom onPress={deleteOperation} label='del' color={colors.lightGray} blackText />
                <CalculatorBottom onPress={divideOperation} label='÷' color={colors.orange} />
            </View>
            <View style={styles.row} >
                <CalculatorBottom onPress={() => buildNumber("7")} label='7' />
                <CalculatorBottom onPress={() => buildNumber("8")} label='8' />
                <CalculatorBottom onPress={() => buildNumber("9")} label='9' />
                <CalculatorBottom onPress={multiplyOperation} label='X' color={colors.orange} />
            </View>
            <View style={styles.row} >
                <CalculatorBottom onPress={() => buildNumber("4")} label='4' />
                <CalculatorBottom onPress={() => buildNumber("5")} label='5' />
                <CalculatorBottom onPress={() => buildNumber("6")} label='6' />
                <CalculatorBottom onPress={subtrackOperation} label='-' color={colors.orange} />
            </View>
            <View style={styles.row} >
                <CalculatorBottom onPress={() => buildNumber("1")} label='1' />
                <CalculatorBottom onPress={() => buildNumber("2")} label='2' />
                <CalculatorBottom onPress={() => buildNumber("3")} label='3' />
                <CalculatorBottom onPress={addOperation} label='+' color={colors.orange} />
            </View>
            <View style={styles.row} >
                <CalculatorBottom onPress={() => buildNumber("0")} label='0' doblesize={true} />
                <CalculatorBottom onPress={() => buildNumber(".")} label='.' />
                <CalculatorBottom onPress={calculateResult} label='=' color={colors.orange} />
            </View>
        </View>
    )
}
