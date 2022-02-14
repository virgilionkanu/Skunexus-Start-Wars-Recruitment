import { Api } from '../api'

export async function findAllResidents() {
  try {
    const response = await Api.get('/people')
    return response.data
  } catch (error) {
    return { error }
  }
}