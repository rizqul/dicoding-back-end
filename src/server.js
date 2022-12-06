const Hapi = require('@hapi/hapi');
const route = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(route);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
