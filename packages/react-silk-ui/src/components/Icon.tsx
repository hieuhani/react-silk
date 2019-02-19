import * as React from 'react'
import { View, Text, ViewStyle } from 'react-native'

export interface Props {
  name: string
  size?: number
  color?: string
  style?: ViewStyle
}

let IconComponent = (props: Props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}
export function installIconComponent(iconComponent: any) {
  IconComponent = iconComponent
}

export const Icon = (props: Props) => <IconComponent {...props} />

Icon.defaultProps = {
  size: 24,
  color: '#666',
}
