import { VStack } from 'native-base'

import { ScreenHeader, ItemsCart } from '@components/index'

export function Cart() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Carrinho" />
      <ItemsCart />
    </VStack>
  )
}
