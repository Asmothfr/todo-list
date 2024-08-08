<template>
  <li
    class="CategoriesDisplay"
    :class="{ 'CategoriesDisplay--open': modalTriggerOpen }"
  >
    <span class="CategoriesDisplay__overlay"></span>
    <div class="CategoriesDisplay__category-container">
      <div>
        <h2 class="CategoriesDisplay__title">
          {{ categoriesProps.name }}
        </h2>
      </div>
      <span
        v-if="urgentPriorityNumber"
        class="CategoriesDisplay--urgent-task"
        >{{ urgentPriorityNumber }}</span
      >
      <span
        v-if="importantPriorityNumber"
        class="CategoriesDisplay--important-task"
        >{{ importantPriorityNumber }}</span
      >
      <span
        v-if="normalPriorityNumber"
        class="CategoriesDisplay--normal-task"
        >{{ normalPriorityNumber }}</span
      >
      <button
        @click="taskListTrigger"
        class="CategoriesDisplay__chevron-button"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="CategoriesDisplay__chevron-icon"
        />
      </button>
      <div>
        <button @click="categoryModalTrigger">Update</button>
        <button @click.self="categoryDeleteMutation.mutate(categoriesProps.id)">
          Delete
        </button>
      </div>
    </div>
    <ol v-if="taskListIsOpen" class="CategoriesDisplay__task-container">
      <TasksDisplay :tasks="filteredTasks" :categoryId="categoriesProps.id" />
    </ol>
  </li>
  <div class="CategoriesDisplay__modal">
    <CategoryFormModal
      v-if="categoryModalTriggerOpen"
      :is-post="false"
      :category="categoriesProps"
      @close-modal="categoryModalTrigger"
    />
  </div>
</template>

<script setup lang="ts">
import CategoryFormModal from "../CategoryFormModal/CategoryFormModal.vue";
import TasksDisplay from "../TasksDisplay/TasksDisplay.vue";
import { ref, computed } from "vue";
import type { Category, Task } from "@/types";
import { useCategories } from "@/composables/useCategories";

const categoriesProps = defineProps<Category>();
const taskListIsOpen = ref<boolean>(false);
const modalTriggerOpen = ref<boolean>(false);
const categoryModalTriggerOpen = ref<boolean>(false);

const { categoryDeleteMutation } = useCategories();

const completeTasks = computed<Task[]>(() => {
  return categoriesProps.tasks.filter((completeTask) => completeTask.complete);
});

// Array include only uncomplite tasks
const undoneTasks = computed<Task[]>(() => {
  return categoriesProps.tasks.filter((undoneTask) => !undoneTask.complete);
});

// Array filtered
const urgentTasks = computed<Task[]>(() => {
  return undoneTasks.value.filter((urgentPriority) =>
    urgentPriority.priority.includes("urgent")
  );
});
const importantTasks = computed<Task[]>(() => {
  return undoneTasks.value.filter((importantPriority) =>
    importantPriority.priority.includes("important")
  );
});
const normalTasks = computed<Task[]>(() => {
  return undoneTasks.value.filter((normalPriority) =>
    normalPriority.priority.includes("normal")
  );
});

// Script that retrieves the length of arrays filtered by priority
const urgentPriorityNumber = computed<number | null>(() => {
  return urgentTasks.value.length != 0 ? urgentTasks.value.length : null;
});
const importantPriorityNumber = computed<number | null>(() => {
  return importantTasks.value.length != 0 ? importantTasks.value.length : null;
});
const normalPriorityNumber = computed<number | null>(() => {
  return normalTasks.value.length != 0 ? normalTasks.value.length : null;
});

// Faire un seul filteredTasks.
const filteredTasks = computed<Array<Task[]>>(() => {
  const filteredArray: Array<Task[]> = [];
  if (urgentTasks.value.length != 0) {
    filteredArray.push(urgentTasks.value);
  }
  if (importantTasks.value.length != 0) {
    filteredArray.push(importantTasks.value);
  }
  if (normalTasks.value.length != 0) {
    filteredArray.push(normalTasks.value);
  }
  if (completeTasks.value.length != 0) {
    filteredArray.push(completeTasks.value);
  }
  return filteredArray;
});

function taskListTrigger(): void {
  taskListIsOpen.value = !taskListIsOpen.value;
}

function categoryModalTrigger(): void {
  modalTriggerOpen.value = !modalTriggerOpen.value;
  categoryModalTriggerOpen.value = !categoryModalTriggerOpen.value;
}
</script>

<style>
@import url(CategoriesDisplay.css);
</style>
