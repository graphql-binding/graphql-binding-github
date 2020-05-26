# GraphQL Binding for GitHub

Embed GitHub's GraphQL API into your server application

# Deprecation Notice!

In the last few months, since [the transition of many libraries](https://www.prisma.io/blog/the-guild-takes-over-oss-libraries-vvluy2i4uevs) under [The Guild](http://the-guild.dev)'s leadership, We've reviewed and released many improvements and versions to [graphql-cli](https://github.com/Urigo/graphql-cli), [graphql-config](https://github.com/kamilkisiela/graphql-config) and [graphql-import](https://github.com/ardatan/graphql-import).

We've reviewed `graphql-binding`, had many meetings with current users and engaged the community also through the [roadmap issue](https://github.com/dotansimha/graphql-binding/issues/325).

What we've found is that the new [GraphQL Mesh](https://the-guild.dev/blog/graphql-mesh) library is covering not only all the current capabilities of GraphQL Binding, but also the future ideas that were introduced in the [original GraphQL Binding blog post](https://github.com/prisma-archive/prisma-blog-archive/blob/master/2018-01-12-reusing-and-composing-graphql-apis-with-graphql-bindings.mdx) and haven't come to life yet.

And the best thing - [GraphQL Mesh](https://the-guild.dev/blog/graphql-mesh) gives you all those capabilities, even if your source is not a GraphQL service at all!  
it can be GraphQL, OpenAPI/Swagger, gRPC, SQL or any other source!
And of course you can even merge all those sources into a single SDK.

Just like GraphQL Binding, you get a fully typed SDK (thanks to the protocols SDKs and the [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator)), but from any source, and that SDK can run anywhere, as a connector or as a full blown gateway.
And you can share your own "Mesh Modules" (which you would probably call "your own binding") and our community already created many of those!
Also, we decided to simply expose regular GraphQL, so you can choose how to consume it using all the awesome [fluent client SDKs out there](https://hasura.io/blog/fluent-graphql-clients-how-to-write-queries-like-a-boss/).

If you think that we've missed anything from GraphQL Binding that is not supported in a better way in GraphQL Mesh, please let us know!

## Install

```sh
yarn add graphql-binding-github
```

## Example ([Demo](https://graphqlbin.com/Agjcr))

See [example directory](example) for full example application.

```js
const { GitHub } = require('graphql-binding-github')
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
        favoriteRepos.map(args => github.query.repository(args, context, info)),
      )
    },
  },
  // the following is needed to make interfaces, unions & custom scalars work
  ...github.getAbstractResolvers(typeDefs),
}

const server = new GraphQLServer({ resolvers, typeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))
```

## How to create a GitHub Token

Simply follow [this guide](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql) and head over to the [token settings on GitHub](https://github.com/settings/tokens).

## Resources

* Github GraphQL Explorer: https://developer.github.com/v4/explorer/
