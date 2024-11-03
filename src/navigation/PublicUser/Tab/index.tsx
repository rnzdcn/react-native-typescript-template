import HomeStackScreen from '../Stack/HomeStackScreen'
import ProfileStackScreen from '../Stack/ProfileStackScreen'
import { Tab } from '../../../constants/navigator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        navigationKey={'HomeStackScreen'}
        name={'HomeStackScreen'}
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: (props) =>
            props.focused
              ? <Icon name={'home'} size={24} />
              : <Icon name={'home-outline'} size={24} />,
        }}
      />

      <Tab.Screen
        navigationKey={'ProfileStackScreen'}
        name={'ProfileStackScreen'}
        component={ProfileStackScreen}
        options={{
          title: 'Profile',
          tabBarIcon: (props) =>
            props.focused
              ? <Icon name={'account'} size={24}/>
              : <Icon name={'account-outline'} size={24} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabs
