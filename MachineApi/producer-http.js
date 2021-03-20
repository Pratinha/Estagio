const server = require('fastify')();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 4000;

console.log(`worker pid=${process.pid}`);

server.get('/wakeup-call/:id', async(req, reply) => {
    console.log(`worker request pid=${process.pid}`);

    const id = Number(req.params.id);

    if (id !== 42) {
        reply.statusCode = 404;
        return { error: 'NOT FOUND' };
    }

    return {
        producer_pid: process.pid,
        machine: {
            __id: 1,
            name: 'machine-1',
            rng: Math.floor(Math.random() * 101)
        }
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Producer running at http://${HOST}:${PORT}`);
});