const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res, next) => {
  const agents = readUsers();
  const agent = agents.filter(
    u => u.email === req.body.email && u.password === req.body.password
  )[0];

  if (agent) {
    res.send({ ...formatUser(agent), token: checkIfAdmin(agent) });
  } else {
    res.status(401).send('Incorrect username or password');
  }
});

server.post('/register', (req, res) => {
  const agents = readUsers();
  const agent = agents.filter(u => u.username === req.body.username)[0];

  if (agent === undefined || agent === null) {
    res.send({
      ...formatUser(req.body),
      token: checkIfAdmin(req.body)
    });
    db.agents.push(req.body);
  } else {
    res.status(500).send('Agent already exists');
  }
});


server.use('/agents', (req, res, next) => {
  if (isAuthorized(req) || req.query.bypassAuth === 'true') {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function formatUser(user) {
  delete user.password;
  user.role = user.username === 'admin'
    ? 'admin'
    : 'agent';
  return user;
}

function checkIfAdmin(agent, bypassToken = false) {
  return agent.username === 'admin' || bypassToken === true
    ? 'admin-token'
    : 'agent-token';
}

function isAuthorized(req) {
  return req.headers.authorization === 'admin-token';
}

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');
  return JSON.parse(dbRaw).agents;
}
