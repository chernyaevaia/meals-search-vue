export async function searchMeals({ commit }, keyStr) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyStr}`
    );
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getRandomMeal({ commit }) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getCuisines({ commit }) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const result = await response.json();
    commit("setCuisines", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories({ commit }) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
    const result = await response.json();
    commit("setCategories", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getIngredients({ commit }) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    const result = await response.json();
    commit("setIngredients", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealsByCuisine({ commit }, cuisine) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
    );
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealsByCategory({ commit }, category) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=${category}`
    );
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealsByLetter({ commit }, letter) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealsByIngredient({ commit }, ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}
