import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChange }: { value: string; onChange: (text: string) => void }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search recipes..."
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default SearchBar;

