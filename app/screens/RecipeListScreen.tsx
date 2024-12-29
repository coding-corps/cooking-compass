import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecipeCard from "../components/RecipeCard";
import useFetchRecipes from "../hooks/useFetchRecipies";

const RecipeListScreen = () => {
  const { recipes, loading } = useFetchRecipes(null);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default RecipeListScreen;
