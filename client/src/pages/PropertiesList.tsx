import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'
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
 padding: '25px';
`

const EmptyPlaceholder = styled.div`
 display: flex;
 align-self: center;
 font-colour: red;
`

const PropertyScrollWrapper = styled.div`
  max-height: 1000px;
  overflow-y: scroll;
  position: sticky;
`

interface Property {
  _id: any
  type: string
  price: number
  description: string
  image: string
}

const PropertiesList = () => {
    const history = useHistory()
    const [properties, setProperties] = useState([])

    const fetchProperties = async () => {
        try {
        let res = await api.getAllProperties()
        setProperties(res.data.data)
        } catch(error) {
            // TODO: display error message to user
            console.log('error: ', error)
        }
    }

    useEffect(() => {
        fetchProperties()
    },[properties])

   

    const handleOnDelete = async (id: string) => {
        try {
          await api.deletePropertyById(id)
          const updatedProperties = properties.filter((property: Property) => {
            property._id !== id
          })

          //@ts-ignore
          setProperties(updatedProperties)
        } catch (error) {
          // TODO: display error message to user
          console.log('error', error)
        }
    }

    const saveProperty = async (id: string, payload: any) => {
      try {
        await api.updatePropertyById(id, payload)
      
        const updatedProperties = properties.map((property: Property) => {
          if (property._id === id) {
            return { _id: id, ...payload}
          }
  
          return property
        })
        //@ts-ignore
        setProperties(updatedProperties)
        // TODO: display success message to user
      } catch(error) {
        // TODO: display error message to user
        console.log('error', error)
      }
    }

    const onCreateClick = () => history.push('/property')

    return (
        <>  
            <div style={{ textAlign: 'center', margin: '20px' }}>
              <Typography variant="h4">My Property App</Typography>
              <div style={{ marginTop: '20px' }}>
                <Button variant="contained" onClick={onCreateClick}>
                  Create New Property
                </Button>
              </div>
            </div>
            {!properties.length && (
              <div style={{ textAlign: 'center', margin: '20px' }}>
                <EmptyPlaceholder>Sorry no properties available</EmptyPlaceholder>
              </div>
            )}
            <PropertyScrollWrapper>
              {properties.length > 0 && properties.map((property: Property) => {
                return (
                  <>
                    <PropertyListContainer key={property._id.toString()}>
                        <PropertyCard
                            key={property._id.toString()}
                            property={property}
                            onDelete={handleOnDelete}
                            saveEdit={saveProperty}
                        />
                    </PropertyListContainer>
                  </>
                )
              })}
            </PropertyScrollWrapper>
        </>
    )
}

export default PropertiesList