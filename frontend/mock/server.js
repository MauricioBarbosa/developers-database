const {
  MockServer,
  watcher,
  chalk,
} = require('@r35007/mock-server');

const mockServer = MockServer.Create();
const app = mockServer.app;
const resources = mockServer.resources('./db.json');

const injectors = [
  { routes: '/login', delay: 1000, middlewares: ['login'] },
];

const middlewares = {
  login: (req, res) => {
    if (
      resources.users.find(
        (user) => req.body.username === user.username
      )
    ) {
      return res.send({ accessToken: 'some.access.token' });
    }

    return res.status(400).end();
  },
};

const loginResource = mockServer.resources(login, {
  injectors,
  middlewares,
});

console.log('MINHA PICA');

app.use(loginResource.router);
mockServer.startServer();
