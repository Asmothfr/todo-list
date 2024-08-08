const host = "https://localhost:8000"
const apiRoutes = {
    categories: `${host}/api/categories`,
    categoriesTasks: `${host}/api/categories/tasks`,
    Task: `${host}/api/tasks`
} as const

export {apiRoutes}