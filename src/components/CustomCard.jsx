import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)(({ theme }) => ({
  '&:hover': {
    boxShadow: theme.shadows[6], // Увеличение тени при наведении
    transform: 'scale(1.02)', // Незначительное увеличение карточки при наведении
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
}));

export default StyledCard;
