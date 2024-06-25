import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StyledCard from '../components/CustomCard';
import '../index.css';

const AttractionCard = ({ attraction }) => {
  return (
    <StyledCard className="attraction-card">
      <CardActionArea className="card-action-area" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <CardMedia
          component="img"
          className="card-media"
          image={attraction.image}
          alt={attraction.name}
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div" align="center">
            {attraction.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {attraction.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default AttractionCard;