import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Event {
  image: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={event.image || 'https://via.placeholder.com/150'}
        alt={event.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(event.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.location}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;