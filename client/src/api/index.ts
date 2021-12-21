import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export const createProperty = (payload: any) => api.post(`/property`, payload)
export const getAllProperties = () => api.get(`/properties`)
export const updatePropertyById = (id: string, payload: any) => api.put(`/property/${id}`, payload)
export const deletePropertyById = (id: string) => api.delete(`/property/${id}`)
export const getPropertyById = (id: string) => api.get(`/property/${id}`)

const apis = {
    createProperty,
    getAllProperties,
    updatePropertyById,
    deletePropertyById,
    getPropertyById,
}

export default apis