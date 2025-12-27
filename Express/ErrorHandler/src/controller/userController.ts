import { Request, Response } from "express";
import userService from "../services/userServices";

class userController {

    static async createUser(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            const result = await userService.create(data)
            res.status(201).json("user create success")
        } catch (error) {

            res.status(500).json({
                message: "Internal Server Error"
            })
        }

    }

}
export default userController;