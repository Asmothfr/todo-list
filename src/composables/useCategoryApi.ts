import type { Category } from "@/types";
import { apiRoutes } from "./apiRoutes";



export function useCategoryApi(){
    async function createCategory(category: { name: string | undefined; }) {
        try {
            const response: Response = await fetch(apiRoutes.categories, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(category)
            });
            const result: Promise<Category[]> = response.json()
            return result
          } catch (error) {
            console.log(error)
          }
    }

    async function getCategoriesTasks() {
      try {
        const response: Response = await fetch(apiRoutes.categoriesTasks, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result: Promise<Category[]> = response.json()
        return result
      } catch (error) {
        console.log(error)
      }
    }

    async function deleteCategory(id:string) {
      try {
        const response: Response = await fetch(apiRoutes.categories+`/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const result: Promise<Category[]> = response.json()
        return result
      } catch (error) {
        console.log(error)
      }
    }
    return {createCategory, getCategoriesTasks, deleteCategory}
}