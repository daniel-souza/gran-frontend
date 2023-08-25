import conn from "../database/Connection.js";
import { v4 as uuidv4 } from "uuid";
const mock = conn.mock();

class TaskController {
    validate(task) {
        if (!task.title || !task.description || !task.status || !task.user_id)
            return {error: true, message: "Missing required data!"};
        if (mock.tasks.find(t => t.title === task.title))
            return {error: true, message: "This task already exists!"};
        if (!mock.users.find(u => u.id === task.user_id))
            return {error: true, message: "User not found!"};
        return {error: false};
    }
    create(req, res) {
        if (!mock.users.find(u => u.id === req.userId)) 
            return res.status(404).json({error: true, message: "User not found!"});
        const task = {
            id: uuidv4(),
            title: req.body.title,
            description: req.body.description,
            status: "a fazer",
            user_id: req.userId,
        };
        // const validate = this.validate(task);
        // console.log(validate);
        // if(validate.error)
        //     return res.status(400).json(validate);
        mock.tasks.push(task);
        return res.json({error: false, task});
    }

    readAll(req, res) {
        if (!mock.users.find(u => u.id === req.userId)) return res.status(404).json({error: true, message: "User not found!"});
        return res.json({error: false, tasks: mock.tasks.filter(t => t.user_id === req.userId)});
    }

    readOne(req, res) {
        if (!mock.users.find(u => u.id === req.userId)) return res.status(404).json({error: true, message: "User not found!"});
        const task = mock.tasks.find(t => t.id === req.params.taskId);
        if (!task) return res.status(404).json({error: true, message: "Task not found!"});
        return res.json({error: false, task});
    }

    update(req, res) {
        if (!mock.users.find(u => u.id === req.userId)) return res.status(404).json({error: true, message: "User not found!"});
        const index = mock.tasks.findIndex(t => t.id === req.params.taskId);
        if (index === -1) return res.status(404).json({error: true, message: "Task not found!"});
        const {title, description, status} = req.body;
        if (title) mock.tasks[index].title = title;
        if (description) mock.tasks[index].description = description;
        if (status) mock.tasks[index].status = status;
        return res.json({error: false, task: mock.tasks[index]});
    }

    delete(req, res) {
        if (!mock.users.find(u => u.id === req.userId)) return res.status(404).json({error: true, message: "User not found!"});
        const index = mock.tasks.findIndex(t => t.id === req.params.taskId);
        if (index === -1)  return res.status(404).json({error: true, message: "Task not found!"});
        const task = mock.tasks.splice(index, 1);
        return res.json({error: false, task});
    }
}

export default new TaskController();