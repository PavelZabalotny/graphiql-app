export const SWAPI_GRAPHQL_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index'

export interface GraphQLQueryResponse {
  data?: string
  error?: string
}

export async function httpSendRequest(query: string, variables: string): Promise<GraphQLQueryResponse | undefined> {
  try {
    const method = 'POST'
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({
      query,
      variables,
    })

    const response = await fetch(SWAPI_GRAPHQL_URL, {
      method,
      headers,
      body,
    })

    return (await response.json()) as GraphQLQueryResponse
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message)
    }
  }
}
