import { User ,IUser} from "../model/userModel";

class userService {

    static async create(data:Partial<IUser>):Promise <IUser>{
        return User.create(data)
    }
}
export default userService