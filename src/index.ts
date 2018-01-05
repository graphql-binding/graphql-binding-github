import { Binding } from 'graphql-binding/dist'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import { GraphQLSchema, GraphQLUnionType, GraphQLInterfaceType, buildSchema } from 'graphql'
import * as fs from 'fs'
import * as path from 'path'
import GitHubLink from './GitHubLink'

export class GitHub extends Binding {
  constructor(token: string) {
    const typeDefs = fs.readFileSync(path.join(__dirname, '..', 'schema', 'github.graphql'), {
      encoding: 'utf8'
    })

    const link = new GitHubLink(token)

    const schema = makeRemoteExecutableSchema({
      schema: typeDefs,
      link
    })

    super({ schema, fragmentReplacements: {} })
  }

  remoteResolvers(filterSchema?: GraphQLSchema | string): IResolvers {
    const typeMap = this.schema.getTypeMap()

    if (filterSchema && typeof filterSchema === 'string') {
      filterSchema = buildSchema(filterSchema)
    }
    const filterTypeMap = filterSchema instanceof GraphQLSchema ? filterSchema.getTypeMap() : typeMap
    const filterType = typeName => typeName in filterTypeMap

    const resolvers = {}
    Object.keys(typeMap)
      .filter(filterType)
      .forEach(typeName => {
        const type = typeMap[typeName]
        if (type instanceof GraphQLUnionType || type instanceof GraphQLInterfaceType) {
          resolvers[typeName] = {
            __resolveType: type.resolveType
          }
        }
      })

    return resolvers
  }
}
