<template>
  <p v-if="categories.data.value?.length === 0">
    Aucune liste de taches existante
  </p>
  <ul v-else-if="categories.isSuccess">
    <CategoriesDisplay
      v-for="category in categories.data.value"
      v-bind:key="category.id"
      :id="category.id"
      :name="category.name"
      :tasks="category.tasks"
    />
  </ul>
</template>

<script setup lang="ts">
import CategoriesDisplay from "@/components/CategoriesDisplay/CategoriesDisplay.vue";
import { useCategories } from "@/composables/useCategories";

const { categories } = useCategories();

// const sortedCategories = computed(() => {
// return [...categories.value].sort((a, b) => {
// return a.name.localeCompare(b.name);
// return (
//   b.tasks.reduce(
//     (sum, item) => (sum + item.priority === "normal" ? 1 : 0),
//     0
//   ) -
//   a.tasks.reduce(
//     (sum, item) => (sum + item.priority === "normal" ? 1 : 0),
//     0
//   )
// );
// });
// });
</script>
