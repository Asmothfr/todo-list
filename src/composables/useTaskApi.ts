import { useMutation, useQueryClient } from "@tanstack/vue-query"
import { queryKeys } from "./useQueryKeys"
import { apiRoutes } from "./apiRoutes"
import type { TaskToPost, TaskToUpdate } from "@/types"

export function useTask()
{
    const queryClient = useQueryClient()

    const taskPostMutation = useMutation({
        mutationFn: async(task: Partial<TaskToPost>) => {
            await fetch(apiRoutes.Task, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.lists()
            })
        }
    })

    const taskPutMutation = useMutation({
        mutationFn: async (task: Partial<TaskToUpdate>) => {
            await fetch(apiRoutes.Task + `/${task.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.lists()
            })
        }
   })

    const taskDeleteMutation = useMutation({
        mutationFn: async (id:string) => {
            await fetch(apiRoutes.Task + `/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.categories.lists()
            })
        }
    })

    return{taskPostMutation,taskPutMutation, taskDeleteMutation}
}