<template>
  <div class="AddButton" :class="{ 'AddButton--open': isOpen }">
    <span class="AddButton__overlay"></span>
    <div class="AddButton__container">
      <div v-if="choiceOpen">
        <button @click="categoryFormModal" class="AddButton__category-task">
          Category
        </button>
        <button @click="taskFormModal" class="AddButton__category-task">
          Task
        </button>
      </div>
      <button @click="addButtonTrigger" class="AddButton__add-button">
        <font-awesome-icon
          class="AddButton__icon--rotate"
          :icon="['fas', 'plus']"
        />
      </button>
    </div>
    <div class="AddButton__modal">
      <CategoryFormModal v-if="categoryOpen" @closeModal="closeModal()" />
      <Suspense>
        <TaskFormModal v-if="taskOpen" />
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CategoryFormModal from "@/components/CategoryFormModal/CategoryFormModal.vue";
import TaskFormModal from "@/components/TaskFormModal/TaskFormModal.vue";

const isOpen = ref<boolean>(false);
const choiceOpen = ref<boolean>(false);
const categoryOpen = ref<boolean>(false);
const taskOpen = ref<boolean>(false);

const addButtonTrigger = (): void => {
  isOpen.value = !isOpen.value;
  if (!choiceOpen.value && !categoryOpen.value && !taskOpen.value) {
    choiceOpen.value = true;
  } else if (choiceOpen.value && !categoryOpen.value && !taskOpen.value) {
    choiceOpen.value = false;
  } else if ((!choiceOpen.value && categoryOpen.value) || taskOpen.value) {
    categoryOpen.value = false;
    taskOpen.value = false;
  }
};

const categoryFormModal = (): void => {
  choiceOpen.value = false;
  categoryOpen.value = !categoryOpen.value;
};

const taskFormModal = (): void => {
  choiceOpen.value = false;
  taskOpen.value = !taskOpen.value;
};

const closeModal = (): void => {
  isOpen.value = false;
  categoryOpen.value = false;
  taskOpen.value = false;
};
</script>

<style>
@import url(AddButton.css);
</style>
