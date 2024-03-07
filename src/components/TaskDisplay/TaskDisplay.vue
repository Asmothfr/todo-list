<template>
    <ul class="TaskDisplay">
        <li v-for="categorie in categoriesList"
            v-bind:key="categorie.id"
            class="TaskDisplay__category-list"
        >
            <div class="TaskDisplay__category-element">
                <h2 class="TaskDisplay__title">{{ categorie.name }}</h2>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <button class="TaskDisplay__chevron-button">
                    <font-awesome-icon 
                    :icon="['fas', 'chevron-down']"
                    class="TaskDisplay__chevron-icon"
                    />
                </button>
            </div>
            <ul v-if="taskListTrigger">
                <li v-for="task in categorie.items"
                    v-bind:key="task.id"
                    class="TaskDisplay__task-list"
                >
                <label :for="task.name"
                :data-priority="task.priority"
                >
                {{ task.name }}
                </label>
                <input type="checkbox"
                    :name="task.name"
                    :id="task.name"
                    class="TaskDisplay__task-input"
                    >
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
import categoriesFile from '@/task.json'
import { ref } from 'vue'

interface Categories {
    name: string,
    id: number,
    items: Task[]
}

interface Task {
    name: string,
    priority: string,
    id: number,
    complete: boolean
}

const categoriesList:Categories[] = categoriesFile
const taskListTrigger = ref<boolean>(true)
</script>

<style>
@import url(TaskDisplay.css);
</style>