"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
class productsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.default.products); //Obtenemos los productos.
        this.router.get('/:id', productsController_1.default.getProduct); //Obtenemos un producto particular.
        this.router.post('/', productsController_1.default.createProduct); //Creamos los productos.
        this.router.delete('/:id', productsController_1.default.deleteGame); //Eliminamos los productos.
        this.router.put('/:id', productsController_1.default.updateGame); //Actualizamos los productos.
    }
}
const productRoutes = new productsRoutes();
exports.default = productRoutes.router;
