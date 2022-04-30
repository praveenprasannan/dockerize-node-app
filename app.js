const got = require('got');
const NodeCache = require('node-cache');

const fastify = require('fastify')({
  logger: true,
});

const appCache = new NodeCache();

fastify.get('/api', async (req, res) => {
  try {
    let randomUser = appCache.get('randomUser');

    if (randomUser == null) {
      const response = await got('https://randomuser.me/api');
      randomUser = response.body;
      appCache.set('randomUser', randomUser, 600);
    }

    res.header('Content-Type', 'application/json; charset=utf-8').send(randomUser);
  } catch (err) {
    fastify.log.error(err);
    res.code(error.response.code).send(err.response.body);
  }
});

fastify.listen(4000, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
});
