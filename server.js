// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname 
import path, {dirname} from 'path'; 
import { fileURLToPath } from 'url'; 
const __dirname = dirname(fileURLToPath(import.meta.url));

// instantiate app-server
const app = express();

// custom middleware
function helloWorld(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
};

// custom middleware
function byeWorld(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Good Bye World');
};

// add middleware to connect application
app.use('/hello',helloWorld);
app.use('/bye', byeWorld);

// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');