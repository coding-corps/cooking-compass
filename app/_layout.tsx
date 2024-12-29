import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Layout;
