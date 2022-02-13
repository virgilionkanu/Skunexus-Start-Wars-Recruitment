import { Api } from '../api'

export async function findAllPlanets() {
  try {
    const response = await Api.get('/planets')
    return response.data
  } catch (error) {
    return { error }
  }
}