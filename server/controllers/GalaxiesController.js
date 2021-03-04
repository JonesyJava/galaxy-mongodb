import express from "express";
import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id/stars", this.getAllStarsbyGalaxyId)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return res.send(await galaxiesService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
  async getAllStarsbyGalaxyId(req, res, next) {
    try {
      res.send(await starsService.find({ galaxy: req.params.id }));
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(201, await galaxiesService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}
