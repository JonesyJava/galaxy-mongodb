import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
    async create(body){
        return await dbContext.Stars.create(body)
    }
    async find(query = {}){
        return await dbContext.Stars.find(query).populate("galaxy", "title description")
    }
}

export const starsService = new StarsService();