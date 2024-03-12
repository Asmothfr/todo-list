<template>
  <div>
    <header>
      <h1 class="App__title">TODO LIST</h1>
    </header>
    <main>
      <TaskContainer />
      <AddButton />
    </main>
  </div>
</template>

<script setup lang="ts">
import AddButton from "@/components/AddButton/AddButton.vue";
import TaskContainer from "@/components/TaskContainer/TaskContainer.vue";
</script>

<style>
@import url("assets/styles/main.css");
</style>
