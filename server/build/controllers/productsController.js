"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductsController {
    products(req, res) {
        database_1.default.query('DESCRIBE product');
        res.json('Acá estarán los datos de todos los productos.');
    }
}
const productsController = new ProductsController();
exports.default = productsController;
