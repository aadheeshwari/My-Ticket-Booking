
import React, { useState } from 'react'
import clsx from 'clsx'
import './Seat.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'; 
 
const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

export default function Seat() {
  
    const ordermovie=useSelector(state=>state.counter.ordermovie)
  console.log(ordermovie)
  
  const dispatch=useDispatch();
  const [selectedMovie] = useState(ordermovie[0])
  const [selectedSeats, setSelectedSeats] = useState([])
console.log(selectedMovie)
  return (
    <div className="App">
      
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">₹ 
          {selectedSeats.length * selectedMovie.price}
        </span>
        
      </p>
    </div>
  )
}


function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small className="col">Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small className="col">Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small className="col">Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}
