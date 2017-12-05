import {
  delegateToSchema,
  makeExecutableSchema,
  makeRemoteExecutableSchema,
} from 'graphql-tools'
import { GraphQLSchema, GraphQLResolveInfo } from 'graphql'
import * as fs from 'fs'
import * as path from 'path'
import GitHubLink from './GitHubLink'

export class GitHub {
  private schema: GraphQLSchema

  constructor(token: string) {
    const typeDefs = fs.readFileSync(
      path.join(__dirname, '..', 'schema', 'github.graphql'),
      { encoding: 'utf8' },
    )

    const introspectionSchema = makeExecutableSchema({ typeDefs })
    const link = new GitHubLink(token)

    this.schema = makeRemoteExecutableSchema({
      schema: introspectionSchema,
      link,
    })
  }

  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: { [key: string]: any },
    context: any,
    info: GraphQLResolveInfo,
  ) {
    return delegateToSchema(
      this.schema,
      {},
      operation,
      fieldName,
      args,
      context,
      info,
    )
  }
}
