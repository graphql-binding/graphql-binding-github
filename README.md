# GitHub GraphQL Binding

Embed GitHub's GraphQL API into your server application

## Install

```sh
yarn add github-graphql-binding
```

## Example ([Demo](https://graphqlbin.com/Agjcr))

See [example directory](example) for full example application.

```js
const { GitHub } = require('github-graphql-binding')
const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')

const favoriteRepos = [
  { owner: 'graphcool', name: 'graphql-yoga' },
  { owner: 'graphql', name: 'graphql-js' },
]

const token = '__ENTER_YOUR_GITHUB_TOKEN__'
const github = new GitHub(token)

const typeDefs = importSchema('schemas/app.graphql')
const resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name || 'World'}!`,
    favoriteRepos: (parent, args, context, info) => {
      return Promise.all(
        favoriteRepos.map(args =>
          github.delegate('query', 'repository', args, context, info),
        ),
      )
    },
  },
}

const server = new GraphQLServer({ resolvers, typeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))
```
