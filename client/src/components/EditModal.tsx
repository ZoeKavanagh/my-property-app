import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// TODO extract into types file
interface Property {
  _id: any
  type: string
  price: number | null
  description: string
  image: string
}

interface EditModal {
  open: boolean
  property: Property
  handleClose: () => void
  handleSave: (id: string, property: Property) => void
}

const EditModal = ({ property, open, handleClose, handleSave }: EditModal) => {
  const [updatedDetails, setUpdatedDatails] = useState({...property})
 
  
  const onSave = async () => {
    try {
      handleSave(property._id.toString(), updatedDetails)
      handleClose()
    } catch(error) {
      // TODO: display error message
      console.log('error', error)
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Property Details</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="image"
            label="Enter Image Url"
            type="string"
            fullWidth
            defaultValue={updatedDetails.image}
            variant="standard"
            onChange = {(event) => {
              setUpdatedDatails({
                ...updatedDetails,
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
            fullWidth
            defaultValue={updatedDetails.price}
            onChange = {(event) => {
              setUpdatedDatails({
                ...updatedDetails,
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
            defaultValue={updatedDetails.type}
            variant="standard"
            onChange = {(event) => {
              setUpdatedDatails({
                ...updatedDetails,
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
            defaultValue={updatedDetails.description}
            variant="standard"
            onChange = {(event) => {
              setUpdatedDatails({
                ...updatedDetails,
                description: event.target.value
              })
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditModal