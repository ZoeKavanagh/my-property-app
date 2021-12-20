import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createProperty = payload => api.post(`/property`, payload)
export const getAllProperties = () => api.get(`/properties`)
export const updatePropertyById = (id, payload) => api.put(`/property/${id}`, payload)
export const deletePropertyById = id => api.delete(`/property/${id}`)
export const getPropertyById = id => api.get(`/property/${id}`)

const apis = {
    createProperty,
    getAllProperties,
    updatePropertyById,
    deletePropertyById,
    getPropertyById,
}

export default apis