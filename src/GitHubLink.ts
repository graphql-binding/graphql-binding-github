import { FetchOptions, HttpLink } from 'apollo-link-http'
import * as fetch from 'cross-fetch'

export default class GitHubLink extends HttpLink {
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
