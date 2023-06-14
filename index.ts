import { AppDataSource} from "./src/data-source";
import bodyParser from 'body-parser';
import express from 'express';
import path from "path";
import apiRouter from "./src/routers/api.router";



const PORT = 3333;
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

AppDataSource.initialize().then(async () => {
    app.use('/api', apiRouter);
})

app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );