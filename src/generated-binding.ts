import { Binding } from 'graphql-binding'
import { ApolloLink } from 'apollo-link'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import { InlineFragmentNode } from 'graphql'

export interface FragmentReplacements {
  [typeName: string]: {
    [fieldName: string]: InlineFragmentNode
  }
}

export interface BindingOptions {
  fragmentReplacements?: FragmentReplacements
  link: ApolloLink
  before?: () => void
  handler?: any
  subscriptionHandler?: any
}

const typeDefs = `
// GENERATED
`

export default class GeneratedBinding extends Binding {
  constructor({
    link,
    fragmentReplacements,
    before,
    handler,
    subscriptionHandler,
  }: BindingOptions) {
    const schema = makeRemoteExecutableSchema({
      schema: typeDefs,
      link,
    })

    super({
      schema,
      fragmentReplacements,
      before,
      handler,
      subscriptionHandler,
    })
  }

  // GENERATE `query, mutation, subscription`
  // see: https://github.com/graphql-binding/graphql-static-binding/blob/master/src/generators/prisma-ts.ts
}
