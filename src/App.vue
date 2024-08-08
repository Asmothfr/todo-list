<template>
  <VueQueryDevtools />
  <div>
    <header>
      <h1 class="App__title">TODO LIST</h1>
    </header>
    <main>
      <DisplayContainer />
      <AddButton />
    </main>
  </div>
</template>

<script setup lang="ts">
import AddButton from "@/components/AddButton/AddButton.vue";
import DisplayContainer from "@/components/DisplayContainer/DisplayContainer.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>
