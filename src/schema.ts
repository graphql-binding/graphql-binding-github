import * as fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'

export default makeExecutableSchema({
  typeDefs: fs.readFileSync(__dirname + '/schema.graphql', 'utf-8'),
})
