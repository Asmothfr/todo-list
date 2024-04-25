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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fetchPost } from "@/modules/fetch";

type Category = {
  name: string | undefined;
};

const emit = defineEmits<{
  closeModal: [];
}>();

const url: string = "/api/categories";
const categoryName = ref<string>();

async function validate(): Promise<void> {
  const data = categoryName.value;
  const categoryData: Category = {
    name: data,
  };
  await fetchPost<Category>(url, categoryData);
  emit("closeModal");
}
</script>

<style>
@import url(CategoryFormModal.css);
</style>
