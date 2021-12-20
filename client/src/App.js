import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => setData(data.data));
  },[])

  console.log(';lkwejrlwkejrw')

  return (
    <div className="App">
      <header className="App-header">
        {data.length && data?.map((property) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={property.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {property.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        ))}
        </header>
    </div>
  )
}

export default App;
