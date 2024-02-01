<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all w-[200px]"
  >
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-48 object-cover"
    />
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
