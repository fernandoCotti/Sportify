"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductsController {
    products(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM product', (err, result) => {
                if (err) {
                    console.error('Error al obtener los productos:', err);
                    res.status(500).json({ error: 'Error al obtener los productos' });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query('SELECT * FROM product WHERE id = ?', id, (err, result) => {
                if (err) {
                    res.status(400).json({ error: 'Error al obtener el producto.' });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO product set ?', [req.body]);
            res.json({ message: 'Producto creado. ' });
        });
    }
    deleteGame(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM product WHERE id = ?', id, (err, result) => {
            if (err) {
                res.status(400).json({ error: 'Error al eliminar el producto.' });
            }
            else {
                res.json({ message: 'El producto fue eliminado.' });
            }
        });
    }
    updateGame(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE product set ? WHERE id = ?', [req.body, id], (err, result) => {
            if (err) {
                res.status(400).json({ error: 'Error al actualizar el producto.' });
            }
            else {
                res.json({ message: 'El producto fue actualizado' });
            }
        });
    }
}
const productsController = new ProductsController();
exports.default = productsController;
