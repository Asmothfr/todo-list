<template>
  <div class="TaskFormModal">
    <form class="TaskFormModal__form" method="post">
      <div class="TaskFormModal__input-container">
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          class="input-style TaskFormModal__input"
        />
        <select class="input-style TaskFormModal__select" name="category">
          <option value="">Category</option>
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
  </div>
  <!-- Chopper un élément du dom. -->
</template>

<script setup lang="ts"></script>

<style>
@import url(TaskFormModal.css);
</style>
