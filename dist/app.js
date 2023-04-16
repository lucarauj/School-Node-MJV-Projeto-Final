"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const router = (0, express_2.Router)();
router.get('/', (req, res) => {
    const hello = { message: 'Aplicação online!!!' };
    res.send(hello);
});
const port = 3000;
app.listen(port, () => {
    console.log('Aplicação online da porta: ', port);
});
