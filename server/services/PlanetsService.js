import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
    async create(body){
        return await dbContext.Planets.create(body)
    }
    async find(query = {}){
        return await dbContext.Planets.find(query).populate("star", "title description")
    }
}

export const planetsService = new PlanetsService();