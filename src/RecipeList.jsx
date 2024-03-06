import { recipes } from './Data.jsx';

// Define the Recipe component
function Recipe({id, name, ingredients}){

    return (
    <div>
        <h1>Recipes</h1>
        <h2>{name}</h2>
        <ul>{ingredients.map((ingredient)=>(
            <li key={ingredient}>{ingredient}</li>
        ))}
        </ul>
    </div>
        );
}

function RecipeList() {
    return (
        <div>
          <h1>Recipes</h1>
          <ul>
            {recipes.map(recipe => (
              <Recipe
                // key={recipe.id} 
                id={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                // {ingredients.map((ingredient)) => (
                //     <li>{ingredient}</li>
                // )}
              />
            ))}
          </ul>
        </div>
      );
    }
    

export default RecipeList;
//Challenge #3


// import { recipes } from './Data.jsx';

// function RecipeList() {
//   const ingredients = recipes.map(recipe =>
//     <li key ={recipe.id}>
//       <b><h2></h2>{recipe.name}:</b>
//       <ul> {" " + recipe.ingredients + " "}</ul>
//     </li>
//   );
//   return (
//     <div>
//       <h1>Recipes</h1>
//       <ul>Ingredients{ingredients}:</ul>
//     </div>
//   );
// }

// export default RecipeList;
// //Challenge #2