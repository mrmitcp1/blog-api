"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./src/data-source");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_router_1 = __importDefault(require("./src/routers/api.router"));
const PORT = 3333;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
data_source_1.AppDataSource.initialize().then(async () => {
    app.use('/api', api_router_1.default);
});
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map