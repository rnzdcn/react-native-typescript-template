import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from '../navigation'

const queryClient = new QueryClient()

export default function Providers() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={'flex-1'}>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <NavigationContainer>
              <RootNavigator/>
            </NavigationContainer>

            <StatusBar style="auto" />
          </PaperProvider>
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
