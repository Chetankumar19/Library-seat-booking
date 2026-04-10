function SeatGrid({ seats, selectedSeatId, onSelectSeat }) {
  const seatRows = seats.reduce((accumulator, seat) => {
    if (!accumulator[seat.row]) {
      accumulator[seat.row] = []
    }
    accumulator[seat.row].push(seat)
    return accumulator
  }, {})

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <p className="section-label">Seat Matrix</p>
          <h2>A1 to D10 layout</h2>
        </div>
      </div>

      <div className="rows-wrap">
        {Object.entries(seatRows).map(([row, rowSeats]) => (
          <section key={row} className="row-block">
            <h3 className="row-title">Row {row}</h3>

            <div className="seat-grid">
              {rowSeats.map((seat) => (
                <button
                  key={seat.id}
                  type="button"
                  className={[
                    'seat-card',
                    seat.id === selectedSeatId ? 'selected' : '',
                    seat.isBooked ? 'booked' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onSelectSeat(seat)}
                  disabled={seat.isBooked}
                >
                  <span className="seat-id">{seat.label}</span>
                  {seat.isBooked ? (
                    <span className="booked-tag">Already Booked</span>
                  ) : (
                    <span className="available-tag">Available</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default SeatGrid
