"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
class productsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.productController.products); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}
const productRoutes = new productsRoutes();
exports.default = productRoutes.router;
