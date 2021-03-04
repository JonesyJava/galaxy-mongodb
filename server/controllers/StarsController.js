import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";
import { planetsService } from "../services/PlanetsService";

export class StarsController extends BaseController {
    constructor() {
        super("api/stars");
        this.router
            .get("", this.getAll)
            .get("/:id/stars", this.getAllPlanetsByStarsId)
            .post("", this.create)
    }
    async getAllPlanetsByStarsId(req, res, next) {
        try {
            res.send(await planetsService.find({ star: req.params.id }))
        } catch (error) {
            next(error)
        }
    }
    // NOTE query is always api/assignments?name=bob
    // NOTE params is always api/assignments/:id
    async getAll(req, res, next) {
        try {
            return res.send(await starsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send(201, await starsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}
