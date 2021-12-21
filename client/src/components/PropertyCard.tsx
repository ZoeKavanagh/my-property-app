import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditModal from './EditModal'
import { Button, CardActionArea, CardActions } from '@mui/material';
interface Property {
  _id: any
  type: string
  price: number
  description: string
  image: string
}

interface PropertyCardProps {
  saveEdit: (id: string, payload: any) => void
  property: any
  onDelete: (id: string) => void
}

const PropertyCard = ({ property, onDelete, saveEdit }: PropertyCardProps) => {
  const { image, id, price, description, type } = property
  const [displayEditModal, setDisplayEditModal] = useState(false)

  const handleOnEdit = () => {
    setDisplayEditModal(true)
  }
  
  const handleOnDelete = async () => {
    try {
      console.log('handleOnDelete', property._id.toString())
      onDelete(property._id.toString())
    } catch(error) {
      // TODO: display user error message
      console.log('error', error)
    }
  }

  return  (
    <>
    <Card sx={{ maxWidth: '350px', padding: '25px', margin: '25px' }}>
      <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`£${price}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleOnEdit()}>
            Edit
          </Button>
          <Button size="small" color="primary" onClick={handleOnDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <EditModal
        key={property._id.toString()}
        open={displayEditModal}
        property={property}
        handleClose={() => setDisplayEditModal(false)}
        handleSave={saveEdit}
      />
    </>
  )
}

export default PropertyCard