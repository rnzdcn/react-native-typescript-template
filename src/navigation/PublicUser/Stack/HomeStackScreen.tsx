import HomeScreen from '../../../screens/HomeScreen'
import ProfileScreen from '../../../screens/ProfileScreen'
import { Stack } from '../../../constants/navigator'

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{ navigationBarHidden: true }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeStackScreen
