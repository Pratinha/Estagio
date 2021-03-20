const helper = require("./compute-response-helper");

const server = require('fastify')();
const fetch = require('node-fetch');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

const TARGET_MACHINE1 = process.env.TARGET || 'localhost:4000';
const TARGET_MACHINE2 = process.env.TARGET || 'localhost:4001';

server.get('/', async() => {
    const req1 = await fetch(`http://${TARGET_MACHINE1}/wakeup-call/42`);
    const req2 = await fetch(`http://${TARGET_MACHINE2}/wakeup-call/42`);

    const producer1_data = await req1.json();
    const producer2_data = await req2.json();

    const resArr = [producer1_data, producer2_data];

    producer_data_winner = helper.computeResponse(resArr);

    return {
        consumer_pid: process.pid,
        producer_data_winner
    };
});

server.listen(PORT, HOST, () => {
    console.log(`Consumer running at http://${HOST}:${PORT}/`);
});