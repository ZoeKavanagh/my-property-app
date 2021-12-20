import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface PropertyCardProps {
  property: any
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const PropertyCard = ({ property, onEdit, onDelete }: PropertyCardProps) => {
  const { image, id, price, description, type } = property
  return  (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {price}
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
          <Button size="small" color="primary" onClick={() => onEdit(id)}>
            Edit
          </Button>
          <Button size="small" color="primary" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    )
}

export default PropertyCard