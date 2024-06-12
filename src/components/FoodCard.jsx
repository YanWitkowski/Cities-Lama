import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StyledCard from '../components/CustomCard';
import '../index.css';

const FoodCard = ({ food }) => {
  return (
    <StyledCard sx={{ width: "100%", maxWidth: 245 }}>
      <CardActionArea className="card-action-area">
        <CardMedia
          component="img"
          className="card-media"
          // style={{ height: 140, objectFit: 'cover' }} 
          image={food.image}
          alt={food.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {food.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {food.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default FoodCard;
