const fetch = require('node-fetch');

const MACHINE_ID = 1;
let isNext = false;

const TARGET = process.env.TARGE || 'localhost:3000';

async function fetchApi() {
    const req = await fetch(`http://${TARGET}`);
    const consumer_data = await req.json();

    if (parseInt(consumer_data.producer_data_winner.machine.__id) === MACHINE_ID)
        isNext = true;


    console.log(isNext);
}

fetchApi();
isNext = false;