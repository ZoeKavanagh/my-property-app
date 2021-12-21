import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useHistory } from 'react-router-dom'
import api from '../api'

interface Property {
    type: string
    price: number | undefined
    description: string
    image: string
  }

const PropertyCreate = () => {
    const history = useHistory()
    const [propertyDetails, setPropertyDetails] = useState<Property>({ image: '', price: undefined, description: '', type: '' })
    
    const handleOnSave = async () => {
      try {
        await api.createProperty(propertyDetails)
        history.push('/properties')
      } catch(error) {
        console.log('error: ', error)
      }
    }

    const handleOnCancel = () => {
        history.push('/properties')
    }

    return (
        <>
            <Typography variant="h4">Create Property Here</Typography>
                <TextField
                autoFocus
                margin="dense"
                id="image"
                label="Enter Image Url"
                type="string"
                fullWidth
                placeholder={'www.image.url'}
                variant="standard"
                onChange = {(event) => {
                    setPropertyDetails({
                    ...propertyDetails,
                    image: event.target.value
                })
                }}
            />
            <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Enter Price"
                type="number"
                placeholder={'£500,000'}
                fullWidth
                onChange = {(event) => {
                    setPropertyDetails({
                    ...propertyDetails,
                    price: Number(event.target.value)
                })
                }}
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="type"
                label="Enter Property Type"
                type="text"
                fullWidth
                placeholder={'House'}
                variant="standard"
                onChange = {(event) => {
                  setPropertyDetails({
                    ...propertyDetails,
                    type: event.target.value
                })
                }}
            />
            <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Enter Description"
                type="text"
                fullWidth
                placeholder={'Describe the property here'}
                variant="standard"
                onChange = {(event) => {
                  setPropertyDetails({
                    ...propertyDetails,
                    description: event.target.value
                })
                }}
            />
            <Button onClick={handleOnSave}>Save</Button>
            <Button onClick={handleOnCancel}>Cancel</Button>
        </>
    )
}

export default PropertyCreate