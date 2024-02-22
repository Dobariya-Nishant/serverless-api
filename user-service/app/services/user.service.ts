import { UserRepository } from "../repository";
import { successResponce } from "../utility/responce";
import { autoInjectable } from "tsyringe";

@autoInjectable()
class UserService {

    private repository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async createUser(email: string, password:string) {
        this.repository.create()
        return successResponce({message:"Hello"});
    }

    async userLogin() {
        return successResponce({message:"userLogin"});
    }

    async userVerify() {
        return successResponce({message:"userVerify"});
    }

    async createProfile() {
        return successResponce({message:"createProfile"});
    }

    async getProfile() {
        return successResponce({message:"getProfile"})
    }

    async updateProfile() {
        return successResponce({message:"updateProfile"})
    }

    async createCart() {
        return successResponce({message:"createCart"})
    }

    async getCart() {
        return successResponce({message:"getCart"})
    }

    async updateCart() {
        return successResponce({message:"updateCart"})
    }

    async createPaymentMethod() {
        return successResponce({message:"createPaymentMethod"})
    }

    async getPaymentMethod() {
        return successResponce({message:"getPaymentMethod"})
    }

    async updatePaymentMethod() {
        return successResponce({message:"updatePaymentMethod"})
    }

}

export { UserService };