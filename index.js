'use strict'
/*
// DEfinir un esquema en la evrsión 14
const { graphql, buildSchema } = require('graphql')

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Ejecutar el query hello
graphql(schema, '{ hello }').then((data) => {
    console.log(data)
})
*/

// definir un esquema en la versión 16
// "graphql": "^16.0.0"
const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const app = express();
const port = process.env.port || 3000;

function fieldDefinition() {
    const fieldls = {
        hello: {
            type: GraphQLString,
            resolve: () => 'Hello world!'
        },
        bye: {
            type: GraphQLString,
            resolve: () => 'Bye wold'
        }
    };
    return fieldls;
}

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Greetings',
        fields: fieldDefinition()
    })
});

/*graphql(schema, '{ hello, bye }').then((response) => {
    console.log(response);
});*/

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: {},
    graphiql: true
}));

app.listen(port, () => {
    console.log('listening on port http://localhost:${port}')
})