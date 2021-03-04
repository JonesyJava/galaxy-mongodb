import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
  async create(body) {
    return await dbContext.Galaxies.create(body)
  }
  async find(query = {}) {
    return await dbContext.Galaxies.find(query);
  }
  async findById(id) {
    // let classroom = await dbContext.Galaxy.findById(id);
    // if (!classroom) {
    //   throw new BadRequest("Invalid Id");
    // }
    // return classroom;
  }
}

export const galaxiesService = new GalaxiesService();