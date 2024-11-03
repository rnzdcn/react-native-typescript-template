import LoginScreen from '../screens/LoginScreen'
import MainTabs from './PublicUser/Tab'
import { Stack } from '../constants/navigator'

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default RootNavigator
