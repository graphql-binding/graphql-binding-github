import { makeRemoteExecutableSchema } from 'graphql-tools'
import { HttpLink, PrismaLink, PrismaSchema, transformer } from 'apollo-link-http'
import * as fetch from 'cross-fetch'
import { GitHubLink } from './link'
import * as fs from 'fs'

// export const link = new GitHubLink('hallo')

// // do crazy transforms here
// export const schema = makeRemoteExecutableSchema({
//   schema: fs.readFileSync('typeDefs.graphql'),
//   link
// })


export const schema = makePrismaSchema('https://myendpoint')