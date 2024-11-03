import ProfileScreen from '../../../screens/ProfileScreen'
import { Stack } from '../../../constants/navigator'

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName={'ProfileScreen'} screenOptions={{ navigationBarHidden: true }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default ProfileStackScreen
