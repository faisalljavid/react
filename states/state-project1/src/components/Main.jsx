import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromGemini, getRecipeFromMistral } from "./ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Error getting recipe:", error)
            setRecipe("Sorry, there was an error getting your recipe. Please try again.")
        }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 ?
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
                : null}
            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    )
}