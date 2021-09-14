import { httpClient } from '../tools/httpClient'

export const getCityByID = async (id) => {
  try {
    const res = await httpClient.get(`/api/cities/geonameid:${id}`)
    return res
  } catch(err){
    throw(err)
  }  
}