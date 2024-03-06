import { recipes } from './Data.js';

function RecipeList() {
  const ingredients = recipes.map(recipe =>
    <li key ={recipe.id}>
      <b><h2></h2>{recipe.name}:</b>
      <ul> {" " + recipe.ingredients + " "}</ul>
    </li>
  );
  return (
    <div>
      <h1>Recipes</h1>
      <ul>Ingredients{ingredients}:</ul>
    </div>
  );
}

export default RecipeList;