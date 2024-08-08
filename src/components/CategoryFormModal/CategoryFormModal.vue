<template>
  <div class="CategoryFormModal">
    <form @submit.prevent="validate">
      <label for="category-name"></label>
      <input
        id="category-name"
        class="input-style CategoryFormModal__input"
        type="text"
        name="category-name"
        v-model="categoryName"
        placeholder="Category Name"
      />
      <button class="validate-button">Validate</button>
    </form>
    <button @click="emit('closeModal')">Close</button>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import type { Category } from "@/types";
import { useCategories } from "@/composables/useCategories";

const props = defineProps({
  isPost: {
    type: Boolean,
    required: true,
  },
  category: Object as PropType<Category>,
});

const emit = defineEmits<{
  closeModal: [void];
}>();

const { categoryPostMutation, categoryPutMutation } = useCategories();

const categoryName = ref<string | undefined>(props.category?.name);

function validate(): void {
  if (props.isPost) {
    categoryPostMutation.mutate({ name: categoryName.value });
  } else {
    categoryPutMutation.mutate({
      name: categoryName.value,
      id: props.category?.id,
    });
  }
  emit("closeModal");
}
</script>

<style>
@import url(CategoryFormModal.css);
</style>
