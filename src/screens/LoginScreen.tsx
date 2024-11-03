import { View } from 'react-native'
import { Button } from 'react-native-paper'

const LoginScreen = ({ navigation }: { navigation: any }) => {

  const handleOnPress = () => {
    navigation.navigate('Main')
  }

  return (
    <View className={'flex-1 justify-center items-center'}>
      <Button onPress={handleOnPress} className={'text-4xl'}>Login</Button>
    </View>
  )
}

export default LoginScreen
