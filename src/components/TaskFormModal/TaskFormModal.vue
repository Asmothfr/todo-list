<template>
  <div class="TaskFormModal">
    <form class="TaskFormModal__form" method="post">
      <div class="TaskFormModal__input-group">
        <input class="input-style TaskFormModal__input" type="text" name="name" placeholder="Task Name">
        <select class="input-style TaskFormModal__select" name="category">
          <option value="">Category</option>
        </select>
      </div>
      <fieldset class="TaskFormModal__priority">
        <legend>Priority</legend>
        <div class="TaskFormModal__priority-radio-group">

          <div class="test">
            <input 
              class="TaskFormModal__priority-input TaskFormModal__priority-input-normal" 
              type="radio" 
              id="priority-normal" 
              name="priority" 
              value="normal"
            />
            <label class="TaskFormModal__priority-label TaskFormModal__priority-label--normal" for="priority-normal">
              Normal
            </label>
          </div>
          
          <div>
            <input class="TaskFormModal__priority-input TaskFormModal__priority-input-important" type="radio" id="priority-important" name="priority" value="important"/>
            <label class="TaskFormModal__priority-label TaskFormModal__priority-label--important" for="priority-important">Important</label>
          </div>

          <div>
            <input class="TaskFormModal__priority-input TaskFormModal__priority-input-urgent" type="radio" id="priority-urgent" name="priority" value="urgent"/>
            <label class="TaskFormModal__priority-label TaskFormModal__priority-label--urgent" for="priority-urgent">Urgent</label>
          </div>

        </div>
        </fieldset>
        <button class="validate-button TaskFormModal__validate-button">Validate</button>
    </form>
  </div>
  <!-- Chopper un élément du dom. -->
</template>

<script setup lang="ts"></script>

<style>
@import url(TaskFormModal.css);
</style>