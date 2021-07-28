import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";;

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .get("/:id/moons", this.getAllMoonsByPlanetsId)
            .post("", this.create)
    }
    async getAllMoonsByPlanetsId(req, res, next) {
        try {
            res.send(await moonsService.find({ planet: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    // NOTE query is always api/assignments?name=bob
    // NOTE params is always api/assignments/:id
    async getAll(req, res, next) {
        try {
            return res.send(await planetsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send(201, await planetsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}
