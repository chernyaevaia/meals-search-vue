export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals.meals || [];
}
export function setCuisines(state, cuisines) {
  state.cuisines = cuisines.meals || [];
}
export function setCategories(state, categories) {
  state.categories = categories.meals || [];
}

export function setIngredients(state, ingredients) {
  state.ingredients = ingredients.meals || [];
}
