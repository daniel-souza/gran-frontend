import conn from "../database/Connection.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const mock = conn.mock();

class ProfileController {
    create(req, res) {
        const {name, email, password} = req.body;
        if (!name || !email || !password)
            return res.status(400).json({error: true, message: "Missing required data!"});
        if (mock.users.find(u => u.email === email))
            return res.status(400).json({error: true, message: "This email already exists!"});
        const user = {
            id: uuidv4(),
            name,
            email,
            password: bcrypt.hashSync(password, 10),
        };
        mock.users.push(user);
        return res.json({error: false, user});
    }

    read(req, res) {
        const user = mock.users.find(u => u.id === req.userId);
        if (!user) return res.status(404).json({error: true, message: "User not found!"});
        return res.json({error: false, user});
    }

    readAll(req, res) {
        return res.json({error: false, users: mock.users});
    }

    update(req, res) {
        const index = mock.users.findIndex(u => u.id === req.userId);
        if (index === -1) return res.status(404).json({error: true, message: "User not found!"});
        const {name, email, password} = req.body;
        if (name) mock.users[index].name = name;
        if (email) {
            if(mock.users.find(u => u.email === email))
                return res.status(400).json({error: true, message: "This email already exists!"});
            mock.users[index].email = email;
        }
        if (password) mock.users[index].password = bcrypt.hashSync(password, 10);
        return res.json({error: false, user: mock.users[index]});
    }

    delete(req, res) {
        const index = mock.users.findIndex(u => u.id === req.userId);
        if (index === -1) return res.status(404).json({error: true, message: "User not found!"});
        const user = mock.users.splice(index, 1);
        // delete all tasks from this user
        mock.tasks = mock.tasks.filter(t => t.user_id !== req.userId);
        return res.json({error: false, user});
    }
}

export default new ProfileController();