// import type { Task } from "@/types";
// import { computed } from "vue";
// import { useCategories } from "./useCategories";

// const {categories} = useCategories()

// const completeTasks = computed<Task[]>(() => {
//     return categories.tasks.filter((completeTask) => completeTask.complete);
//   });
  
//   // Array include only uncomplite tasks
//   const undoneTasks = computed<Task[]>(() => {
//     return categories.tasks.filter((undoneTask) => !undoneTask.complete);
//   });
  
//   // Array filtered
//   const urgentTasks = computed<Task[]>(() => {
//     return undoneTasks.value.filter((urgentPriority) =>
//       urgentPriority.priority.includes("urgent")
//     );
//   });
//   const importantTasks = computed<Task[]>(() => {
//     return undoneTasks.value.filter((importantPriority) =>
//       importantPriority.priority.includes("important")
//     );
//   });
//   const normalTasks = computed<Task[]>(() => {
//     return undoneTasks.value.filter((normalPriority) =>
//       normalPriority.priority.includes("normal")
//     );
//   });
  
//   // Script that retrieves the length of arrays filtered by priority
//   const urgentPriorityNumber = computed<number | null>(() => {
//     return urgentTasks.value.length != 0 ? urgentTasks.value.length : null;
//   });
//   const importantPriorityNumber = computed<number | null>(() => {
//     return importantTasks.value.length != 0 ? importantTasks.value.length : null;
//   });
//   const normalPriorityNumber = computed<number | null>(() => {
//     return normalTasks.value.length != 0 ? normalTasks.value.length : null;
//   });
  
//   // Faire un seul filteredTasks.
//   const filteredTasks = computed<Array<Task[]>>(() => {
//     const filteredArray: Array<Task[]> = [];
//     if (urgentTasks.value.length != 0) {
//       filteredArray.push(urgentTasks.value);
//     }
//     if (importantTasks.value.length != 0) {
//       filteredArray.push(importantTasks.value);
//     }
//     if (normalTasks.value.length != 0) {
//       filteredArray.push(normalTasks.value);
//     }
//     if (completeTasks.value.length != 0) {
//       filteredArray.push(completeTasks.value);
//     }
//     return filteredArray;
//   });