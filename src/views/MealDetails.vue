<template>
  <a href="/meals-search-vue">
    <button
      type="button"
      class="text-orange-800 mt-8 ml-8 border border-solid border-red-700 focus:outline-none focus:ring-4 font-medium px-5 py-2.5 text-center me-2 mb-2"
    >
      BACK
    </button>
  </a>
  <div class="flex-col max-w-[800px] mx-auto p-8" v-for="meal of meals">
    <h1 class="text-4xl font-bold mb-8 text-orange-600">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-[50%] mb-5 self-center"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div class="mb-5">
        <div class="font-bold">Category:</div>
        {{ meal.strCategory }}
      </div>
      <div>
        <div class="font-bold">Area:</div>
        {{ meal.strArea }}
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-5">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }},
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <a target="_blank" :href="meal.strYoutube">
      <button
        type="button"
        class="text-white bg-orange-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Open on YouTube
      </button>
    </a>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import { computed } from "vue";

const route = useRoute();

const meals = computed(() => store.state.mealDetails);

onMounted(() => {
  store.dispatch("getMealById", route.params.id);
});
</script>
