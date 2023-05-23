import { type IntrospectionQuery } from 'graphql'

import { SWAPI_GRAPHQL_URL } from './httpSendRequest'

export interface IntrospectionQueryResponse {
  data: IntrospectionQuery
}

export async function httpIntrospectionQuery(query: string): Promise<IntrospectionQueryResponse | undefined> {
  try {
    const method = 'POST'
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({
      query,
    })
    const response = await fetch(SWAPI_GRAPHQL_URL, {
      method,
      headers,
      body,
    })
    const json = (await response.json()) as IntrospectionQueryResponse

    return json
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message)
    }
  }
}
