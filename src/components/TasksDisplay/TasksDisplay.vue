<template>
  <li>
    <ul v-for="(tasksArray, index) in props.tasks" v-bind:key="index">
      <li
        v-for="task in tasksArray"
        v-bind:key="task.id"
        class="TasksDisplay__task-list"
      >
        <font-awesome-icon
          v-if="task.complete"
          :icon="['far', 'circle-check']"
          class="TasksDisplay__cirle-icon--checked"
        />
        <font-awesome-icon
          v-else
          :icon="['far', 'circle']"
          class="TasksDisplay__cirle-icon"
        />
        <p
          :class="{
            'TasksDisplay--urgent-task': task.priority === 'urgent',
            'TasksDisplay--important-task': task.priority === 'important',
            'TasksDisplay--normal-task': task.priority === 'normal',
            'TasksDisplay--checked-task': task.complete,
          }"
        >
          {{ task.name }}
        </p>
        <font-awesome-icon
          v-if="task.complete"
          :icon="['fas', 'delete-left']"
          class="TasksDisplay__delete-icon--checked"
        />
        <div>
          <button @click.self="taskModalTrigger(task)">Update</button>
          <button @click.self="taskDeleteMutation.mutate(task.id)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </li>
  <TaskFormModal
    v-if="taskTriggerValueOpen"
    @close-modal="taskModalTrigger"
    :task="updateTaskData"
    :categoryId="props.categoryId"
    :isPost="false"
  />
</template>

<script setup lang="ts">
import TaskFormModal from "../TaskFormModal/TaskFormModal.vue";
import { ref } from "vue";
import type { Task } from "@/types";
import { useTask } from "@/composables/useTaskApi";

const props = defineProps({
  tasks: {
    type: Array<Task[]>,
    required: true,
  },
  categoryId: {
    type: String,
  },
});

const modalTriggerOpen = ref<boolean>(false);
const updateTaskData = ref<Task | undefined>();
const taskTriggerValueOpen = ref<boolean>(false);

const { taskDeleteMutation } = useTask();

function taskModalTrigger(task: Task): void {
  modalTriggerOpen.value = !modalTriggerOpen.value;
  taskTriggerValueOpen.value = !taskTriggerValueOpen.value;
  updateTaskData.value = task;
}
</script>

<style>
@import url(TasksDisplay.css);
</style>
