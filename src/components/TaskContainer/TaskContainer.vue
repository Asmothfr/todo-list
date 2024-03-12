<template>
  <ul>
    <TaskDisplay
      v-for="categorie in categoriesList"
      v-bind:key="categorie.id"
      :id="categorie.id"
      :name="categorie.name"
      :items="categorie.items"
    />
  </ul>
</template>

<script setup lang="ts">
import TaskDisplay from "@/components/TaskDisplay/TaskDisplay.vue";
import categoriesFile from "@/task.json";

export interface Categories {
  name: string;
  id: number;
  items: Task[];
}

export interface Task {
  name: string;
  priority: string;
  id: number;
  complete: boolean;
}

const categoriesList: Categories[] = categoriesFile;
</script>
