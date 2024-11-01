export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals.meals || [];
}
export function setCuisines(state, cuisines) {
  state.cuisines = cuisines.meals || [];
}
export function setCategories(state, categories) {
  state.categories = categories.meals || [];
}

export function setMealDetails(state, mealDetails) {
  state.mealDetails = mealDetails.meals || [];
}
