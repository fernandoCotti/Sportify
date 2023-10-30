"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class productsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Productos.')); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}
const productRoutes = new productsRoutes();
exports.default = productRoutes.router;
