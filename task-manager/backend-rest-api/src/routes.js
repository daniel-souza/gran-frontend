import { Router } from "express";
import authorize from "./api/middlewares/AuthMiddleware.js";
import SignController from "./api/controllers/SignController.js";
import ProfileController from "./api/controllers/ProfileController.js";
import TaskController from "./api/controllers/TaskController.js";

const routes = new Router();

routes.get("/", async (req, res) => res.json({ error: false, message: "Hello World!" }));

routes.post('/signup', SignController.signup);
routes.post('/login', SignController.login);

routes.get("/users", ProfileController.readAll);

routes.get('/profile', authorize(), ProfileController.read);
routes.put('/profile', authorize(), ProfileController.update);
routes.delete('/profile', authorize(), ProfileController.delete);
routes.get('/profile/tasks', authorize(), TaskController.readAll);
routes.post('/profile/tasks', authorize(), TaskController.create);
routes.get('/profile/tasks/:taskId', authorize(), TaskController.readOne);
routes.put('/profile/tasks/:taskId', authorize(), TaskController.update);
routes.delete('/profile/tasks/:taskId', authorize(), TaskController.delete);

routes.use(async (req, res, next) =>
    res.status(404).json({ error: true, message: `Resource ${req.url} not found!` })
);

routes.use(async (err, req, res, next) => {
    console.log(err)
    if (err.name === "ValidationError")
        return res.status(400).json({
            error: true,
            message: err.message,
            ValidationError: err.errors
        });
    if(err.code === 11000)
        return res.status(400).json({
            error: true,
            message: `This value already exists!`,
            duplicated: err.keyValue
        });
    return (err.status)
        ? res.status(err.status).json({ error: true, message: err.message })
        : res.status(500).json({ error: true, message: "Internal server error!" })
});

export default routes;