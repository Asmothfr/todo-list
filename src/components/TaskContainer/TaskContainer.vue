<template>
  <ul v-if="categoriesList != undefined">
    <TaskDisplay
      v-for="category in categoriesList"
      v-bind:key="category.id"
      :id="category.id"
      :name="category.name"
      :tasks="category.tasks"
    />
  </ul>
  <h2 v-else>Aucune liste de taches trouvées</h2>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { CategoryTasks } from "@/types";
import { fetchGet } from "@/modules/fetch";
import TaskDisplay from "@/components/TaskDisplay/TaskDisplay.vue";

const categoriesList = ref<CategoryTasks[] | undefined>();

async function fetchCategory(): Promise<CategoryTasks[] | undefined> {
  return await fetchGet<CategoryTasks[]>("/api/categories/tasks");
}
onMounted(async () => {
  categoriesList.value = await fetchCategory();
});
</script>
