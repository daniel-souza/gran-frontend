import data from "@/db/mock"

export default {
    // Tarefas: /tasks
    getTasks: () => data.tasks,
    // Tarefas: /users/:userId/tasks
    getUserTasks: (userId: string) => {
        if(!data.users.some(user => user.id === parseInt(userId)))
            return null; // 404: Not Found
        return data.tasks.filter(task => task.userId === parseInt(userId));
    },
    createUserTask: (userId: string, task: Task) => {
        task.id = data.tasks[data.tasks.length - 1].id + 1;
        task.userId = parseInt(userId);
        data.tasks.push(task);
    },
    // Tarefas: /users/:userId/tasks/:taskId
    getUserTask: (userId: string, taskId: string) => {
        return data.tasks.find(task => task.id === parseInt(taskId) && task.userId === parseInt(userId));
    },
    updateUserTask: (userId: string, taskId: string, task: Task) => {
        const index = data.tasks.findIndex(task => task.id === parseInt(taskId) && task.userId === parseInt(userId));
        if(index === -1) null;
        data.tasks[index] = task;
    },
    deleteUserTask: (userId: string, taskId: string) => {
        const index = data.tasks.findIndex(task => task.id === parseInt(taskId) && task.userId === parseInt(userId));
        if(index === -1) null;
        data.tasks.splice(index, 1);
    }
}