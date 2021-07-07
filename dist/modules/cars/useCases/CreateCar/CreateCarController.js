"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarController = void 0;

var _tsyringe = require("tsyringe");

var _CreateCarUseCase = require("./CreateCarUseCase");

class CreateCarController {
  async handle(request, response) {
    const {
      name,
      category_id,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand
    } = request.body;

    const createCarUseCase = _tsyringe.container.resolve(_CreateCarUseCase.CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      category_id,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand
    });
    return response.status(201).json(car);
  }

}

exports.CreateCarController = CreateCarController;