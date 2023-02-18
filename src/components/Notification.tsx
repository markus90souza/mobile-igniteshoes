import {
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Icon,
  Pressable,
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  onClose: () => void
}

export function Notification({ title, onClose }: Props) {
  const { navigate } = useNavigation()

  const handleNotification = () => {
    navigate('details', {
      productId: '7',
    })
    onClose()
  }
  return (
    <Pressable
      w="full"
      p={4}
      pt={12}
      bgColor="gray.800"
      position="absolute"
      top={0}
      onPress={handleNotification}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Icon
          as={Ionicons}
          name="notifications-outline"
          size={5}
          color="white"
          mr={2}
        />

        <Text fontSize="md" color="white" flex={1}>
          {title}
        </Text>

        <IconButton
          variant="unstyled"
          _focus={{ borderWidth: 0 }}
          icon={<CloseIcon size="3" />}
          _icon={{ color: 'white' }}
          color="white"
          onPress={onClose}
        />
      </HStack>
    </Pressable>
  )
}
