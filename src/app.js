const container = require('./Infrastructures/continer');
const createServer = require('./Infrastructures/http/createServer');

require('dotenv').config();

const start = async () => {
  const server = await createServer(container);
  await server.start();

  // eslint-disable-next-line no-console
  console.log(`server start at ${server.info.uri}`);
};

start();
