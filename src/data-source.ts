import "reflect-metadata"

import { DataSource } from "typeorm"
import {Blog} from "./enity/Blog";



export const AppDataSource = new DataSource({

    type: "mysql",

    host: "localhost",

    port: 3306,

    username: "root",

    password: "123321",

    database: "Blog",

    synchronize: false,

    logging: false,

    // entities: ["dist/src/entity/*.js"],
    entities: [Blog],

    migrations: ["dist/src/migrations/*.js"],

})