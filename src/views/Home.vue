<template>
  <div>
    <input
      v-model="keyStr"
      @change="searchMeals"
      type="text"
      class="rounded border-2 bg-white border-gray-200 focus:outline-orange-500 w-72 p-2"
      placeholder="Search for Meals"
    />
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-[1.2] transition-all"
    >
      {{ letter }}
    </router-link>
    <div v-for="meal of meals" :key="meal.idMeal">
        <img :src="meal.strMealThumb" :alt="strMeal"/>
        <h3>{{ meal.strMeal }}</h3>
        <p>{{ meal.strInstructions }}</p>
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import store from "../store"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const keyStr = ref("");
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyStr.value)
} 

onMounted(async () => {
    searchMeals()
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
});
</script>
