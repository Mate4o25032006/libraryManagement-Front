/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line no-unused-vars
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardBook({ book }) {
  const card = (
    <React.Fragment>
      <CardContent sx={{ maxHeight: '225px', overflow: 'auto' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {book.category.categoryName}
        </Typography>
        <Typography variant="h5" component="div">
          {book.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {book.author.name} - {book.numPages} Páginas
        </Typography>
        <Typography variant="body2">
          {book.description}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ maxWidth: 275, maxHeight: 350, overflow: 'hidden' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
