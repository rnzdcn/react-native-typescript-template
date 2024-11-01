import './global.css'
import { StatusBar } from 'expo-status-bar'
import Providers from './src/providers'

export default function App() {
  return (
    <Providers>
      <StatusBar style="auto" />
    </Providers>
  )
}
