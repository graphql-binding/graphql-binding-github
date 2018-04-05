import { Binding } from 'graphql-binding/dist'
import GitHubLink from './GitHubLink'

export class GitHub extends Binding {

  constructor(token: string) {

    // TODO: come up with a way how to import generated code

    const link = new GitHubLink(token)

  }

  // TODO: remoteResolvers
}
