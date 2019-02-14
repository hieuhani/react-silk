import * as React from 'react'
import { View, StyleSheet, TextInput, ViewStyle } from 'react-native'
import { Text } from './Text'
import Colors from './Colors'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  textInput: {
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  disabledView: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: Colors.smokeWhite,
    borderWidth: 1,
    borderColor: Colors.smokeWhite,
    height: 33,
  },
  errorBorder: {
    borderColor: Colors.danger,
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 14,
  },
})

export interface Props {
  label?: string
  placeholder?: string
  errorMessage?: string
  onChange?: (arg: string) => void
  disabled?: boolean
  value?: string
  style?: ViewStyle
  setRef?: (arg: any) => void
  inputStyle?: any
}

export const Input = ({
  label,
  placeholder,
  errorMessage,
  disabled,
  onChange,
  value,
  style,
  setRef,
  inputStyle,
}: Props) => {
  const inputStyles = []
  if (errorMessage) {
    inputStyles.push(styles.errorBorder)
  }
  if (inputStyle) {
    inputStyles.push(inputStyle)
  }
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      {disabled ? (
        <View style={[styles.disabledView, ...inputStyles]}>
          <Text>{value || placeholder}</Text>
        </View>
      ) : (
        <TextInput
          ref={ref => (setRef ? setRef(ref) : null)}
          editable
          maxLength={40}
          style={[styles.textInput, ...inputStyles]}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
        />
      )}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
}

Input.defaultProps = {
  disabled: false,
  setRef: () => {},
}
