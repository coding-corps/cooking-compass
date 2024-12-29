import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeDetailScreen = ({ route }: { route: any }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text>Ingredients:</Text>
      <Text>{recipe.ingredients}</Text>
      <Text>Instructions:</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default RecipeDetailScreen;
