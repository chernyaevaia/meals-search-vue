const baseUrl = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals({ commit }, keyStr) {
  try {
    const response = await fetch(`${baseUrl}/search.php?s=${keyStr}`);
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}


export async function getRandomMeal({ commit }) {
  try {
    const response = await fetch(`${baseUrl}/random.php`);
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealById({ commit }, id) {
  try {
    const response = await fetch(`${baseUrl}//lookup.php?i=${id}`);
    const result = await response.json();
    commit("setMealDetails", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getCuisines({ commit }) {
  try {
    const response = await fetch(`${baseUrl}/list.php?a=list`);
    const result = await response.json();
    commit("setCuisines", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories({ commit }) {
  try {
    const response = await fetch(`${baseUrl}/list.php?c=list`);
    const result = await response.json();
    commit("setCategories", result);
  } catch (error) {
    console.log(error);
  }
}


export async function getMealsByCuisine({ commit }, cuisine) {
  try {
    const response = await fetch(`${baseUrl}/filter.php?a=${cuisine}`);
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealsByCategory({ commit }, category) {
  try {
    const response = await fetch(`${baseUrl}/filter.php?c=${category}`);
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

export async function getMealsByLetter({ commit }, letter) {
  try {
    const response = await fetch(`${baseUrl}/search.php?f=${letter}`);
    const result = await response.json();
    commit("setSearchedMeals", result);
  } catch (error) {
    console.log(error);
  }
}

