import jwt from 'jsonwebtoken';
import ProfileController from './ProfileController.js';
import bcrypt from 'bcrypt';
import conn from '../database/Connection.js';

const mock = conn.mock();

class SignController {
    async signup(req, res, next) {
        try {
            ProfileController.create(req, res);
        } catch (err) {
            return next(err)
        }
    }

    async login(req, res, next) {
        if (!req.body.password || !req.body.email)
            return res.status(400).json({ error: true, message: "User or password not provided!" });
        const userExists = mock.users.find(u => u.email === req.body.email);
        if (!userExists)
            return res.status(404).json({ error: true, message: "User not found!" });
        if (!bcrypt.compareSync(req.body.password, userExists.password))
            return res.status(400).json({ error: true, message: "User or password not valid!" });
        return res.json({
            error: false,
            user: { name: userExists.name },
            token: jwt.sign({ id: userExists.id }, process.env.API_LOGIN_SECRET || "SECRET", { expiresIn: "1d" })
        });
    }
}

export default new SignController();