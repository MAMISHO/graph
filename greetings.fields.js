const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const GreetingFields = {
  fields: function () {
    const fields = {
      hello: {
        type: GraphQLString,
        resolve: () => "Hello world!",
      },
      bye: {
        type: GraphQLString,
        resolve: () => "Bye wold",
      },
    };
    return fields;
  },
};

module.exports.GreetingFields = GreetingFields;
// export { GreetingFields };
