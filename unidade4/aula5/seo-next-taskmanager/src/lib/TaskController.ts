import data from "@/db/mock"

export default {
    // GET: /tasks
    getUserTasks: (userId: string) => {
        return data.tasks.filter(task => task.userId === userId);
    },
    // GET: /tasks/:taskId
    getUserTask: (taskId: string) => {
        return data.tasks.find(task => task.id === parseInt(taskId));
    },
    // POST: /tasks
    createUserTask: (userId: string, task: Task) => {
        if(data.tasks.length === 0) task.id = 1;
        else task.id = data.tasks[data.tasks.length - 1].id + 1;
        task.userId = userId;
        task.status = "pendente";
        data.tasks.push(task);
    },
    // PUT: /tasks/:taskId
    updateUserTask: (taskId: number, task: Task) => {
        const index = data.tasks.findIndex(t => t.id === taskId);
        if(index === -1) return false;
        data.tasks[index] = task;
        return true;
    },
    // DELETE: /tasks/:taskId
    deleteUserTask: (taskId: string) => {
        const index = data.tasks.findIndex(task => task.id === parseInt(taskId));
        if(index === -1) return false;
        data.tasks.splice(index, 1);
        return true;
    }
}