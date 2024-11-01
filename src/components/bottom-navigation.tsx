import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import Home from '../screens/Home'
import Message from '../screens/Message'

const MyComponent = () => {
  const [ index, setIndex ] = React.useState(0)

  const [ routes ] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'message', title: 'Message', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    message: Message,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default MyComponent
