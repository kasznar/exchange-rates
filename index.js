import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import Koa from "koa";
import Router from '@koa/router';
import {currencies, getExchangeRatesJSON} from "./data.js";

const app = new Koa();
const router = new Router();
const server = createServer();

// REST
router.get('/currencies', (ctx, next) => {
    ctx.body = currencies.map((item) => item.code);
});

router.get('/exchange-rates', (ctx, next) => {
    ctx.body = getExchangeRatesJSON();
});

app.use(router.routes());
server.on('request', app.callback());

// WebSocket
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    setInterval(() => {
        ws.send(getExchangeRatesJSON());
    }, 1000)

});


server.listen(8080, ()=> {
    console.log('Server started');
});