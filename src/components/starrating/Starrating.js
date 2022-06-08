import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'
    export default function Starrating() {
        const [rating, setRating] = useState("") // initial rating value
      
        // Catch Rating value
        const handleRating = (rate) => {
          setRating(rate)
          console.log(rate)
          // other logic
        }
        console.log(rating)
        return (
          <div className='App'>
            <Rating  onClick={handleRating} showTooltip
            iconsCount={5} size={25} allowHalfIcon={false} /* Available Props */ />
          </div>
        )
      }
