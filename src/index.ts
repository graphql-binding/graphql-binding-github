import { Binding, BindingInstance } from './generated-binding'
import { HttpLink } from 'apollo-link-http'
import * as fetch from 'cross-fetch'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import * as fs from 'fs'

export class GitHubLink extends HttpLink {
  constructor(token: string) {
    if (!token) {
      throw new Error(
        'No Github token provided. Create one here: https://github.com/settings/tokens (Guide: https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql)',
      )
    }
    super({
      uri: 'https://api.github.com/graphql',
      headers: { Authorization: `Bearer ${token}` },
      fetch,
    })
  }
}

class GitHubBinding extends Binding {
  constructor(token: string) {
    const schema = makeRemoteExecutableSchema({
      schema: fs.readFileSync(__dirname + '/schema.graphql', 'utf-8'),
      link: new GitHubLink(token),
    })
    super({ schema })
  }
}

export interface BindingConstructor<T> {
  new (token: string): T
}

export const Github = GitHubBinding as BindingConstructor<BindingInstance>
