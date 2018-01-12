const { GitHub } = require('graphql-binding-github')
const { GraphQLServer } = require('graphql-yoga')

const favoriteRepos = [
  { owner: 'graphcool', name: 'graphql-yoga' },
  { owner: 'graphql', name: 'graphql-js' },
]

const token = process.env.GITHUB_TOKEN || ''
const github = new GitHub(token)

const typeDefs = '.schemas/app.graphql'
const resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name || 'World'}!`,
    favoriteRepos: (parent, args, context, info) => {
      return Promise.all(
        favoriteRepos.map(args => github.query.repository(args, context, info)),
      )
    },
  },
  ...github.remoteResolvers(typeDefs),
}

const server = new GraphQLServer({ resolvers, typeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))
