import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropertyCard from '../components/PropertyCard'
import api from '../api'

const PropertyListContainer = styled.div`
 display: flex;
 align-self: center;
 flex-direction: column;
 height: '800px';
 width: '400px';
 justify-content: center;
 align-items: center;
`

const PropertiesList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [properties, setProperties] = useState([])

    const fetchProperties = async () => {
        try {
        let res = await api.getAllProperties()
        setProperties(res.data.data)
        } catch(error) {
            // TODO: display erro message to user
            console.log('error: ', error)
        }
    }

    useEffect(() => {
        fetchProperties()
    },[])

    const handleOnEdit = () => {
        console.log('editing')
    }

    const handleOnDelete = () => {
        console.log('deleting')
    }

    return (
        <>
        <PropertyListContainer>
            {properties.length && properties.map((property) => (
                <PropertyCard
                    key={property._id}
                    property={property}
                    onEdit={handleOnEdit}
                    onDelete={handleOnDelete}
                />
            ))}
            </PropertyListContainer>
        </>
    )
}

export default PropertiesList