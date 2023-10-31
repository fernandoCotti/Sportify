"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
