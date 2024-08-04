import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const LogInput = ({
  title,
  textContentType,
  keyboardType,
  autoCompleteType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#CDD1D0",
        gap: 16,
      }}
    >
      <Text style={{ color: "#24786D", fontWeight: 500 }}>{title}</Text>
      <TextInput
        textContentType={textContentType}
        keyboardType={keyboardType}
        autoCompleteType={autoCompleteType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        style={styles.Input}
      />
    </View>
  );
};

export default LogInput;

const styles = StyleSheet.create({
  Input: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 12,
    width: "100%",
  },
});
