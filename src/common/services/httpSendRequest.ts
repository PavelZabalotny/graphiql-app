export const SWAPI_GRAPHQL_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index'

export async function httpSendRequest(query: string, variables: string): Promise<Response> {
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify({
    query,
    variables,
  })

  return await fetch(SWAPI_GRAPHQL_URL, {
    method,
    headers,
    body,
  })
}
