import { Api } from '../api'

export async function findAllFilms() {
  try {
    const response = await Api.get('/films')
    return response.data
  } catch (error) {
    return { error }
  }
}