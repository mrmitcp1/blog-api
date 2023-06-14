"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Blog_1 = require("./enity/Blog");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123321",
    database: "Blog",
    synchronize: false,
    logging: false,
    entities: [Blog_1.Blog],
    migrations: ["dist/src/migrations/*.js"],
});
//# sourceMappingURL=data-source.js.map