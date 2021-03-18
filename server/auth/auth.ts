import jwt from "jsonwebtoken";
import config from "../config/config"
import app from "../server"


// Adding login route
export const loginRoute = (req: any, res: any) => {
    const username = req.body.username;
    if (!username) res.json({ message: "Username not provided" });

    const password = req.body.password;
    if (!password) res.json({ message: "Password not provided" });

    if (username == config.app.username && password == config.app.password) {
        const accessToken = jwt.sign(username, config.app.AppSecret);
        res.status(200).json({ accessToken: accessToken });
    } else {
        res.status(200).json({ message: "Invalid UserName or Password" });
    }
};

// Adding authentication for checking the JWT token
export const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ message: "No Auth Token provided" });
    jwt.verify(token, config.app.AppSecret, (err:any) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });
        next();
     });
}
 