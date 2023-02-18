import { useEffect, useState } from 'react'
import { useTheme } from 'native-base'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import OneSignal, {
  NotificationReceivedEvent,
  OSNotification,
} from 'react-native-onesignal'
import { AppRoutes } from './app.routes'

import { Notification } from '@components/index'

const linking = {
  prefixes: [
    'com.rockske8er.igniteshoes://',
    'igniteshoes://',
    'exp+igniteshoes:///',
  ],
  config: {
    screens: {
      details: {
        path: 'details/:productId',
        parse: {
          productId: (productId: string) => productId,
        },
      },
    },
  },
}

export function Routes() {
  const { colors } = useTheme()
  const [notification, setNotification] = useState<OSNotification>()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[700]

  useEffect(() => {
    const unsubscriber = OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent: NotificationReceivedEvent) => {
        const response = notificationReceivedEvent.getNotification()
        setNotification(response)
      },
    )

    return () => unsubscriber
  }, [])
  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />

      {notification?.title && (
        <Notification
          title={notification.title}
          onClose={() => setNotification(undefined)}
        />
      )}
    </NavigationContainer>
  )
}
