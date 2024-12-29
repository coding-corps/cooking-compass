import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const RecipeCard = ({ recipe }: { recipe: any }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: recipe.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{recipe.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default RecipeCard;
