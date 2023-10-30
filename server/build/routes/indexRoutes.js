"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hello.')); //En el link inicial de mi aplicacion, '/', se devuelve el mensaje 'Hello'
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
