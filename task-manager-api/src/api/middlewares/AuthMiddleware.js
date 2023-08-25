import jwt from 'jsonwebtoken'

export default function authorize(arrrayOfAuthUsers = undefined) {
    return (req, res, next) => {
        if (!req.headers.authorization)
            return res.status(401).json({ error: true, message: "Access token is required!" })

        const [, token] = req.headers.authorization.split(' ') // => [Bearer, {TOKEN}]

        try {
            const payload = jwt.verify(token, process.env.API_LOGIN_SECRET || "SECRET");
            req.userId = payload.id;

            if (!payload.role || !arrrayOfAuthUsers)
                return next();

            if (arrrayOfAuthUsers.indexOf(payload.role) === -1)
                return res.status(401).json({ error: true, message: 'User not authorized!' })

            req.userRole = payload.role;
            return next();
        } catch (exception) {
            console.log(exception.name)
            if (exception.name === 'TokenExpiredError')
                return res.status(401).json({ error: true, message: "Expired access token!" });

            return res.status(401).json({ error: true, message: 'Invalid token!' })
        }

    }
}