import { successResponce } from "../utility/responce";

class UserService {
    constructor() { }

    createUser() {
        return successResponce({message:"Hello"})
    }
}

export { UserService };