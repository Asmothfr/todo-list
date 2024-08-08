import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query"
import type { Category } from "@/types"
import { apiRoutes } from "./apiRoutes"
import { queryKeys } from "./useQueryKeys"

export function useCategories(){
    const queryClient = useQueryClient()

    const categories = useQuery({
        queryKey: queryKeys.categories.lists(),
        queryFn: async () => {
            const response: Response = await fetch(apiRoutes.categoriesTasks, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const result: Promise<Category[]> = response.json()
            return result
        }
    })

    const categoryPostMutation = useMutation({
        mutationFn: async (category: { name: string | undefined; }) => {
            await fetch(apiRoutes.categories, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(category)
            });
        },
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.lists()
            })
        }
    })

    const categoryPutMutation = useMutation({
        mutationFn: async (category: { name: string | undefined, id:string | undefined }) => {
            await fetch(apiRoutes.categories  + `/${category.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(category)
            });
        },
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.lists()
            })
        }
    })

    const categoryDeleteMutation = useMutation({
        mutationFn: async (id: string) => {
            await fetch(apiRoutes.categories + `/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.lists()
            })
        }
    })
    
    return {categories, categoryPostMutation, categoryPutMutation, categoryDeleteMutation}
}