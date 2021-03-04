import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
    async create(body){
        return await dbContext.Moons.create(body)
    }
    async find(query = {}){
        return await dbContext.Moons.find(query).populate("planet", "title description")
    }
}

export const moonsService = new MoonsService();