import { useState, useEffect } from "react";
import axios from "axios";

// Define the interface for the recipe object
interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
}

// Define the interface for the API response
interface RecipeResponse {
  recipes: Recipe[];
}

const TestRec = {
  recipes: [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      ingredients: [
        "400g spaghetti",
        "200g ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "400g canned tomatoes",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
        "Fresh basil leaves"
      ],
      instructions: "1. Cook the spaghetti according to the package instructions. \n2. In a pan, heat the olive oil over medium heat. Add the onions and garlic and cook until soft. \n3. Add the ground beef and cook until browned. \n4. Add the canned tomatoes, salt, and pepper. Simmer for 20 minutes. \n5. Serve the sauce over the spaghetti and garnish with fresh basil."
    },
    // Other recipes...
  ]
};

const useFetchRecipes = (apiUrl: string | null) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);  // Type state as Recipe array
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (apiUrl) {
        try {
          const response = await axios.get<RecipeResponse>(apiUrl);  // Type response
          setRecipes(response.data.recipes);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        // Fallback to test data
        setRecipes(TestRec.recipes);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [apiUrl]);

  return { recipes, loading };
};

export default useFetchRecipes;
