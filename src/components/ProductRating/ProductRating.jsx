import React from 'react'
import Rating from '@mui/material/Rating';

export default function ProductRating({rating}) {
  return (
    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
  )
}
