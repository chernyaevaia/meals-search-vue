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
