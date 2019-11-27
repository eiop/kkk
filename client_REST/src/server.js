
import prisma from './prisma'
var passport = require('passport');
require('./passport')

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(request) {
        return {
            pubsub,
            prisma,
            request,
            util,
            passport
        }
    },
    fragmentReplacements
})

module.exports { server as default }