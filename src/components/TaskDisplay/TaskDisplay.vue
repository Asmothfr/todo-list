<template>
  <li class="TaskDisplay">
    <div class="TaskDisplay__category-container">
      <h2 class="TaskDisplay__title">{{ categoriesProps.name }}</h2>
      <span class="TaskDisplay__score--normal">{{ normalPriorityNumber }}</span>
      <span class="TaskDisplay__score--important">{{
        importantPriorityNumber
      }}</span>
      <span class="TaskDisplay__score--urgent">{{ urgentPriorityNumber }}</span>
      <button @click="taskListTrigger" class="TaskDisplay__chevron-button">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="TaskDisplay__chevron-icon"
        />
      </button>
    </div>
    <ul v-if="taskListState" class="TaskDisplay__task-container">
      <li
        v-for="task in categoriesProps.items"
        v-bind:key="task.id"
        class="TaskDisplay__task-list"
      >
        <input type="checkbox" :name="task.name" :id="task.name" />
        <label :for="task.name" :data-priority="task.priority">
          {{ task.name }}
        </label>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref, computed, type ComputedRef } from "vue";
import type { Categories } from "@/components/TaskContainer/TaskContainer.vue";
import type { Task } from "@/components/TaskContainer/TaskContainer.vue";

const categoriesProps = defineProps<Categories>();
const taskListState = ref<boolean>(false);
const taskList: Task[] = categoriesProps.items;

const normalPriority: Task[] = taskList.filter((normalPriority) =>
  normalPriority.priority.includes("normal")
);
const importantPriority: Task[] = taskList.filter((importantPriority) =>
  importantPriority.priority.includes("important")
);
const urgentPriority: Task[] = taskList.filter((urgentPriority) =>
  urgentPriority.priority.includes("urgent")
);

const normalPriorityNumber: ComputedRef<number | null> = computed(() => {
  return normalPriority.length != 0 ? normalPriority.length : null;
});
const importantPriorityNumber: ComputedRef<number | null> = computed(() => {
  return importantPriority.length != 0 ? importantPriority.length : null;
});
const urgentPriorityNumber: ComputedRef<number | null> = computed(() => {
  return urgentPriority.length != 0 ? urgentPriority.length : null;
});

const taskListTrigger = (): void => {
  taskListState.value = !taskListState.value;
};
</script>

<style>
@import url(TaskDisplay.css);
</style>
