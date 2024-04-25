<template>
  <li class="TaskDisplay">
    <div class="TaskDisplay__category-container">
      <h2 class="TaskDisplay__title">{{ categoriesProps.name }}</h2>
      <span class="TaskDisplay--urgent-task">{{ urgentPriorityNumber }}</span>
      <span class="TaskDisplay--important-task">{{
        importantPriorityNumber
      }}</span>
      <span class="TaskDisplay--normal-task">{{ normalPriorityNumber }}</span>
      <button @click="taskListTrigger" class="TaskDisplay__chevron-button">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="TaskDisplay__chevron-icon"
        />
      </button>
    </div>
    <ol v-if="taskListIsOpen" class="TaskDisplay__task-container">
      <li>
        <ul v-for="(tasksArray, index) in filteredTasks" v-bind:key="index">
          <li
            v-for="task in tasksArray"
            v-bind:key="task.id"
            class="TaskDisplay__task-list"
          >
            <font-awesome-icon
              v-if="task.complete"
              :icon="['far', 'circle-check']"
              class="TaskDisplay__cirle-icon--checked"
            />
            <font-awesome-icon
              v-else
              :icon="['far', 'circle']"
              class="TaskDisplay__cirle-icon"
            />
            <input
              type="checkbox"
              :id="task.name"
              :name="task.name"
              :data-priority="task.priority"
            />
            <label
              :for="task.name"
              :class="{
                'TaskDisplay--urgent-task': task.priority === 'urgent',
                'TaskDisplay--important-task': task.priority === 'important',
                'TaskDisplay--normal-task': task.priority === 'normal',
                'TaskDisplay--checked-task': task.complete,
              }"
            >
              {{ task.name }}
            </label>
            <font-awesome-icon
              v-if="task.complete"
              :icon="['fas', 'delete-left']"
              class="TaskDisplay__delete-icon--checked"
            />
          </li>
        </ul>
      </li>
    </ol>
  </li>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { CategoryTasks } from "@/types";
import type { Task } from "@/types";

const categoriesProps = defineProps<CategoryTasks>();
const taskListIsOpen = ref<boolean>(false);
const taskList: Task[] = categoriesProps.tasks;

// Array include only uncomplite tasks
const undoneTasks: Task[] = taskList.filter(
  (undoneTask) => !undoneTask.complete
);

// Array filtered
const urgentTasks = computed<Task[]>(() => {
  return undoneTasks.filter((urgentPriority) =>
    urgentPriority.priority.includes("urgent")
  );
});
const importantTasks = computed<Task[]>(() => {
  return undoneTasks.filter((importantPriority) =>
    importantPriority.priority.includes("important")
  );
});
const normalTasks = computed<Task[]>(() => {
  return undoneTasks.filter((normalPriority) =>
    normalPriority.priority.includes("normal")
  );
});
const completeTasks = computed<Task[]>(() => {
  return taskList.filter((completeTask) => completeTask.complete);
});

// Exclude empty array for the loop
const filteredTasks: Array<Task[]> = [];
if (urgentTasks.value.length != 0) {
  filteredTasks.push(urgentTasks.value);
}
if (importantTasks.value.length != 0) {
  filteredTasks.push(importantTasks.value);
}
if (normalTasks.value.length != 0) {
  filteredTasks.push(normalTasks.value);
}
if (completeTasks.value.length != 0) {
  filteredTasks.push(completeTasks.value);
}

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

const taskListTrigger = (): void => {
  taskListIsOpen.value = !taskListIsOpen.value;
};
</script>

<style>
@import url(TaskDisplay.css);
</style>
