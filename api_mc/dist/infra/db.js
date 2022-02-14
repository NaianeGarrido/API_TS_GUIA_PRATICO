"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.DB_URL = "mongodb+srv://Paim:Gabyluiz28*@cluster0.npcwa.mongodb.net/db_portal?retryWrites=true&w=majority";
    }
    createConnection() {
        mongoose_1.default.connect(this.DB_URL);
    }
}
exports.default = Database;
