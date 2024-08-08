<template>
  <div class="TaskFormModal">
    <form class="TaskFormModal__form" @submit.prevent="validate">
      <div class="TaskFormModal__input-container">
        <input
          type="text"
          name="name"
          v-model="taskName"
          placeholder="Task Name"
          class="input-style TaskFormModal__input"
        />
        <!-- :value="props.task?.name" -->
        <select
          name="category"
          class="input-style TaskFormModal__select"
          v-model="taskCategory"
        >
          <option disabled value="null">Category</option>
          <option
            v-for="category in categoriesData"
            v-bind:key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <fieldset class="TaskFormModal__priority">
        <legend>Priority</legend>
        <div class="TaskFormModal__priority-radio-container">
          <div class="test">
            <input
              type="radio"
              id="priority-normal"
              name="priority"
              v-model="taskPriority"
              value="normal"
              class="TaskFormModal__priority-input TaskFormModal__priority-input-normal"
            />
            <label
              for="priority-normal"
              class="TaskFormModal__priority-label TaskFormModal__priority-label--normal"
            >
              Normal
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-important"
              name="priority"
              v-model="taskPriority"
              value="important"
              class="TaskFormModal__priority-input TaskFormModal__priority-input-important"
            />
            <label
              for="priority-important"
              class="TaskFormModal__priority-label TaskFormModal__priority-label--important"
              >Important</label
            >
          </div>
          <div>
            <input
              type="radio"
              id="priority-urgent"
              name="priority"
              v-model="taskPriority"
              value="urgent"
              class="TaskFormModal__priority-input TaskFormModal__priority-input-urgent"
            />
            <label
              class="TaskFormModal__priority-label TaskFormModal__priority-label--urgent"
              for="priority-urgent"
              >Urgent</label
            >
          </div>
        </div>
      </fieldset>
      <button class="validate-button TaskFormModal__validate-button">
        Validate
      </button>
    </form>
    <button @click="emit('closeModal')">Close</button>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import { useCategories } from "@/composables/useCategories";
import type { Task, TaskToPost, TaskToUpdate } from "@/types";
import { useTask } from "@/composables/useTaskApi";

const props = defineProps({
  isPost: {
    type: Boolean,
    required: true,
  },
  task: Object as PropType<Task>,
  categoryId: String,
});

const emit = defineEmits<{
  closeModal: [void];
  postRessource: [string, Task];
  updateRessource: [url: string, id?: string, data?: Task];
}>();

const { categories } = useCategories();
const { taskPostMutation, taskPutMutation } = useTask();
const categoriesData = categories.data;

const taskName = ref<string | undefined>(props.task?.name);
const taskCategory = ref<string | undefined>(props.categoryId);
const taskPriority = ref<string | undefined>(props.task?.priority);

async function validate(): Promise<void> {
  if (props.isPost) {
    const taskDataToPost: Partial<TaskToPost> = {
      name: taskName.value,
      category: taskCategory.value,
      priority: taskPriority.value,
      complete: false,
    };
    taskPostMutation.mutate(taskDataToPost);
  } else {
    const taskToUpdate: Partial<TaskToUpdate> = {
      id: props.task?.id,
      name: taskName.value,
      category: taskCategory.value,
      priority: taskPriority.value,
      complete: props.task?.complete,
    };
    taskPutMutation.mutate(taskToUpdate);
  }

  emit("closeModal");
}
</script>

<style>
@import url(TaskFormModal.css);
</style>
