const express = require('express');
const cors = require('cors');
const jsonGraphqlExpress = require('json-graphql-server').default;
const data = require('./db');

const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    accessControlAllowOrigin: '*',
    accessControlAllowCredentials: true,
}

const PORT = 3001;
const app = express();

app.use(cors(corsOptions));

app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT);