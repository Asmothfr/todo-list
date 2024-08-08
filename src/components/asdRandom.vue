<template>
  <div>
    {{ getTask() }}
  </div>
  <div>
    {{ task }}
  </div>
</template>

<script setup>
import { useTaskApi } from "@/modules/useTaskApi";
import { onMounted } from "vue";

const { getTask, updateTask, task } = useTaskApi();

onMounted(async () => {
  // categoriesTasksList.value = await fetchCategory();
  // categoriesFilter();
  updateTask();
  updateTask();
  updateTask();

  task.value = 33;

  console.log(getTask());
});
</script>
