import { PaperProvider } from 'react-native-paper'
import { ReactNode } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import MyComponent from '../components/bottom-navigation'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView className={'flex-1'}>
          {children}

          <MyComponent />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  )
}
