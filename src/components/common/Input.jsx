import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usa Ionicons

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showToggle = secureTextEntry;

  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={showToggle && !isPasswordVisible}
        placeholderTextColor="#999"
      />
      {showToggle && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.iconContainer}
        >
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    paddingLeft: 8,
  },
});

export default Input;
