import { StatusBar, View } from 'react-native'
import { CalculatorScreen } from './Presentation/screens/CalculatorScreen'
import { styles } from './config/theme/app-theme'

export const App = () => {
  return (
    <View style={styles.background} >
      <StatusBar
      barStyle={'light-content'}
      backgroundColor={'black'}
      />
      <CalculatorScreen/>
    </View>
  )
}
