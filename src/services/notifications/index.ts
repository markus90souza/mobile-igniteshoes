import OneSignal from 'react-native-onesignal'

export const createTagNotificationsByEmail = (email: string) => {
  OneSignal.sendTag('user_email', email)
}

export const createTagsNotifications = (name: string, email: string) => {
  OneSignal.sendTags({
    user_name: name,
    user_email: email,
  })
}

export const deleteTag = (name: string) => {
  OneSignal.deleteTag(name)
}

export const tagCartUpdate = (count: string) => {
  OneSignal.sendTag('cart_items_count', count)
}
