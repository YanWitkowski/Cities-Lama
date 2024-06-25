import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)(({ theme }) => ({
  '&:hover': {
    boxShadow: theme.shadows[6], // Increase shadow on hover
    transform: 'scale(1.02)', // Slightly enlarge the card on hover
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
}));

export default StyledCard;
