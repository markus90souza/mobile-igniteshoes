import { Platform, StatusBar } from 'react-native'
import OneSignal from 'react-native-onesignal'
import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Routes } from './src/routes'

import { THEME } from './src/theme'
import { Loading } from './src/components/Loading'

import { CartContextProvider } from './src/contexts/CartContext'
import { createTagsNotifications } from './src/services/notifications'

const OnesignalAppId =
  Platform.OS === 'ios' ? '' : '0f4aef17-e7f7-4b25-9eb3-c40a962d5e18'

OneSignal.setAppId(OnesignalAppId)
OneSignal.setEmail('markus90souza@gmail.com')

OneSignal.promptForPushNotificationsWithUserResponse()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  createTagsNotifications('Marcos de souza', 'markus90souza@gmail.com')

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  )
}
