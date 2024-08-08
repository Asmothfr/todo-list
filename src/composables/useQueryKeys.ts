export const queryKeys = {
    categories: {
        all: ["categories"] as const,
        lists: () => [...queryKeys.categories.all, "list"] as const,
        byIds: () => [... queryKeys.categories.all, "id"] as const,
        byId: (id: string) => [... queryKeys.categories.byIds(), id] as const
    }
}